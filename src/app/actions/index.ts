import { Action as NgRxAction } from '@ngrx/store';

/* creating Custom NgRx actions */
export interface Action extends NgRxAction {
    payload?: any;
}
