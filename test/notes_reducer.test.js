import { expect } from './test_helper';
import notesReducer from '../client/src/reducers/notes_reducer';
import * as actions from '../client/src/actions/types';

describe('Notes Reducer', () => {
  it('handles action with unknown type', () => {
    expect(notesReducer(undefined, {})).to.eql( [] );
  });

  it('handles action of type CREATE_NOTE', () => {
    const action = { type: actions.CREATE_NOTE, payload: 'new note' };
    expect(notesReducer([], action)).to.eql(['new note']);
  });
});
