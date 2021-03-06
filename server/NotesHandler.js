const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');

module.exports = class NotesHandler {

  constructor() {
    this.db = low(adapter);
    this.db.defaults({ notes: [], count: 0 })
      .write();
  }
  create(note) {
    note.id = this.db.get('count').value();

    this.db.get('notes')
      .push(note)
      .write();
    this.db.update('count', n => n + 1)
      .write();

    return note;
  }
  read(id) {
    if(id || id === 0) {
      return this.db.get('notes')
        .find({ id: parseInt(id) })
        .value();
    }
    return this.db.get('notes').value();
  }
  update(note) {
    return this.db.get('notes')
      .find({ id: note.id } )
      .assign(note)
      .write();
  }
  delete(id) {
    this.db.get('notes')
      .remove({ id })
      .write();
  }

}
