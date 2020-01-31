<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container>
      <v-row class="mb-2" v-if="isLoading">
        <v-col>
          <div class="spinner text-center">
            <v-progress-circular indeterminate color="primary" :size="200">Loading...</v-progress-circular>
          </div>
        </v-col>
      </v-row>
      <!-- add sorting options -->
      <v-row class="mb-2" v-else>
        <v-tooltip top>
          <!-- add tool tips -->
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" v-on="on" @click="sortBy('title')">
              <v-icon small left>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project names</span>
            </v-btn>
          </template>
          <span>Sort by project names</span>
        </v-tooltip>
        <v-tooltip top>
          <!-- add tool tips -->
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" dark v-on="on" @click="sortBy('person')">
              <v-icon small left>mdi-account</v-icon>
              <span class="caption text-lowercase">By person names</span>
            </v-btn>
          </template>
          <span>Sort by project names</span>
        </v-tooltip>
      </v-row>
      <!-- list all the projects -->
      <v-card flat class="pa-3 mb-2" v-for="(project,index) in projects" :key="index">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div class>{{project.title}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div class>{{project.person}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due By</div>
            <div class>{{project.due}}</div>
          </v-col>
          <v-col cols="2" sm="4" md="2">
            <div class="right">
              <v-chip
                small
                :color="`${project.status}`"
                class="v-chip--active white--text caption my-2"
              >{{project.status}}</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb.js'

export default {
  name: 'dashboard',
  created() {
    this.isLoading = true
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
      this.isLoading = false
    })
  },
  data() {
    return {
      projects: [],
      isLoading: false
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
}
</script>

<style lang="scss">
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}

.v-chip.ongoing {
  background: orange;
}

.v-chip.overdue {
  background: tomato;
}
</style>