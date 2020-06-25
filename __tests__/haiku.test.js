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
    expect(poem.line2).toEqual("This is line 2");
    expect(poem.line3).toEqual("This is line 3");
  })
  test('should seperate inputted sentences into words', () =>
  {
    const poem = new Poem("The first line of this poem","The second line", "The third line");
    poem.wordSeperator();
    expect(poem.line1[0]).toEqual("The");
    expect(poem.line2[1]).toEqual("second");
    expect(poem.line3[2]).toEqual("line");
  })
  test('should subtract silent e from end of words', ()=>
  {
    const poem = new Poem("The first line of this poem","The second line", "The third line");
    poem.wordSeperator();
    poem.eSubtractor();
    expect(poem.line1[2]).toEqual("lin");
  })
  test('should identify vowels', ()=>
  {
    const poem = new Poem("The first line of this poem","The second line", "The third line");
    poem.wordSeperator();
    poem.eSubtractor();
    poem.vowelFinder();
    expect(poem.vowelFinder()).toEqual(11);
  })
})