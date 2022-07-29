<template>
  <div class="container">
    <global-header :user="currentUser" />
    <column-list :list="list"></column-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ColumnListProp from '@/types/ColumnList'
import UserProps from '@/types/GlobalHeader'
import ColumnList from '_c/ColumnList.vue'
import GlobalHeader from '_c/GlobalHeader.vue'
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
  isLogin: true,
  name: 'dell'
}
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>
<style lang="scss"></style>
