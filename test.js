import { equal, deepEqual } from 'assert';
import maxValues from './index';

const input = [{ name: 'Bob',   age: 25, skills: { crypto: 5  }},
               { name: 'Alice', age: 14, skills: { crypto: 10 }}]

it('should maxValues', () =>
  deepEqual(maxValues(input, ['age', 'skills.crypto']),
    [{ name: 'Bob',   age: 25, skills: { crypto: 5  }, maxAge: true },
     { name: 'Alice', age: 14, skills: { crypto: 10 }, maxSkillsCrypto: true }]));

it('should maxValues invalid input', () =>
  equal(maxValues(), undefined));
