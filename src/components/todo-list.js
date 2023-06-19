import todoValidation from '../utils/validation.js';
import { getItem, setItem } from '../utils/storage.js';
// params.$target - 해당 컴포넌트가 추가가 될 DOM element
// params.initialState - 해당 컴포넌트의 초기 상태
export default function TodoList({ $target, initialState, onClick }) {
  if (!new.target) {
    throw new Error('함수 또는 생성자에 new를 붙여주세요!');
  }

  // $를 붙여서 todoList에는 dom이 들어있다는 것을 명시
  const $todoList = document.createElement('div');
  $target.appendChild($todoList);

  todoValidation(initialState);
  this.state = initialState;

  this.setState = (nextState) => {
    todoValidation(nextState);
    this.state = nextState;
    this.render();
  };

  // const todolists = JSON.parse(localStorage.getItem('todos'));
  // console.log(todolists);
  // delete todolists[0];
  // localStorage.setItem('todolists', JSON.stringify(todolists));

  // this.removeTodoList = (index) => {
  //   // 클릭한 index에 해당하는 항목을 state에서 제거합니다.
  //   this.state.splice(index, 1);
  //   this.render();
  // };

  this.render = () => {
    // this.state =[{text: '자바스크립트 공부하기'}, {text:'...'}]
    // map을 돈 이후에는 아래처럼 만들어짐
    // ['<li> 자바스크립트 공부하기</li>', '...']
    // join을 거치면
    // <li> 자바스크립트 공부하기</li>,<li>...</li>
    $todoList.innerHTML = `<ul>${this.state
      .map(({ text, isCompleted }, index) =>
        isCompleted
          ? `<li data-index = '${index}'><del>${text}</del></li>`
          : `<li data-index = '${index}'>${text}</li>`
      )
      .join('')}</ul>`;

    const $liTodolists = $todoList.querySelectorAll('li');
    $liTodolists.forEach(($li) => {
      $li.addEventListener('click', (e) => {
        const { index } = e.currentTarget.dataset;
        console.log({ index });
        onClick({ index });
      });
    });
  };
  this.render();
}
