import xs from 'xstream';
// import {h1} from '@cycle/dom';
const { html } = require('snabbdom-jsx');
const JSX = {createElement: html};

export default function Main() {
  const sinks = {
    DOM: xs.periodic(1000).map(i =>
      <h1>{ i } seconds </h1>
    )
  };
  return sinks;
}
