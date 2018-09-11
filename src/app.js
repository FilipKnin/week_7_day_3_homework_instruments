const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');
const InstrumentFamilies = require('./models/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {

  const formView = new FormView();
  formView.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();



});
