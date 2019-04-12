import _ from 'lodash';
import './style.css';
import image from  './bimage.jpg';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
   var imageObj = new Image();
   imageObj.src = image;

   element.appendChild(imageObj);

  return element;
}

document.body.appendChild(component());