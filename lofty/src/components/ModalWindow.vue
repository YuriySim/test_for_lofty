<template>
  <div class="wrapper-card" >
    <div class="background" @click.self="closeWindow"></div>

    <div class="card">
      <form class="card-content">
        <input id="username" type="text" placeholder="USERNAME"  autocomplete="off">

        <input id="password" type="text" placeholder="PASSWORD"  autocomplete="off">

        <button class="btn" type="submit">
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalWindow',

    methods: {
      closeWindow() {
        this.$emit('closeWindow')
      },
    },
  }
</script>
