// 유효성 검사 부분
export default function todoValidation(todos) {
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
}
