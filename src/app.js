const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');
const ResultView = require('./models/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {

  const formView = new FormView();
  formView.bindEvents();

});
