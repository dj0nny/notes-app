<template>
  <div class="add-note">
    <div class="form-wrapper">
      <form @submit.prevent="addNote">
        <fieldset class="uk-fieldset">
          <legend class="uk-legend">Add note</legend>
          <div class="uk-margin">
            <input class="uk-input" type="text" v-model="note.name" placeholder="Name">
          </div>
          <div class="uk-margin">
            <textarea class="uk-textarea" rows="5" v-model="note.body" placeholder="Your note..."></textarea>
          </div>
          <div class="uk-margin">
            <button class="uk-button uk-button-primary" type="submit">Add note</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'AddNote',
  data: () => ({
    note: {
      name: '',
      body: '',
    },
  }),
  methods: {
    addNote() {
      this.note.id = uuidv4();
      this.note.created_at = new Date().toLocaleDateString();
      const notes = JSON.parse(localStorage.getItem('notes'));
      notes.push(this.note);
      localStorage.setItem('notes', JSON.stringify(notes));
      this.note.name = '';
      this.note.body = '';
    },
  },
};
</script>
