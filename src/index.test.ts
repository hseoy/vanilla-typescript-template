import { sayHello } from '.';

describe('sayHello() test', () => {
  it('should return "Hello"', () => {
    expect(sayHello()).toBe('Hello');
  });
});
