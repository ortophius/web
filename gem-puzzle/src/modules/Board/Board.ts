import Config from '../Config/Config';

import Chip from '../Chip/Chip';
import Container from '../Container/Container';

export default class Board extends Container {
  private table: number[][] = [];

  private chipSize: number;

  private emptyChip: Chip;

  private unwaitCallback: Function;

  private waitAnimation: boolean = false;

  private size: number;

  constructor(size) {
    super(0, 0, Config.canvas.width, Config.canvas.height);

    this.size = size;

    const chipCount = (size ** 2) - 1;

    this.chipSize = Config.canvas.width / size;

    const nums: number[] = [];

    this.unwaitCallback = this.unwait.bind(this);

    for (let i = 1; i <= chipCount; i += 1) {
      nums.push(i);
    }

    let solvable: boolean = false;
    let emptyIndex: number;

    while (!solvable) {
      for (let c = 0; c < nums.length; c += 1) {
        const newIndex = Math.floor(Math.random() * (nums.length));
        const tempNum = nums[c];
        nums[c] = nums[newIndex];
        nums[newIndex] = tempNum;
      }

      emptyIndex = Math.floor(Math.random() * (nums.length));
      const emptyRow = Math.ceil((emptyIndex + 1) / size);

      let pairCount = emptyRow;

      nums.forEach((firstNum, index) => {
        const subArray: number[] = nums.slice(index + 1);

        subArray.forEach((secondNum) => {
          if (firstNum > secondNum) pairCount += 1;
        });
      });

      if ((pairCount % 2) === 0) solvable = true;
    }

    nums.splice(emptyIndex, 0, 0);

    nums.forEach((num, index) => {
      const rowIndex = Math.floor(index / size);
      const { table } = this;
      if (!table[rowIndex]) table[rowIndex] = [];
      table[rowIndex].push(num);
    });

    const colorRate = 360 / (nums.length - 1);

    this.table.forEach((line, row) => {
      const y = row * this.chipSize;

      line.forEach((num, column) => {
        const color: string = (num === 0)
          ? 'rgb(255, 255, 255, 255)'
          : `hsl(${num * colorRate}, 75%, 65%)`;

        const x = column * this.chipSize;

        const chip = new Chip(x, y, this.chipSize, this.chipSize);

        chip.zIndex = (num === 0) ? 0 : 1;

        if (num !== 0) {
          chip.setNumber(num);
          chip.on('move', this.processMove.bind(this));
        } else this.emptyChip = chip;

        chip.backgroundColor = color;

        this.addObject(chip);
      });
    });

    this.lockChips();
  }

  private wait() {
    this.waitAnimation = true;
  }

  private unwait(e) {
    this.waitAnimation = false;
    e.caller.off('endmove', this.unwaitCallback);
    this.checkIfWin();
    this.lockChips();
  }

  private checkIfWin() {
    const { table } = this;
    const flatTable = [].concat(...table);

    let win = true;

    for (let i = 0; i < (flatTable.length - 1); i += 1) {
      if (flatTable[i] !== (i + 1)) win = false;
    }

    if (win) this.emit('win');
  }

  private processMove(e) {
    if (this.waitAnimation) return;

    const movingChip = <Chip>e.caller;

    const num = Number(movingChip.label.text);

    const { table } = this;

    let zeroRow: number;
    let zeroColumn: number;

    let numRow: number;
    let numColumn: number;

    table.forEach((row, rowNum) => {
      row.forEach((chipNum, colNum) => {
        if (chipNum === 0) {
          zeroRow = rowNum;
          zeroColumn = colNum;
        }

        if (chipNum === num) {
          numRow = rowNum;
          numColumn = colNum;
        }
      });
    });

    table[zeroRow][zeroColumn] = num;
    table[numRow][numColumn] = 0;

    const { x, y } = this.emptyChip;
    const { chipSize } = this;

    movingChip.moveTo(x, y);
    this.emptyChip.setPosition(numColumn * chipSize, numRow * chipSize);

    this.wait();

    movingChip.on('endmove', this.unwaitCallback);
  }

  changeTable(num: number) {
    if (num > ((this.size ** 2) - 1) || num === 0) return;

    const { table } = this;

    let zeroRow: number;
    let zeroColumn: number;

    let numRow: number;
    let numColumn: number;

    table.forEach((row, rowNum) => {
      row.forEach((chipNum, colNum) => {
        if (chipNum === 0) {
          zeroRow = rowNum;
          zeroColumn = colNum;
        }

        if (chipNum === num) {
          numRow = rowNum;
          numColumn = colNum;
        }
      });
    });

    table[zeroRow][zeroColumn] = num;
    table[numRow][numColumn] = 0;
  }

  lockChips() {
    this.children.forEach((object) => {
      const chip = <Chip>object;

      chip.movableTo.x = chip.x;
      chip.movableTo.y = chip.y;
    });

    this.zeroSurrounding.forEach((object) => {
      const chip = <Chip>object;
      chip.movableTo.x = this.emptyChip.x;
      chip.movableTo.y = this.emptyChip.y;
    });
  }

  get zeroSurrounding(): Chip[] {
    const { table } = this;
    let row: number;
    let column: number;

    for (let i = 0; i < table.length; i += 1) {
      const index = table[i].indexOf(0);
      if (index !== -1) {
        row = i;
        column = index;
      }
    }

    const sides = [
      (table[row + 1]) ? table[row + 1][column] : undefined,
      (table[row - 1]) ? table[row - 1][column] : undefined,
      table[row][column + 1],
      table[row][column - 1],
    ];

    const res = [];

    sides.forEach((sideNum) => {
      if (!sideNum) return;
      const chip = this.getChip(sideNum);
      res.push(<Chip>chip);
    });

    return res;
  }

  getChip(num: number): Chip | null {
    const { children } = this;
    let chip: Chip | null = null;

    for (let i = 0; i < children.length; i += 1) {
      const child = <Chip> children[i];
      if ((child.label) && (num === Number(child.label.text))) chip = child;
    }

    return <Chip>chip;
  }
}
