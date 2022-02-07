import Vue from 'vue'

const Upload = Vue.component('upload', {
  props: ['accept', 'multiple', 'fileClass', 'warpClass', 'warpStyle1', 'fileStyle1'],
  template: `<div :class="warpClass" :style="warpStyle">
  <div>+ 新增/上传</div>
  <input :class="fileClass" :style="fileStyle" :multiple="multiple" type="file" :accept="accept" @change="handleChange" />
</div>`,
  data() {
    return {
      warpStyle: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        ...this.warpStyle1,
      },
      fileStyle: {
        position: 'absolute',
        opacity: 0,
        ...this.fileStyle1,
      }
    }
  },
  methods: {
    handleChange(e: any) {
      this.$emit('change', e)
    }
  }
})

export default Upload