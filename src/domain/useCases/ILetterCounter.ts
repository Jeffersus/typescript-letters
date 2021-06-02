import { ILetters } from "@domain/entities";

export interface ILetterCounter {
    exec(phrase: string): ILetters;
}