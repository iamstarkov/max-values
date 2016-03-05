import { equal, deepEqual } from 'assert';
import maxValues from './index';

import simple from './simple.json';
import complicated from './complicated.json';

it('should simple maxValues', () =>
  deepEqual(maxValues(simple.input, simple.props), simple.expected));

it('should complicated maxValues', () =>
  deepEqual(maxValues(complicated.input, complicated.props), complicated.expected));

it('should maxValues invalid input', () =>
  equal(maxValues(), undefined));
