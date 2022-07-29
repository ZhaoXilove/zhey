<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">者也专栏</a>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <button type="button" class="btn btn-outline-light my-2">登录</button>
        </li>
        <li class="list-inline-item">
          <button type="button" class="btn btn-outline-light my-2">注册</button>
        </li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <button type="button" class="btn btn-outline-light my-2">
            你好 {{ user.name }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import UserProps from '@/types/GlobalHeader'
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
