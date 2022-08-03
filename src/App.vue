<template>
  <div class="container-xl">
    <global-header :user="currentUser" />
    <form>
      <div class="mt-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailVal" />
      </div>
      <div class="mb-3 my-4">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input
          type="email"
          v-model="emailRef.val"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          @blur="validateEmail"
        />
        <div class="form-text" v-if="emailRef.error">
          {{ emailRef.message }}
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
    </form>
    <!-- <column-list :list="list"></column-list> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import ColumnListProp from '@/types/ColumnList'
import UserProps from '@/types/GlobalHeader'
import ColumnList from '_c/ColumnList.vue'
import ValidateInput, { RulesProp } from '@/custom/ValidateInput.vue'
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
    GlobalHeader,
    ValidateInput
  },
  setup() {
    const emailVal = ref('viking')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' }
    ]
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = '不能为空'
      }
    }
    return {
      list: testData,
      currentUser,
      emailRef,
      validateEmail,
      emailRules,
      emailVal
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
