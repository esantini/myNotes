import { expect } from './test_helper';
import { CREATE_NOTE } from '../client/src/actions/types';
import { createNote } from '../client/src/actions';

describe('actions', () => {
  describe('createNote', () => {
    it('has the correct type', () => {
      const action = createNote();
      expect(action.type).to.equal(CREATE_NOTE);
    });

    it('has the correct payload', () => {
      const action = createNote('new note');
      expect(action.payload).to.equal('new note');
    });
  });
});
