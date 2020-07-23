<template>
  <div class="edit-note">
    <div class="form-wrapper">
      <form @submit.prevent="editNote">
        <fieldset class="uk-fieldset">
          <legend class="uk-legend">Edit note</legend>
          <div class="uk-margin">
            <input class="uk-input" type="text" v-model="currentNote.name" placeholder="Name">
          </div>
          <div class="uk-margin">
            <textarea class="uk-textarea" rows="5" v-model="currentNote.body" placeholder="Your note..."></textarea>
          </div>
          <div class="uk-margin">
            <button class="uk-button uk-button-primary" type="submit">Edit note</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditNote',
  data: () => ({
    currentNote: {},
    notes: JSON.parse(localStorage.getItem('notes')),
  }),
  mounted() {
    this.notes.forEach((note) => {
      if (note.id === this.$route.params.id) {
        this.currentNote = note;
      }
    });
  },
  methods: {
    editNote() {
      this.notes.forEach((note) => {
        if (note.id === this.$route.params.id) {
          // eslint-disable-next-line no-param-reassign
          note.name = this.currentNote.name;
          // eslint-disable-next-line no-param-reassign
          note.body = this.currentNote.body;
        }
      });
      localStorage.setItem('notes', JSON.stringify(this.notes));
      this.$router.push('/');
    },
  },
};
</script>
