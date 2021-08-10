<template>
  <div class="main-layout">

    <ModalWindow v-if="windowKey" @closeWindow="openAndCloseWindow"/>

    <nav>
      <div class="navbar">
        <button class='btn' @click.prevent="openAndCloseWindow">Sign up</button>
      </div>
    </nav>

    <MainContent />

    <footer class="footer">
      <p>All rights reserved © 2020-2021 YS Portfolio</p>
    </footer>

  </div>
</template>

<script>
  import ModalWindow from '@/components/ModalWindow.vue'
  import MainContent from '@/components/MainContent.vue'

  export default {
    name: 'Home',

    data() {
      return {
        windowKey: false,
      }
    },

    methods: {
      openAndCloseWindow() {
        this.windowKey = !this.windowKey
      },
    },

    components: {
      ModalWindow,
      MainContent,
    },
  }
</script>
