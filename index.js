import { maxBy, path, split, apply, compose } from 'ramda';
import camelcase from 'camelcase';

const maxByProp = compose(apply, maxBy, path, split('.'));

export default function maxValues(arr, props) {
  if (!arr || !props) return;
  props.forEach(prop => { maxByProp(prop)(arr)[camelcase('max', prop)] = true; });
  return arr;
};
