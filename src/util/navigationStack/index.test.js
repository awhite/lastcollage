import Stack from '.';

test('create new stack', () => {
  const stack = new Stack();
  expect(stack.size()).toBe(0);
});

test('push', () => {
  const stack = new Stack();
  stack.push(1);
  expect(stack.top()).toBe(1);
  stack.push(2);
  expect(stack.top()).toBe(2);
});

test('pop', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  expect(stack.pop()).toBe(2);
  expect(stack.top()).toBe(1);
  expect(stack.pop()).toBe(1);
  expect(stack.top()).toBe(null);
});
