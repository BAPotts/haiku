import Poem from '../src/haiku.js';

describe('Poem', () => {

  test('should create a poem object with one line', () =>
  {
    const poem = new Poem("This is a poem");
    expect(poem.line1).toEqual("This is a poem");
  })
})