<template>
  <nav>
    <!-- add snack bar for message -->
    <v-snackbar v-model="snackbar" :timeout="3000" top color="success">
      <span>You add a new project!</span>
      <v-btn text color="white" @click="snackbar=false">X</v-btn>
    </v-snackbar>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <!-- app title -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Danny</span>
      </v-toolbar-title>
      <!-- push the logout btn to the right -->
      <v-spacer></v-spacer>
      <!-- menu button -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" color="grey">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- sign out btn  -->
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- side bar content -->
    <v-navigation-drawer app v-model="drawer" temporary class="primary">
      <!-- add personal avatar -->
      <v-row class="flex-column" align="center">
        <v-col cols="6" class="mt-5">
          <v-avatar size="100" class="grey lighten-2">
            <img src="/avatar-1.png" />
          </v-avatar>
          <div class="p white--text subtitle-2 mt-2 ml-2">Danny Wang</div>
        </v-col>
        <!-- Popup -->
        <div class="mt-3 mb-4">
          <Popup @afterAdded="snackbar=true" />
        </div>
      </v-row>
      <v-divider></v-divider>
      <!-- list contents -->
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup.vue'

export default {
  name: 'Navbar',
  components: {
    Popup
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
      ],
      snackbar: false
    }
  },
}
</script>