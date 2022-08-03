<template>
  <div class="validate-input-container">
    <!--   v-model="inputRef.val" -->
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <span class="invalid-feedback" v-if="inputRef.error">{{
      inputRef.message
    }}</span>
  </div>
</template>

<script lang="ts">
import { emitter } from '_c/Form/ValidateForm.vue'
import { defineComponent, reactive, onMounted, PropType } from 'vue'
interface RuleProp {
  type: 'required' | 'email'
  message: string
}
export type RulesProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }

      if (inputRef.val.trim() === '') {
        inputRef.error = true
        inputRef.message !== '' ? inputRef.message : '不能为空'
        // inputRef.message = '不能为空'
      }
    }
    onMounted(() => {
      emitter.emit('form-item-created', inputRef.val)
    })
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style lang="scss" scoped></style>
