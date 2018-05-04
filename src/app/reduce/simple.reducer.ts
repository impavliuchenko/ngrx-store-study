import { Action } from '@ngrx/store';
import { State } from '../model/simple-state.model';

export function simpleReducer(state: State = {message: 'yo', status: false}, action: Action): State {
  console.log(action, state);
  switch (action.type) {
    case 'SPANISH':
      return {
        message: 'Hola Mundo',
        status: true
      };
    case 'FRENCH':
      return {
        message: 'Bonjour le monde',
        status: false
      };
    default:
      return {
        message: '',
        status: false
      };
  }
}
