import { renderComponent, expect } from '../test_helper';
import Note from '../../src/components/note';

describe('Note', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Note);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('note-wrapper');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new note');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new note');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});