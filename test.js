import { equal } from 'assert';
import maxValues from './index';

it('should maxValues', () =>
  equal(maxValues('unicorns'), 'unicorns'));

it('should maxValues invalid input', () =>
  equal(maxValues(), undefined));
