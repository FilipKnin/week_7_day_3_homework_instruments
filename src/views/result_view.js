const PubSub = require('../helper/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
PubSub.subscribe('Instrument:details', (event) => {
  const instrumentObject = event.detail;
  console.log('ResultView has instrumentObject', instrumentObject);
  this.display(instrumentObject);
});
};

ResultView.prototype.display = function (instrumentObject) {
const descriptionList = document.querySelector('#result');
console.log('ResultView has descriptionList', descriptionList);
const paragraph = document.createElement('p');
paragraph.textContent = `${instrumentObject.description}`;
descriptionList.appendChild(paragraph);

};

module.exports =  ResultView;
