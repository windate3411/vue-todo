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
            <v-btn text class="mx-0 mt-3 success" @click="submit">Add new project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    submit() {
      console.log(`${this.content}`)
    }
  }
}
</script>