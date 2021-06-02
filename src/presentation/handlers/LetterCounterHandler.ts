import { ILetterCounter } from '@domain/usecases';
import { Handler } from '@presentation/contracts';
import { IPhraseViewModel, ILettersViewModel } from '@presentation/viewModels';

export class LetterHandler implements Handler {
  constructor(private readonly LetterCounter: ILetterCounter) { }

  handle(phrase: IPhraseViewModel): ILettersViewModel {
    try {
      return this.LetterCounter.exec(phrase.text);
    } catch (err) {
      console.log(`Error: [${err.message}]`);
      const error = new Error();
      error.message = 'Error while counting letters';
      error.stack = err.stack;
      throw error;
    }
  }
}
