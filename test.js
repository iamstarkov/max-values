import { equal } from 'assert';
import maxValues from './index';

const input = [{ name: 'Bob',   age: 16, skills: { cryptography: 9 }},
               { name: 'Alice', age: 14, skills: { cryptography: 10 }}]

it('should maxValues simple', () =>
  equal(maxValues(input, ['age'])[0].maxAge, true));

it('should maxValues nested', () =>
  equal(maxValues(input, ['skills.cryptography'])[1].maxSkillsCryptography, true));

it('should maxValues invalid input', () =>
  equal(maxValues(), undefined));
