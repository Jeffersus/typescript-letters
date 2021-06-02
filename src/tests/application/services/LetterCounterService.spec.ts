import LetterCounterService from '../../../application/services/LetterCounterService';
import { ILettersViewModel } from '../../../presentation/viewModels';


const letterCounterService = new LetterCounterService();

describe('When a phrase is provided to the letter counter service', () => {

  it('should return the letters count for the whole phrase', () => {
    const letterCount = letterCounterService.exec('Nice to meet you');
    expect(letterCount).toEqual<ILettersViewModel>({
      c: 1,
      e: 3,
      i: 1,
      m: 1,
      n: 1,
      o: 2,
      t: 2,
      u: 1,
      y: 1,
    });
  });

  it('should return the letters count even when it contains special chars', () => {
    const letterCount = letterCounterService.exec(`I'm hungry! Let's eat something!`);
    expect(letterCount).toEqual<ILettersViewModel>({
      c: 1,
      e: 3,
      i: 1,
      m: 1,
      n: 1,
      o: 2,
      t: 2,
      u: 1,
      y: 1,
    });
  });
});