import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
// import BmiCalculator from './BmiCalculator';

// const main = BmiCalculator;

run(, {
  DOM: makeDOMDriver('#main-container')
});
