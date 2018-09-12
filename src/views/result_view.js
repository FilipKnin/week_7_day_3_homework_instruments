const PubSub = require('../helper/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
PubSub.subscribe('Instrument:details', (event) => {
  const instrumentObject = event.detail;
  console.log('ResultView has instrumentObject', instrumentObject);
  this.displayDescription(instrumentObject);
  this.displayInstrumentsList(instrumentObject);
});
};

ResultView.prototype.displayDescription = function (instrumentObject) {
const descriptionList = document.querySelector('#result');
console.log('ResultView has descriptionList', descriptionList);
const paragraph = document.createElement('p');
paragraph.textContent = `${instrumentObject.description}`;
while (descriptionList.firstChild) {
  descriptionList.removeChild(descriptionList.firstChild);
};
descriptionList.appendChild(paragraph);
};

ResultView.prototype.displayInstrumentsList = function (instrumentObject) {
const instrumentsList = document.querySelector('#instruments-list');
console.log('displayInstrumentsList has instrumentsList', instrumentsList);
const olList = document.createElement('ol');
olList.id = "list";
instrumentsList.appendChild(olList);
const allInstruments = instrumentObject.instruments;
console.log('displayInstrumentsList has allInstruments', allInstruments)



// const result = allInstruments.forEach((instrument) => `${instrument}`);
// console.log(result);


// let result = for (let i = 0; i < allInstruments.length; i++) {
//   let instrument = allInstruments[i];
//   `${instrument}`;
// }
// console.log('displayInstrumentsList has result:'result)
// const result = for (instrument of allInstruments) {
//   const ulList = document.createElement('ul');
//   ulList.textContent = `${instrument}`;
//   olList.appendChild(ulList);
// }
};

module.exports =  ResultView;
