<template>
  <ul>
    <li v-for="column in list" :key="column.id">
      <img class="avatar" :src="column.avatar" :alt="column.title" />
      <h5>{{ column.title }}</h5>
      <p>{{ column.description }}</p>
      <a href="#">进入专栏</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface ColumnListProp {
  id: number
  title: string
  avatar?: string
  description?: string
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnListProp[]>,
      required: true
    }
  }
})
/**
 * 把构造函数断言为类型
 * 需要使用PropType
 */
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}
.avatar {
  width: 90px;
}
</style>
