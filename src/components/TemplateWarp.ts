import Vue from 'vue'
import stringComponent from '../extends/stringComponent'

const TemplateWarp = Vue.component('template-warp', {
  props: ['reqData', 'mode', 'content'],
  data() {
    return {}
  },
  watch: {
    'reqData': {
      handler(val) {
        let refs : any = this.$refs
        refs.templateContent.innerHTML = `<div id="templateSTR" />`
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


