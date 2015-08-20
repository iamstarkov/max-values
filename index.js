import { split, last, sortBy, path } from 'ramda';
import camelcase from 'camelcase';

const splitByDot = split('.');
const maxCamel = camelcase.bind(null, 'max');

export default function maxValues(arr, props) {
  if (!arr || !props) return;
  props.forEach(prop => {
    const sortByProp = sortBy(path(splitByDot(prop)));
    last(sortByProp(arr))[maxCamel(prop)] = true;
  });
  return arr;
};
