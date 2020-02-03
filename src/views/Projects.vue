<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header expand-icon="mdi-menu-down">{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content class="grey--text">
            <div class="font-weight-bold">due by {{project.due}}</div>
            <div>{{project.content}}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb.js'

export default {
  name: 'projects',
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges()
      changes.forEach(element => {
        if (element.type === "added") {
          this.projects.push({
            ...element.doc.data(),
            id: element.doc.id
          })
        }
      });
    })
  },
  data() {
    return {
      projects: [
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(item => item.person === 'Danny')
    }
  }
}
</script>
