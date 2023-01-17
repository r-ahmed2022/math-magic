import operate from '../logic/operate';

describe('operate tests', () => {
  test('add should return 4', () => {
    const result = operate(2, 2, '+');
    expect(result).toBe('4');
  });

  test('subtract should return 2', () => {
    const result = operate(4, 2, '-');
    expect(result).toBe('2');
  });

  test('multiply should return 8', () => {
    const result = operate(4, 2, 'x');
    expect(result).toBe('8');
  });

  test('division should return 2', () => {
    const result = operate(4, 2, '÷');
    expect(result).toBe('2');
  });
});
