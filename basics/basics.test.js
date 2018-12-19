
test('null', () => {
  const nully = null;
  expect(nully).toBeNull();
  expect(nully).toBeDefined();
  expect(nully).not.toBeUndefined();
  expect(nully).toBeFalsy();
})

test('testing strings using toMatch', () => {
  expect('I am bad at speeling').not.toMatch(/spelling/);
  expect('I am just a regular guy').toMatch(/reg/);
})

const listy = [
  'make some tasty food',
  'check if it\'s spicy',
  'buy beer',
  'play games',
  'write tests',
  'build full stacks!'
]

test('checking arrays!', () => {
  expect(listy).toContain('write tests');
  expect(listy).not.toContain('suck at coding');
})

test('checking arrays purposely failing to see what happens', () => {
  expect(listy).not.toContain('write tests');
  expect(listy).toContain('suck at coding');
})

//next step, build out database and test async functions/promises