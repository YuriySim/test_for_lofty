<template>
  <div class="wrapper-card" >
    <div class="background" @click.self="closeWindow"></div>

    <div class="card">
      <form class="card-content" @submit.prevent="submitHandler">
        <div class="wrapper-input">
          <input
            id="username"
            type="text"
            placeholder="USERNAME"
            autocomplete="off"
            v-model.trum="v$.username.$model"
            :class="{invalid: v$.username.$dirty && v$.username.$errors.length}"
          >

          <div v-for="error of v$.username.$errors" :key="error.$uid">
            <small
              class="invalid"
              v-if="v$.username.$dirty && v$.username.$errors.length"
            >
              {{ error.$message }}
            </small>
          </div>
        </div>

        <div class="wrapper-input">
          <input
            id="password"
            type="text"
            placeholder="PASSWORD"
            autocomplete="off"
            v-model.trum="v$.password.$model"
            :class="{invalid: v$.password.$dirty && v$.password.$errors.length}"
          >

          <div v-for="error of v$.password.$errors" :key="error.$uid">
            <small
              class="invalid"
              v-if="v$.password.$dirty && v$.password.$errors.length"
            >
              {{ error.$message }}
            </small>
          </div>
        </div>

        <button class="btn" type="submit">
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import useVuelidate from '@vuelidate/core'
  import { required, minLength } from '@vuelidate/validators'

  export default {
    name: 'ModalWindow',

    setup () {
      return { v$: useVuelidate() }
    },

    data () {
      return {
        username: '',
        password: '',
      }
    },

    validations () {
      return {
        username: { required },
        password: { required, minLength: minLength(6) },
      }
    },

    methods: {
      //This method closes the modal window when the gray area is clicked
      closeWindow() {
        this.$emit('closeWindow')
      },

      //This method sends POST-requestion to backend when performing validation
      async submitHandler() {
        if (this.v$.$invalid) {
          this.v$.$touch()
          return
        }

        const formData = {
          username: this.username,
          password: this.password
        }

        try {
          await this.$store.dispatch('login', formData)

          this.$emit('closeWindow')
        }catch (error) {''}
      },
    },
  }
</script>
