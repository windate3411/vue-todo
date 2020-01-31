<template>
  <div class="text-center">
    <v-dialog width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">Add a New Project</v-card-title>
        <v-card-text>
          <v-form class="px-3 text-center">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
            <!-- add datepicker -->
            <v-menu max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="formattedDate"
                  label="Due date"
                  prepend-icon="mdi-calendar-range"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-btn text class="mx-0 mt-3 success" @click="submit">Add new project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default {
  data() {
    return {
      title: '',
      content: '',
      due: null
    }
  },
  methods: {
    submit() {
      console.log(`${this.content}`)
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ""
    }
  }
}
</script>