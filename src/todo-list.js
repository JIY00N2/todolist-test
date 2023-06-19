// params.$target - 해당 컴포넌트가 추가가 될 DOM element
// params.initialState - 해당 컴포넌트의 초기 상태
export default function TodoList({ $target, initialState }) {
  if (!new.target) {
    throw new Error('함수 또는 생성자에 new를 붙여주세요!');
  }

  // $를 붙여서 todoList에는 dom이 들어있다는 것을 명시
  const $todoList = document.createElement('div');
  $target.appendChild($todoList);

  // 유효성 검사 부분
  const todoValidation = (todos) => {
    if (!Array.isArray(todos)) {
      throw new Error('todos는 배열로 입력해주세요!');
    }
    if (
      !todos.every(
        (item) => typeof item === 'object' && item.hasOwnProperty('text')
      )
    ) {
      throw new Error('todo의 요소는 객체이고 text 속성을 갖져야 합니다.');
    }
  };

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
      .map(({ text }) => `<li>${text}</li>`)
      .join('')}</ul>`;
  };
  this.render();
}
