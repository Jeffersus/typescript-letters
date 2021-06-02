import LetterCounterService from '@application/services/LetterCounterService';
import { ILettersViewModel, IPhraseViewModel } from '@presentation/viewModels';
import { LetterHandler } from './handlers';

const vowelsCounterService = new LetterCounterService();
const vowelsHandler = new LetterHandler(vowelsCounterService);

const countLetters = (phrase: IPhraseViewModel): ILettersViewModel => vowelsHandler.handle(phrase);

export { countLetters as default };
