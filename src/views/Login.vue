<template>
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <validate-input
        :rules="emailRules"
        v-model="emailVal"
        placeholder="请输入邮箱地址"
        type="text"
        ref="inputRef"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">密码</label>
      <validate-input
        :rules="psdRules"
        v-model="psdlVal"
        placeholder="请输入密码"
        type="password"
      />
    </div>
    <template #submit>
      <span class="btn btn-danger">Submit</span>
    </template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import UserProps from '@/types/GlobalHeader'
import ValidateInput, { RulesProp } from '@/custom/ValidateInput.vue'
import ValidateForm from '_c/Form/ValidateForm.vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const router = useRouter()
    const inputRef = ref<any>()
    const emailVal = ref('123@test')
    const psdlVal = ref('123')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' }
    ]
    const psdRules: RulesProp = [{ type: 'required', message: '密码不能为空' }]
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
    const onFormSubmit = (result: any) => {
      /*console.log(inputRef.value.validateInput())
      console.log('1234', result) */
      console.log('result', result)
      if (result) {
        router.replace({ name: 'ColumnDetail', params: { id: 1 } })
      }
    }
    return {
      emailRef,
      validateEmail,
      emailRules,
      psdRules,
      emailVal,
      psdlVal,
      onFormSubmit,
      inputRef
    }
  }
})
</script>

<style lang="scss" scoped></style>
