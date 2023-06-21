export default function Header({ $target, text }) {
  if (!new.target) {
    throw new Error('컴포넌트에 new를 붙여주세요!');
  }

  const $header = document.createElement('h1');
  $target.appendChild($header);
  this.render = () => {
    $header.textContent = text;
  };
  this.render();
}
