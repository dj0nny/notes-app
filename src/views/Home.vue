<template>
  <div class="home">
    <div class="empty uk-text-center uk-text-lead" v-if="notes.length === 0">
      No notes added
    </div>
    <div class="uk-child-width-1-2@s uk-grid-match uk-grid-medium" uk-grid v-else>
      <div v-for="note in notes" :key="note.id">
        <div class="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
          <span class="uk-margin-small-right delete" uk-icon="close" @click="deleteNote(note.id)"></span>
          <router-link :to="{name: 'EditNote', params: { id: note.id } }"><span class="uk-margin-small-right edit" uk-icon="pencil"></span></router-link>
          <span v-if="note.created_at">{{note.created_at}}</span>
          <h3 class="uk-card-title uk-margin-small">{{note.name}}</h3>
          <p v-html="renderMarkdown(note.body)"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import DOMPurify from 'dompurify';

export default {
  name: 'Home',
  data: () => ({
    notes: [],
    currentNote: {},
  }),
  mounted() {
    if (localStorage.getItem('notes') === null) {
      localStorage.setItem('notes', JSON.stringify([]));
    } else {
      this.notes = JSON.parse(localStorage.getItem('notes'));
    }
  },
  methods: {
    deleteNote(noteId) {
      const newNotesArray = [];
      this.notes.forEach((note) => {
        if (note.id !== noteId) {
          newNotesArray.push(note);
        }
      });
      localStorage.setItem('notes', JSON.stringify(newNotesArray));
      this.notes = newNotesArray;
    },
    renderMarkdown(noteBody) {
      return DOMPurify.sanitize(marked(noteBody));
    },
  },
};
</script>

<style scoped>
.delete,
.edit {
  position: absolute;
  top: 15px;
  right: 20px;
}

.edit {
  right: 50px;
}

.delete:hover,
.edit:hover {
  cursor: pointer;
}
</style>
