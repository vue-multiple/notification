export const sourcecodeA = `<template>
  <vm-button :plain="true" @click="open">可自动关闭</vm-button>
  <vm-button :plain="true" @click="open2">不会自动关闭</vm-button>
</template>

<script>
  export default {
    methods: {
      open () {
        this.$notify({
          title: '标题名称',
          message: this.$createElement('i', { style: 'color: teal' }, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },
      open2 () {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      }
    }
  }
</script>`

export const sourcecodeB = `<template>
  <vm-button :plain="true" type="success" @click="open3">成功</vm-button>
  <vm-button :plain="true" type="warning" @click="open4">警告</vm-button>
  <vm-button :plain="true" type="info" @click="open5">消息</vm-button>
  <vm-button :plain="true" type="danger" @click="open6">错误</vm-button>
</template>

<script>
  export default {
    methods: {
      open3 () {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4 () {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5 () {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6 () {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      }
    }
  }
</script>`

export const sourcecodeC = `<template>
  <vm-button :plain="true" @click="open7">偏移的消息</vm-button>
</template>

<script >
  export default {
    methods: {
     open7 () {
        this.$notify.success({
          title: '成功',
          message: '这是一条成功的提示消息',
          offset: 100
        });
      }
    }
  }
</script>`

export const sourcecodeD = `import Notification from 'vue-multiple-notification'`

export const sourcecodeE = `import Vue from 'vue'
import Notification from 'vue-multiple-notification'
Vue.prototype.$notify = Notification`

export const sourcecodeF = `Notification.config({
  duration: 3000,
  zIndex: 2000
})`