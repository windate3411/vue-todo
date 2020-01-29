<template>
  <nav>
    <v-app-bar flat hide-on-scroll>
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
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>