import IGameObject from '../IGameObject/IGameObject';

export default class Scene {
  public gameObjects: Array<IGameObject>;

  constructor(private context: CanvasRenderingContext2D) {}

  update(delta: number): void {
    this.gameObjects.forEach((gameObject) => {
      console.log(delta);
      gameObject.draw(this.context);
    });
  }

  addObject(gameObject: IGameObject): string {
    this.gameObjects.push(gameObject);

    const objectId: string = (this.gameObjects.length - 1).toString();

    return objectId;
  }
}
