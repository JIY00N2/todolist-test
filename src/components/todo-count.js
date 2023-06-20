import todoValidation from '../utils/validation.js';

export default function TodoCount({ $target, initialState }) {
  if (!new.target) {
    throw new Error('함수 또는 생성자에 new를 붙여주세요!');
  }
  const $todoCount = document.createElement('div');
  $target.appendChild($todoCount);

  todoValidation(initialState);
  this.state = initialState;

  this.setState = (nextState) => {
    todoValidation(nextState);
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const totalTodoCount = this.state.length;
    let completedTodoCount = this.state.filter(
      ({ isCompleted }) => isCompleted
    ).length;
    $todoCount.innerHTML = `완료된 Todo: ${completedTodoCount} / 전체 Todo: ${totalTodoCount} `;
  };

  this.render();
}
