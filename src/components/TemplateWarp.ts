import Vue from 'vue'
import stringComponent from '../extends/stringComponent'

const TemplateWarp = Vue.component('template-warp', {
  props: ['reqData', 'mode', 'content'],
  data() {
    return {}
  },
  mounted() {
    if (this.reqData) {
      this.compileString()
    }
  },
  watch: {
    'reqData': {
      handler(val) {
        const refs : any = this.$refs
        refs.templateContent.innerHTML = `<div id="templateSTR" />`
        this.compileString()
      },
      deep: true
    }
  },
  template: `<div ref="templateContent"><div id="templateSTR" /></div>`,
  methods: {
    compileString() {
      stringComponent(`<div>${this.mode}</div>`, {
        datas: this.reqData,
        id: '#templateSTR',
        content: this.content
      })
    },
  }
})

export default TemplateWarp


