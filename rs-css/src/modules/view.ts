function focus(e) {
  console.log(e.target, e.target.innerText);
  if (e.target.innerText === 'Type selector here') e.target.innerText = '';
}

function unfocus(e) {
  if (e.target.innerText.trim() === '') e.target.innerText = 'Type selector here';
}

function setupViews() {
  const lineCount = 20;
  const nodeList: HTMLElement[] = Array.from(document.querySelectorAll('.view__numbers'));

  nodeList.forEach((node) => {
    for (let i = 1; i <= lineCount; i += 1) {
      const element = node;
      element.innerHTML += `${i}<br>`;
    }
  });

  const editable: HTMLElement = document.querySelector('.view__editable');
  editable.addEventListener('focus', focus);
  editable.addEventListener('blur', unfocus);

  const editorView = document.querySelector('.editor-view');
  editorView.addEventListener('click', () => { editable.focus(); });
}

document.addEventListener('DOMContentLoaded', setupViews);
