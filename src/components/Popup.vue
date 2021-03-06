<template>
  <div class="text-center">
    <v-dialog width="500" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn v-if="isNew" class="success" dark v-on="on">
          <v-icon small left>mdi-plus</v-icon>
          <span class="caption">Add A New Project</span>
        </v-btn>
        <v-btn v-else class="mr-2" small fab color="info" v-on="on">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" v-if="isNew"
          >Add a New Project</v-card-title
        >
        <v-card-title class="headline grey lighten-2" v-else
          >Edit Project</v-card-title
        >
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
            <!-- add status for edit -->
            <v-select
              :items="statusList"
              label="Status"
              v-model="status"
              :rules="statusRules"
            ></v-select>

            <v-btn
              v-if="isNew"
              text
              class="mx-0 mt-3 success"
              @click="submit"
              :loading="loading"
              >Add new project</v-btn
            >
            <v-btn
              v-else
              text
              class="mx-0 mt-3 info"
              @click="edit(project.id)"
              :loading="loading"
              >Edit project</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import db from '@/fb.js'

export default {
  props: ['isNew', 'project'],
  data() {
    return {
      title: this.project.title,
      content: this.project.content,
      due: null,
      inputRules: [
        (value) => !!value || 'Required.',
        (v) => v.length >= 3 || 'You must type in at least 3 charaters',
      ],
      statusRules: [(value) => !!value || 'Required.'],
      loading: false,
      dialog: false,
      statusList: ['ongoing', 'complete', 'overdue'],
      status: this.project.status,
      isValid: false,
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
          status: this.status,
        }
        try {
          await db.collection('projects').add(project)
          this.loading = false
          this.dialog = false
          this.$emit('afterAdded')
        } catch (error) {
          console.log(error)
        } finally {
          this.title = ''
          this.content = ''
          this.status = ''
          this.due = null
          this.$refs.form.resetValidation()
        }
      } else {
        this.loading = false
      }
    },
    async edit(id) {
      this.loading = true
      if (this.$refs.form.validate()) {
        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), 'do MMM yyyy'),
          person: 'Danny',
          status: this.status,
        }
        try {
          await db
            .collection('projects')
            .doc(id)
            .update(project)
          this.loading = false
          this.dialog = false
          this.$emit('afterEdited')
        } catch (error) {
          console.log(error)
        }
      } else {
        this.loading = false
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
    },
  },
}
</script>
