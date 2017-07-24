import Vue from 'vue'
import { isVNode } from '../utils/util'
var NotificationContructor = Vue.extend(require('./notification.vue'))

let global = {}
let instance
let instances = []
let seed = 1
let nextZIndex = 2000
let optsZIndex = -1

var Notification = function (options) {
  if (Vue.prototype.$isServer) return
  options = options || {}
  let userOnClose = options.onClose
  let id = 'notification_' + seed++

  options.onClose = function () {
    Notification.close(id, userOnClose)
  }

  if (optsZIndex < 0) {
    optsZIndex = options.zIndex
      ? options.zIndex
      : global.zIndex
        ? global.zIndex
        : nextZIndex
  }

  if (!options.duration
    && typeof options.duration === 'undefined'
    && global.duration) {
    options.duration = global.duration
  }

  instance = new NotificationContructor({
    data: options
  })

  if (isVNode(options.message)) {
    instance.$slots.default = [options.message]
    options.message = ''
  }
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = optsZIndex++

  const offset = options.offset || 0
  let topDist = offset
  for (let i = 0, len = instances.length; i < len; i++) {
    topDist += (!options.sameOffset ? (instances[i].offset || 0) : 0) + instances[i].$el.offsetHeight + 16
  }
  topDist += 16
  instance.top = topDist
  instances.push(instance)
  return instance.vm
}

Notification.config = function (options) {
  global = options || {}
}

;['success', 'warning', 'info', 'error'].forEach(type => {
  Notification[type] = options => {
    if (typeof options === 'string' || isVNode(options)) {
      options = {
        message: options
      }
    }
    options.type = type
    return Notification(options)
  }
})

Notification.close = function (id, userOnClose) {
  let index
  let removedHeight
  let removedOffset
  for (var i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      index = i
      removedHeight = instances[i].dom.offsetHeight
      removedOffset = (instances[i].offset || 0)
      instances.splice(i, 1)
      break
    }
  }

  if (len > 1) {
    for (i = index; i < len - 1; i++) {
      instances[i].dom.style.top = parseInt(instances[i].dom.style.top, 10) - (!instances[i].sameOffset ? removedOffset : 0) - removedHeight - 16 + 'px'
    }
  }
}

Notification.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default Notification
