function App({ $target, initialState }) {
  new Header({
    $target,
    text: 'Simple Todo List',
  });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text }];
      todoList.setState(nextState);
      storage.setItem('todos', JSON.stringify(nextState));
    },
  });
  const todoList = new TodoList({
    $target,
    initialState,
  });
}

/*
TodoForm에서 입력받은 값을 TodoList에 넣으려면?
TodoForm 생성 파라미터에 이벤트 콜백을 넣고,
text를 입력 받으면 해당 콜백을 통해 text 넘겨주기
 */
