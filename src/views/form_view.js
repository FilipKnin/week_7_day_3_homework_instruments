const PubSub = require('../helper/pub_sub.js');

const FormView = function () {

};

FormView.prototype.bindEvents = function () {
  console.log('has a FormView');
  const listOfInstruments = document.querySelector('#instrument-families');
  console.log('has a list of instruments:', listOfInstruments);
  listOfInstruments.addEventListener('change', (event) => {
    console.log("has an event:", event);
    const selectedInstrument = event.target.value;
    console.log('has selectedInstrument:', selectedInstrument);
    PubSub.publish('Instrument:selected', selectedInstrument);
  });
};


module.exports = FormView;
