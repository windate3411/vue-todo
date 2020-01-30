<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container>
      <!-- add sorting options -->
      <v-row class="mb-2">
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

export default {
  name: 'dashboard',
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
      ]
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