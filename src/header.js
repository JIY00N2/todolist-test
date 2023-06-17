function Header({ $target, text }) {
  if (!new.target) {
    throw new Error('함수 또는 생성자에 new를 붙여주세요!');
  }

  const $header = document.createElement('h1');
  $target.appendChild($header);
  this.render = () => {
    $header.textContent = text;
  };
  this.render();
}
