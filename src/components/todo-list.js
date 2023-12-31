import todoValidation from '../utils/validation.js';
// params.$target - 해당 컴포넌트가 추가가 될 DOM element
// params.initialState - 해당 컴포넌트의 초기 상태
export default function TodoList({ $target, initialState, onClick, onDelete }) {
  if (!new.target) {
    throw new Error('컴포넌트에 new를 붙여주세요!');
  }

  // $를 붙여서 todoList에는 dom이 들어있다는 것을 명시
  const $todoList = document.createElement('div');
  $todoList.classList.add('todo-list');
  $target.appendChild($todoList);

  todoValidation(initialState);
  this.state = initialState;

  this.setState = (nextState) => {
    todoValidation(nextState);
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    // this.state =[{text: '자바스크립트 공부하기'}, {text:'...'}]
    // map을 돈 이후에는 아래처럼 만들어짐
    // ['<li> 자바스크립트 공부하기</li>', '...']
    // join을 거치면
    // <li> 자바스크립트 공부하기</li>,<li>...</li>
    $todoList.innerHTML = `<ul>${this.state
      .map(({ text, isCompleted }, index) =>
        isCompleted
          ? `<div class= 'todo'><li data-index = '${index}'><del>${text}</del></li><button class="delete-button" data-index="${index}">❌</button></div>
          `
          : `<div class= 'todo'><li data-index = '${index}'>${text}</li><button class="delete-button" data-index="${index}">❌</button></div>
          `
      )
      .join('')}</ul>`;
    // 취소선
    const $liTodolists = $todoList.querySelectorAll('li');
    $liTodolists.forEach(($li) => {
      $li.addEventListener('click', (e) => {
        const { index } = e.currentTarget.dataset;
        onClick({ index });
      });
    });
    // 삭제
    const $deleteBtns = $todoList.querySelectorAll('.delete-button');
    $deleteBtns.forEach(($button) => {
      $button.addEventListener('click', (e) => {
        e.stopPropagation();
        const { index } = e.target.dataset;
        onDelete({ index });
      });
    });
  };
  this.render();
}
