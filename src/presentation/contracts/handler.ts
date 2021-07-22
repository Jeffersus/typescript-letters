import { ILettersViewModel, IPhraseViewModel } from '@presentation/viewModels';

export interface Handler {
    handle: (phrase: IPhraseViewModel) => ILettersViewModel
}
