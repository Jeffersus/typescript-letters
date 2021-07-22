import { ILetters } from '@domain/entities';
import { ILetterCounter } from '@domain/useCases';

export class LetterCounterService implements ILetterCounter {
  exec(phrase: string): ILetters {
    const letterCounter: ILetters = {};

    const pattern = /[a-z]+/g;
    const count = Array.from((phrase.toLowerCase().match(pattern) || []).join('')).reduce((acc: ILetters, char: string) => {
      if (acc[char] === undefined) {
        acc[char] = 1;
        return acc;
      }

      acc[char] += 1;
      return acc;
    }, letterCounter);

    const duplicates: ILetters = {};

    return Object.entries(count).reduce((acc, [key, value]) => {
      if (value >= 2) {
        acc[key] = value;
      }

      return acc;
    }, duplicates);
  }
}
