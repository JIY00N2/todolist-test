import Header from './components/header.js';
import TodoForm from './components/todo-form.js';
import TodoList from './components/todo-list.js';
import TodoCount from './components/todo-count.js';
import { setItem } from './utils/storage.js';

export default function App({ $target, initialState }) {
  // new 방어 코드 추가

  if (!new.target) {
    throw new Error('함수 또는 생성자에 new를 붙여주세요!');
  }

  new Header({
    $target,
    text: 'Simple Todo List',
  });

  new TodoForm({
    $target,
    onSubmit: ({ text, isCompleted }) => {
      const nextState = [...todoList.state, { text, isCompleted }];
      todoList.setState(nextState);
      setItem('todos', JSON.stringify(nextState));
      todoCount.setState(nextState);
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
    onClick: ({ index }) => {
      const nextState = [...todoList.state];
      nextState[index].isCompleted = !nextState[index].isCompleted;
      setItem('todos', JSON.stringify(nextState));
      todoList.setState(nextState);
      todoCount.setState(nextState);
    },
    onDelete: ({ index }) => {
      const nextState = [...todoList.state];
      nextState.splice(index, 1);
      setItem('todos', JSON.stringify(nextState));
      todoList.setState(nextState);
      todoCount.setState(nextState);
    },
  });

  const todoCount = new TodoCount({
    $target,
    initialState,
  });
}

/*
TodoForm에서 입력받은 값을 TodoList에 넣으려면?
TodoForm 생성 파라미터에 이벤트 콜백을 넣고,
text를 입력 받으면 해당 콜백을 통해 text 넘겨주기
 */
