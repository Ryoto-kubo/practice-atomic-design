<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-title>連絡先登録</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="infos">
          <v-list-item-content>
			  <v-list-item-title>お知らせ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="timeschedule">
          <v-list-item-content>
			  <v-list-item-title>履修登録</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>履修登録</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
	      <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; TaroHiraishi</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>