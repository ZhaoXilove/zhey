<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题: </label>
        <validate-input
          :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入文章标题"
          type="text"
          ref="inputRef"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情: </label>
        <validate-input
          rows="10"
          tag="textarea"
          :rules="textareaRules"
          v-model="textareaVal"
          placeholder="请输入文章详情"
          type="text"
        />
      </div>
      <template #submit>
        <span class="btn btn-primary btn-large">发表文章</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { GlobalDataProps, PostProps } from '@/store'
import ValidateInput, { RulesProp } from '@/custom/ValidateInput.vue'
import ValidateForm from '_c/Form/ValidateForm.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const stroe = useStore<GlobalDataProps>()
    const router = useRouter()
    const inputRef = ref<any>()
    const titleVal = ref('')
    const textareaVal = ref('')
    const titleRules: RulesProp = [
      { type: 'required', message: '标题不能为空' }
    ]
    const textareaRules: RulesProp = [
      { type: 'required', message: '文章详情不能为空' }
    ]
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const onFormSubmit = (result: boolean) => {
      if (result) {
        console.log({ result })
        const { columnId } = stroe.state.user
        console.log(columnId)
        if (columnId) {
          console.log({ columnId })
          const newPost: PostProps = {
            id: new Date().getTime(),
            title: titleVal.value,
            content: textareaVal.value,
            columnId,
            createdAt: `发布于 ${new Date().toLocaleString()}`
          }
          stroe.commit('createPost', newPost)
          router.push({ name: 'ColumnDetail', params: { id: columnId } })
        }
      }
    }
    return {
      emailRef,
      titleRules,
      textareaRules,
      titleVal,
      textareaVal,
      onFormSubmit,
      inputRef
    }
  }
})
</script>

<style lang="scss" scoped></style>
