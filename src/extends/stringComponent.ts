import Vue from 'vue'
interface optionProps {
  datas: any,
  id: string,
  content: string
}

const stringComponent = (htmlSTR: string, { datas, id, content }: optionProps): any => {
  const ComponentA = Vue.extend({
    template: htmlSTR,
    data () {
      return {
        ...datas,
        content
      }
    },
    methods: {

    }
  })
  const instance = new ComponentA()
  return instance.$mount(id)
}

export default stringComponent
