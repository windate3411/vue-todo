<template>
  <div class="text-center">
    <v-dialog width="500" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">Add a New Project</v-card-title>
        <v-card-text>
          <v-form class="px-3 text-center" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-pencil"
              :rules="inputRules"
            ></v-textarea>
            <!-- add datepicker -->
            <v-menu max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="formattedDate"
                  label="Due date"
                  prepend-icon="mdi-calendar-range"
                  v-on="on"
                  :rules="inputRules"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-btn text class="mx-0 mt-3 success" @click="submit" :loading="loading">Add new project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import db from '@/fb.js';

export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      inputRules: [
        value => !!value || 'Required.',
        v => v.length >= 3 || "You must type in at least 3 charaters"
      ],
      loading: false,
      dialog: false
    }
  },
  methods: {
    async submit() {
      this.loading = true
      if (this.$refs.form.validate()) {
        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), 'do MMM yyyy'),
          person: 'Danny',
          status: 'ongoing'
        }
        try {
          await db.collection('projects').add(project)
          this.loading = false
          this.dialog = false
        } catch (error) {
          console.log(error)
        }
      }

    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ""
    }
  }
}
</script>