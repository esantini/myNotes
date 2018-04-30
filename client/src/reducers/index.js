import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import notesReducer from './notes_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  notes: notesReducer
});

export default rootReducer;
