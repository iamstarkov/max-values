import { equal, deepEqual } from 'assert';
import requireUncached from 'require-uncached';
import maxValues from './index';

const simple = requireUncached('./simple.json');
const complicated = requireUncached('./complicated.json');

it('should simple maxValues', () =>
  deepEqual(maxValues(simple.input, simple.props), simple.expected));

it('should complicated maxValues', () =>
  deepEqual(maxValues(complicated.input, complicated.props), complicated.expected));

it('should maxValues invalid input', () =>
  equal(maxValues(), undefined));
