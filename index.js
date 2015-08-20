import { maxBy, path, split } from 'ramda';
import camelcase from 'camelcase';

const splitByDot = split('.');

export default function maxValues(arr, props) {
  if (!arr || !props) return;
  props.forEach(prop => {
    const maxByProp = maxBy(path(splitByDot(prop)));
    const camelCaseMaxProp = camelcase('max', prop);
    maxByProp.apply(null, arr)[camelCaseMaxProp] = true;
  });
  return arr;
};
