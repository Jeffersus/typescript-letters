import { ILetterCounter } from '@domain/useCases';
import { Handler } from '@presentation/contracts';
import { IPhraseViewModel, ILettersViewModel } from '@presentation/viewModels';

export class LetterHandler implements Handler {
  constructor(private readonly LetterCounter: ILetterCounter) { }

  handle(phrase: IPhraseViewModel): ILettersViewModel {
    return this.LetterCounter.exec(phrase.text);
  }
}
