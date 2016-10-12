import xs from 'xstream';
// import {h1} from '@cycle/dom';
const { html } = require('snabbdom-jsx');

export default function Main() {
  const sinks = {
    DOM: xs.periodic(1000).map(i => <div>{ i } seconds </div>)
  };
  return sinks;
}
