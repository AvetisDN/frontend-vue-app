<template>
  <div id="app" :class="{dark: this.$store.state.theme == 'dark'}">
    <div class="wrapper">
      <div class="sidebar">
        <logo></logo>
        <nav-menu></nav-menu>
      </div>
      <div class="content">

        <button @click="themeButtonHandler()">
          <i class="icofont-adjust" v-if="this.$store.state.theme == 'light'"></i>
          <i class="icofont-ui-brightness" v-else></i>
        </button>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis aut repellat error dolores reprehenderit id esse adipisci omnis perspiciatis, quia optio quisquam nesciunt quas veritatis deleniti assumenda quos provident!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis aut repellat error dolores reprehenderit id esse adipisci omnis perspiciatis, quia optio quisquam nesciunt quas veritatis deleniti assumenda quos provident!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis aut repellat error dolores reprehenderit id esse adipisci omnis perspiciatis, quia optio quisquam nesciunt quas veritatis deleniti assumenda quos provident!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis aut repellat error dolores reprehenderit id esse adipisci omnis perspiciatis, quia optio quisquam nesciunt quas veritatis deleniti assumenda quos provident!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis aut repellat error dolores reprehenderit id esse adipisci omnis perspiciatis, quia optio quisquam nesciunt quas veritatis deleniti assumenda quos provident!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis aut repellat error dolores reprehenderit id esse adipisci omnis perspiciatis, quia optio quisquam nesciunt quas veritatis deleniti assumenda quos provident!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis aut repellat error dolores reprehenderit id esse adipisci omnis perspiciatis, quia optio quisquam nesciunt quas veritatis deleniti assumenda quos provident!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis aut repellat error dolores reprehenderit id esse adipisci omnis perspiciatis, quia optio quisquam nesciunt quas veritatis deleniti assumenda quos provident!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './components/sidebar/Logo.vue'
import NavMenu from './components/sidebar/NavMenu.vue'

export default {
  name: 'App',
  components: {
    Logo,
    NavMenu    
  },
  methods: {
    themeButtonHandler() {
      this.$store.dispatch('toggleThemeAction')
    }
  }
}
</script>

<style lang="scss">
</style>
