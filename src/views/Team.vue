<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-card class="text-center ma-3">
            <!-- card image -->
            <v-img>
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" />
              </v-avatar>
            </v-img>
            <!-- card content -->
            <v-card-text>
              <div class="subtitle-2 font-weight-bold">{{person.name}}</div>
              <div class="gre--text">{{person.role}}</div>
            </v-card-text>
            <!-- card action -->
            <v-card-action>
              <v-btn text color="grey">
                <v-icon left small>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'team',
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png' }
      ]
    }
  },
}
</script>
