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
          <drop-down :title="`你好 ${user.name}`">
            <drop-down-item>
              <a class="dropdown-item" href="#">新建文章</a>
            </drop-down-item>
            <drop-down-item disabled>
              <a class="dropdown-item" href="#">编辑资料</a>
            </drop-down-item>
            <drop-down-item>
              <a class="dropdown-item" href="#">退出登录</a>
            </drop-down-item>
          </drop-down>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from '@/custom/DropDown.vue'
import DropDownItem from '@/custom/DropDownItem.vue'
import UserProps from '@/types/GlobalHeader'
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    DropDown,
    DropDownItem
  },
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
