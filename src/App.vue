<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeActive }">
    <div class="column is-one-quarter">
      <SideBar @whenToggleMode="toggleMode" />
    </div>
    <div class="column is-three-quarter content">
      <Notifications />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Notifications from './components/Notifications.vue';
import SideBar from './components/SideBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    Notifications
},
  methods: {
    toggleMode(darkModeActive: boolean) {
      this.darkModeActive = darkModeActive;
    }
  },
  data() {
    return {
      darkModeActive: false
    }
  }
});
</script>

<style>
.list {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: rgb(153, 153, 153);
}

.content {
  background-color: var(--bg-primary);
}
</style>
