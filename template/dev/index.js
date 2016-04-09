import Vue from 'vue'
import Component from '../src/index.vue'

new Vue({
  el: '#app',
  data: {
      title: '{{ name }}',
      desc: '{{ desc }}',
      github: 'https://github.com/{{ author }}/{{ name }}',
  },
  components: { app: Component },
})
