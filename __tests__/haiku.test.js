import { Poem } from '../src/haiku.js';

describe('Poem', () => {

  test('should create a poem object with one line', () =>
  {
    const poem = new Poem("This is a poem");
    expect(poem.line1).toEqual("This is a poem");
  })
  test('should create a poem object with three lines', () =>
  {
    const poem = new Poem("This is line 1", "This is line 2", "This is line 3");
    expect(poem.line1).toEqual("This is line 1");
    expect (poem.line2).toEqual("this is line 2");
    expect (poem.line3).toEqual("this is line 3");
  })

})