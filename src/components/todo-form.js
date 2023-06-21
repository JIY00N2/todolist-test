export default function TodoForm({ $target, onSubmit }) {
  if (!new.target) {
    throw new Error('컴포넌트에 new를 붙여주세요!');
  }
  const $form = document.createElement('form');
  $target.appendChild($form);

  let isInit = false;

  this.render = () => {
    $form.innerHTML = `
    <input class="todo-form" type='text' name='todo'/>
    <button class="add-button">Add</button>
    `;
    if (!isInit) {
      $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const $todo = $form.querySelector('input[name=todo]');
        const text = $todo.value;
        if (text.length >= 1 && text.length <= 15) {
          $todo.value = '';
          onSubmit({ text, isCompleted: false });
        } else {
          alert('글자수의 길이는 1이상 15이하로 입력해주세요!');
        }
      });
      isInit = true;
    }
  };

  this.render();
}

// 폼 안에 들어있는 버튼은 type='submit'과 동일
// 따라서 폼에 submit만 넣어도 input에 enter를 치는 경우, 버튼을 누르는 경우 모두 처리 가능
