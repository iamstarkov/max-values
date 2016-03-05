import { equal, deepEqual } from 'assert';
import maxValues from './index';

import simple from './simple.json';

it('should simple maxValues', () =>
  deepEqual(maxValues(simple.input, simple.props), simple.expected));

it('should maxValues invalid input', () =>
  equal(maxValues(), undefined));
