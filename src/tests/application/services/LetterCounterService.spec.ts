import { LetterCounterService } from '../../../application/services/LetterCounterService';
import phraseCount from './mocks/phrase.json';
import wordCount from './mocks/word.json';
import specialCharsCount from './mocks/specialChars.json';

const letterCounterService = new LetterCounterService();

describe('When a word is provided to the letter counter service', () => {
  it('should return the duplicate letters count for the whole word', () => {
    const letterCount = letterCounterService.exec('Typescript');
    expect(letterCount).toEqual(wordCount);
  });
});

describe('When a phrase is provided to the letter counter service', () => {
  it('should return the duplicate letters count for the whole phrase', () => {
    const letterCount = letterCounterService.exec('Nice to meet you');
    expect(letterCount).toEqual(phraseCount);
  });

  it('should return the duplicate letters count even when it contains special chars', () => {
    const letterCount = letterCounterService.exec('I\'m hungry! Let\'s eat something!');
    expect(letterCount).toEqual(specialCharsCount);
  });
});
