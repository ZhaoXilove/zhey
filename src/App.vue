<template>
  <div class="app">
    <div class="container-xl">
      <global-header :user="currentUser" />
      <router-view></router-view>
      <footer class="text-center py-4 text-secondary bg-light mt-6">
        <small>
          <ul class="list-inline mb-0">
            <li class="list-inline-item">©2020 者也专栏</li>
            <li class="list-inline-item">课程</li>
            <li class="list-inline-item">文档</li>
            <li class="list-inline-item">联系</li>
            <li class="list-inline-item">更多</li>
          </ul>
        </small>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import ColumnListProp from '@/types/ColumnList'
import UserProps from '@/types/GlobalHeader'
import ColumnList from '_c/ColumnList.vue'
import GlobalHeader from '_c/GlobalHeader.vue'
import { useStore } from 'vuex'
const testData: ColumnListProp[] = [
  {
    id: 1,
    avatar: '',
    title: 'test1的专栏',
    description:
      '读报金句摘抄： 1.很少和你说谢谢，因为觉得太过官方，但就在此刻真的好想跟你说谢谢'
  },
  {
    id: 2,
    avatar: '',
    title: 'test2的专栏',
    description:
      '读报金句摘抄： 1.很少和你说谢谢，因为觉得太过官方，但就在此刻真的好想跟你说谢谢'
  },
  {
    id: 3,
    avatar: '',
    title: 'test3的专栏',
    description:
      '读报金句摘抄： 1.很少和你说谢谢，因为觉得太过官方，但就在此刻真的好想跟你说谢谢'
  },
  {
    id: 4,
    avatar: '',
    title: 'test4的专栏',
    description:
      '读报金句摘抄： 1.很少和你说谢谢，因为觉得太过官方，但就在此刻真的好想跟你说谢谢'
  }
]
const currentUser: UserProps = {
  isLogin: false,
  name: 'dell'
}
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    const store = useStore()
    const currentUser = computed(() => store.state.user)
    return {
      list: testData,
      currentUser
    }
  }
})
</script>
<style lang="scss">
.dropdown-option.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
