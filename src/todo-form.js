function TodoForm({ $target, onSubmit }) {
  if (!new.target) {
    throw new Error('함수 또는 생성자에 new를 붙여주세요!');
  }
  const $form = document.createElement('form');
  $target.appendChild($form);
  let isInit = false;
  this.render = () => {
    $form.innerHTML = `
    <input type='text' name='todo'/>
    <button>Add</button>
    `;
    if (!isInit) {
      $form.addEventListener('submit', (e) => {
        e.preventDefault();

        const $todo = $form.querySelector('input[name=todo]');
        const text = $todo.value;
        if (text.length > 1) {
          $todo.value = '';
          onSubmit(text);
        }
      });
      isInit = true;
    }
  };

  this.render();
}

// 폼 안에 들어있는 버튼은 type='submit'과 동일
// 따라서 폼에 submit만 넣어도 input에 enter를 치는 경우, 버튼을 누르는 경우 모두 처리 가능
