<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        hr_sytem
      </h1>
      <h2 class="subtitle">
        盛辉人事系统
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <el-button class='aaa' type="primary" :loading="true">加载中</el-button>
      <div>{{ title }}</div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import $requst from './../plugins/axios.js'

export default {
  async asyncData () {
    let data = await $requst.get('/api/aaa')
    return { title: data.data.token }
  },
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
