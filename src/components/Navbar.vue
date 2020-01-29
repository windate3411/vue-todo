<template>
  <nav>
    <v-toolbar flat hide-on-scroll>
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
    </v-toolbar>

    <!-- side bar content -->
    <v-navigation-drawer app v-model="drawer" temporary absolute>
      <p class="success">test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: false
    }
  },
}
</script>