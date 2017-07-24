<template>
  <transition name="vm-notification-fade">
    <div
        class="vm-notification"
        :class="customClass"
        v-show="visible"
        :style="{ top: top ? top + 'px' : 'auto' }"
        @mouseenter="clearTimer()"
        @mouseleave="startTimer()"
        @click="click">
      <i
          class="vm-notification__icon"
          :class="[typeClass, iconClass]"
          v-if="type || iconClass">
      </i>
      <div class="vm-notification__group" :class="{ 'is-with-icon': typeClass || iconClass }">
        <h2 class="vm-notification__title" v-text="title"></h2>
        <div class="vm-notification__content">
          <slot>{{message}}</slot>
        </div>
        <div class="vm-notification__close vm-notification-icon--close" @click="close" v-if="showClose"></div>
      </div>
    </div>
  </transition>
</template>
<script>

  let typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  }

  export default {
    name: 'VmNotification',

    componentName: 'VmNotification',

    data () {
      return {
        visible: false,
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 4500,
        type: '',
        customClass: '',
        iconClass: '',
        onClose: null,
        onClick: null,
        closed: false,
        showClose: true,
        top: null,
        timer: null
      }
    },

    computed: {
      typeClass () {
        return this.type && typeMap[this.type] ? `vm-notification-icon--${ typeMap[this.type] }` : ''
      }
    },

    watch: {
      closed (newVal) {
        if (newVal) {
          this.visible = false
          this.$el.addEventListener('transitionend', this.destoryElement)
        }
      }
    },

    methods: {
      destoryElement () {
        this.$el.removeEventListener('transitionend', this.destoryElement)
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      },

      click () {
        if (typeof this.onClick === 'function') {
          this.onClick(this)
        }
      },

      close () {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose(this)
        }
      },

      clearTimer () {
        clearTimeout(this.timer)
      },

      startTimer () {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close()
            }
          }, this.duration)
        }
      }
    },

    mounted () {
      this.startTimer()
    }
  }
</script>
