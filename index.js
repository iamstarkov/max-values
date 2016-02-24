import R from 'ramda';
import camelcase from 'camelcase';

const sortBy = R.pipe(R.split('.'), R.path, R.sortBy);
const isNotNil = R.pipe(R.isNil, R.not);
const sortedAndFiltered = (prop, arr) => R.pipe(
  sortBy(prop),
  R.filter(R.pathSatisfies(isNotNil, R.split('.', prop))),
  R.last)(arr);

export default function maxValues(arr, props) {
  if (!arr || !props) return;
  props.forEach(prop => {
    sortedAndFiltered(prop, arr)[camelcase('max', prop)] = true;
  });
  return arr;
};
