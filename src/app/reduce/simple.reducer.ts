import { Action } from '@ngrx/store';

export function simpleReducer(state: string = '', action: Action) {
  console.log(action.type, state);
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
