import { equal, deepEqual } from 'assert';
import maxValues from './index';

const input = [{ name: 'Bob',   age: 25, skills: { crypto: 1  }},
               { name: 'Some',  age: 14, skills: { crypto: 5 }},
               { name: 'Alice', age: 7,  skills: { crypto: 10 }},
               { name: 'Gato',  age: 8 }]

it('should maxValues', () =>
  deepEqual(maxValues(input, ['age', 'skills.crypto']),
    [{ name: 'Bob',   age: 25, skills: { crypto: 1  }, maxAge: true },
     { name: 'Some',  age: 14, skills: { crypto: 5 }},
     { name: 'Alice', age: 7,  skills: { crypto: 10 }, maxSkillsCrypto: true },
     { name: 'Gato',  age: 8 }]));

it('should maxValues invalid input', () =>
  equal(maxValues(), undefined));
