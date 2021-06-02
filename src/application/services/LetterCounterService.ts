import { ILetters } from "@domain/entities";
import { ILetterCounter } from "@domain/usecases";

export default class LetterCounterService implements ILetterCounter {

  exec(phrase: string): ILetters {

    const letterCounter: ILetters = {};

    const count = Array.from(phrase.toLowerCase().replace(/\s/g, '')).reduce((acc: ILetters, char: string) => {

      if (acc[char] === undefined) {
        acc[char] = 1;
        return acc;
      }

      acc[char] = acc[char] + 1;
      return acc;

    }, letterCounter);

    return count;
  }
}