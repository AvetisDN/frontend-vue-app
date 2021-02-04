<template>
  <nav>
      <ul>
          <li>
              <router-link to="/">
                  <i class="icofont-ui-home"></i>
                  <span>Home</span>
              </router-link>
          </li>
          <li>
              <router-link to="/gallery">
                  <i class="icofont-ui-image"></i>
                  <span>Image gallery</span>
              </router-link>
          </li>
          <li>
              <router-link to="/gamedev">
                  <i class="icofont-ui-game"></i>
                  <span>Game Development</span>
              </router-link>
          </li>
          <li>
              <router-link to="/motion">
                  <i class="icofont-ui-movie"></i>
                  <span>Motion design</span>
              </router-link>
          </li>
          <li>
              <div @click="toggleSubMenu()" :class="{ open: showSubMenu }">
                  <i class="icofont-ui-touch-phone"></i>
                  <span>Mobile Applications</span>
              </div>
              <ul>
                  <li>
                    <router-link to="/mobile-droid">
                      Android
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/mobile-apple">
                      iOS / iPadOS
                    </router-link>
                  </li>
              </ul>
          </li>
          <li>
              <router-link to="/faq">
                  <i class="icofont-ui-text-loading"></i>
                  <span>FAQ</span>
              </router-link>
          </li>
          <li>
              <router-link to="/contact">
                  <i class="icofont-ui-message"></i>
                  <span>Contact us </span>
              </router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'NavMenu',
    data() {
        return {
            showSubMenu: false
        }
    },
    methods: {
        toggleSubMenu() {
            this.showSubMenu = !this.showSubMenu
        }
    }
}
</script>

<style>

</style>