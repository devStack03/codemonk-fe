/*
 * PersonalDetails Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import produce from 'immer';
import { CHANGE_FIRSTNAME, CHANGE_LASTNAME, CHANGE_JOB_TITLE } from './constants';

// The initial state of the App
export const initialState = {
  firstName: '',
  lastName: '',
  jobTitle: '',
};

const aboutYouReducer = (state = initialState, action = {}) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_FIRSTNAME:
        draft.firstName = action.payload;
        break;
      case CHANGE_LASTNAME:
        draft.lastName = action.payload;
        break;
      case CHANGE_JOB_TITLE:
        draft.jobTitle = action.payload;
        break;
      default:
    }
    return draft;
  });

export default aboutYouReducer;
