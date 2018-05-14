import join from 'lodash';
import testImg from './images/test.png';
import svgImg from './images/svgImage.svg';
import './base.scss'
const component = () => {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  var testImage = new Image();
  testImage.src = testImg;
  element.appendChild(testImage);
  var svgImage = new Image();
  svgImage.src = svgImg;
  element.appendChild(svgImage);
  return element;
}

document.body.appendChild(component());
