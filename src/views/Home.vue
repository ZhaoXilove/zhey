<template>
  <div class="index">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnListProp from '@/types/ColumnList'
import ColumnList from '@/components/ColumnList.vue'
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
export default defineComponent({
  name: 'Home',
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
