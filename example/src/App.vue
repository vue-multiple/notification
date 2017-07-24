<template>
  <div id="app">
    <demonstration
        title="Notification 通知"
        tag="h2"
        description="悬浮出现在页面右上角，显示全局的通知提醒消息。"
        :show-content="false">
    </demonstration>
    <!-- 基础用法 -->
    <demonstration
        title="基础用法"
        description="适用性广泛的通知栏"
        :highlight="sourcecodeA">
      <template slot="source">
        <vm-button :plain="true" @click="open(true)">可自动关闭（默认带关闭按钮）</vm-button>
        <vm-button :plain="true" @click="open(false)">可自动关闭</vm-button>
        <vm-button :plain="true" @click="open2">不会自动关闭</vm-button>
      </template>
      <template slot="explanation">
        接受一个 <code>options</code> 字面量参数，在最简单的情况下，你可以设置 <code>title</code> 字段和 <code>message</code> 字段，用于设置通知标题和正文内容。
        默认情况下，经过一段时间后 <code>Notification</code>
        组件会自动关闭，但是通过设置 <code>duration</code>，可以控制关闭的时间间隔，特别的是，如果设置为 <code>0</code>，则不会自动关闭。
        注意：<code>duration</code> 接收一个 <code>Number</code>，单位为毫秒，默认为 <code>4500</code>。
      </template>
    </demonstration>
    <!-- 不同状态 -->
    <demonstration
        title="带有倾向性"
        description="带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息。"
        :highlight="sourcecodeB">
      <template slot="source">
        <vm-button :plain="true" type="success" @click="open3">成功</vm-button>
        <vm-button :plain="true" type="warning" @click="open4">警告</vm-button>
        <vm-button :plain="true" type="info" @click="open5">消息</vm-button>
        <vm-button :plain="true" type="danger" @click="open6">错误</vm-button>
      </template>
      <template slot="explanation">
        <code>Notification</code>
        组件有四种通知类型：<code>success</code>，<code>warning</code>，<code>info</code>，<code>error</code>。比如，通过 <code>type</code>
        字段来设置，除此之外的值将被忽略。
        此时正文内容以 <code>message</code> 的值传入。同时，我们也为 <code>Notification</code> 的各种 <code>type</code>
        注册了方法，可以在不传入 <code>type</code> 字段的情况下像 <code>open5</code> 和 <code>open6</code> 那样直接调用。
      </template>
    </demonstration>
    <!--带有偏移-->
    <demonstration
        title="带有偏移"
        description="让 Notification 偏移一些位置。"
        :highlight="sourcecodeC">
      <template slot="source">
        <vm-button :plain="true" @click="open7">同一偏移的消息</vm-button>
        <vm-button :plain="true" @click="open8">自身偏移的消息</vm-button>
      </template>
      <template slot="explanation">
        <code>Notification</code> 提供设置偏移量的功能，通过设置 <code>offset</code> 字段，可以使弹出的消息距屏幕顶部偏移一段距离。注意在同一时刻，所有的 <code>Notification</code> 实例应当具有一个相同的偏移量，当然可以通过设置 <code>sameOffset</code>字段为 <code>false</code> 来进行改变。
      </template>
    </demonstration>
    <!--全局方法-->
    <demonstration
        title="全局方法"
        :show-content="false"
        :code="sourcecodeD">
      <template slot="description">
        你可以在导入 <code>Notification</code> 组件之后， 为 Vue.prototype 添加了全局方法 $notify。因此在 vue instance 中可以采用本页面中的方式调用 Notification。
      </template>
      <template>
        <div class="vd-demo__desc">
          <ul>
            <li><code>this.$notify(options)</code></li>
            <li><code>this.$notify.info(options)</code></li>
            <li><code>this.$notify.success(options)</code></li>
            <li><code>this.$notify.warning(options)</code></li>
            <li><code>this.$notify.error(options)</code></li>
            <li><code>this.$notify.closeAll()</code></li>
          </ul>
        </div>
      </template>
    </demonstration>
    <!--单独引用-->
    <demonstration
        title="单独引用"
        :show-content="false"
        :code="sourcecodeE">
      <template slot="description">
        单独引入 <code>Notification</code>：
      </template>
      <template>
        <div class="vd-demo__desc">
          此时调用方法为 <code>Notification(options)</code>。我们也为每个 <code>type</code>
          定义了各自的方法，如 <code>Notification.success(options)</code>。 并且可以调用 <code>Notification.closeAll()</code>
          手动关闭所有实例。
          <ul>
            <li><code>Notification(options)</code></li>
            <li><code>Notification.info(options)</code></li>
            <li><code>Notification.success(options)</code></li>
            <li><code>Notification.warning(options)</code></li>
            <li><code>Notification.error(options)</code></li>
            <li><code>Notification.closeAll()</code></li>
          </ul>
        </div>
      </template>
    </demonstration>
    <!--Options-->
    <demonstration
        title="Options"
        :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>zIndex <i class="vd-demo__new">（新增）</i></td>
            <td>层级</td>
            <td>number</td>
            <td>—</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>title</td>
            <td>标题</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>message</td>
            <td>说明文字</td>
            <td>string / VNode</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>type</td>
            <td>主题样式，如果不在可选值内将被忽略</td>
            <td>string</td>
            <td>success/warning/info/error</td>
            <td>—</td>
          </tr>
          <tr>
            <td>iconClass</td>
            <td>自定义图标的类名。若设置了 type，则 iconClass 会被覆盖</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>customClass</td>
            <td>自定义类名</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>显示时间, 毫秒。设为 0 则不会自动关闭</td>
            <td>number</td>
            <td>—</td>
            <td>4500</td>
          </tr>
          <tr>
            <td>showClose</td>
            <td>是否显示关闭按钮</td>
            <td>boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>onClose</td>
            <td>关闭时的回调函数, 参数为被关闭的 notification 实例</td>
            <td>function</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>点击 Notification 时的回调函数, 参数为被关闭的 notification 实例</td>
            <td>function</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>offset</td>
            <td>偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个自身的偏移量</td>
            <td>number</td>
            <td>—</td>
            <td>0</td>
          </tr>
          <tr>
            <td>sameOffset <i class="vd-demo__new">（新增）</i></td>
            <td>所有的 Notification 实例是否应当具有一个相同的偏移量</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <!--方法-->
    <demonstration
        title="方法"
        :show-content="false">
      <template slot="description">
        调用 <code>Notification</code> 或 <code>this.$notify</code> 会返回当前 <code>Notification</code> 的实例。
        如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。
      </template>
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>方法名</th>
            <th>说明</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>close</td>
            <td>关闭当前的 Notification</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <!--全局配置-->
    <demonstration
        :show-content="false"
        :code="sourcecodeF">
      <template slot="title">
        全局配置 <i class="vd-demo__new">（新增特性）</i>
      </template>
      <template slot="description">
        调用 <code>Notification.config(options) </code> 来进行全局配置。
      </template>
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>duration</td>
            <td>显示时间, 毫秒。设为 0 则不会自动关闭，优先级低于局部配置</td>
            <td>number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>zIndex</td>
            <td>层级，优先级低于局部配置</td>
            <td>number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
  </div>
</template>

<script>
  import { sourcecodeA, sourcecodeB, sourcecodeC, sourcecodeD, sourcecodeE, sourcecodeF } from './template'
  export default {
    data () {
      return {
        sourcecodeA,
        sourcecodeB,
        sourcecodeC,
        sourcecodeD,
        sourcecodeE,
        sourcecodeF
      }
    },
    methods: {
      open (showClose) {
        this.$notify({
          title: '标题名称',
          message: this.$createElement('i', { style: 'color: teal' }, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'),
          showClose
        });
      },
      open2 () {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      },

      open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      },

      open7 () {
        this.$notify.success({
          title: '成功',
          message: '这是一条成功的提示消息',
          offset: 100,
          sameOffset: true
        });
      },

      open8 () {
        this.$notify.success({
          title: '成功',
          message: '这是一条成功的提示消息',
          offset: 100,
          sameOffset: false
        });
      }
    }
  }
</script>

<style>
  #app {
    margin: 60px auto;
  }
</style>
