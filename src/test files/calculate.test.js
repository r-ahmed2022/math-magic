import calculate from '../logic/calculate';

describe('calculate tests', () => {
  const objInput = {
    total: '3',
    next: '6',
    operation: '+',
  };
  test('AC', () => {
    expect(calculate(objInput, 'AC')).toEqual({
      next: null,
      operation: null,
      total: null,
    });
  });
  test('decimal dot test', () => {
    expect(calculate(objInput, '.')).toEqual({
      total: '3',
      next: '6.',
      operation: '+',
    });
  });
  test('+/- symbol', () => {
    expect(calculate(objInput, '+/-')).toEqual({
      total: '3',
      next: '-6',
      operation: '+',
    });
  });
});
