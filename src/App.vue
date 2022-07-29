<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnListProp } from './components/ColumnList.vue'
const testData: ColumnListProp[] = [
  {
    id: 1,
    avatar: require('@/assets/logo.png'),
    title: 'test1的专栏',
    description: 'test1的description'
  },
  {
    id: 2,
    avatar: require('@/assets/logo.png'),
    title: 'test2的专栏',
    description: 'test2的description'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup() {
    return {
      list: testData
    }
  }
})
</script>
<style lang="scss">
</style>
