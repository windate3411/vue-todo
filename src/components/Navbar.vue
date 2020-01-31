<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <!-- app title -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Danny</span>
      </v-toolbar-title>
      <!-- push the logout btn to the right -->
      <v-spacer></v-spacer>
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
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
      ]
    }
  },
}
</script>