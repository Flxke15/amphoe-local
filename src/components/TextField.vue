<template>
  <v-text-field
    v-model="localValue"
    :placeholder="props.placeholder"
    :persistent-placeholder="props.persistentPlaceholder"
    :hint="props.hint"
    :variant="props.variant"
    :density="props.density"
    :hide-details="props.hideDetails"
    :clearable="props.readonly ? false : props.clearable"
    :prefix="props.prefix"
    :suffix="props.suffix"
    :prepend-inner-icon="props.prependInnerIcon"
    :append-inner-icon="props.appendInnerIcon"
    :prepend-icon="props.prependIcon"
    :append-icon="props.appendIcon"
    :rules="props.rules"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :bg-color="props.readonly && !['plain'].includes(props.variant) ? 'grey-lighten-1' : props.bgColor"
    :v-mask="props.vMask"
    :class="['plain'].includes(props.variant) ? 'custom-input' : ''"
    autocomplete="off"
  >
    <template v-slot:label v-if="props.label">
      {{ props.label }}<span v-if="props.required" class="text-red">*</span>
    </template>
  </v-text-field>
</template>

<script setup>
const localValue = defineModel()
const props = defineProps({
  required: { type: Boolean, default: false },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  hint: { type: String, default: '' },
  persistentPlaceholder: { type: Boolean, default: true },
  variant: { type: String, default: 'outlined' },
  density: { type: String, default: 'compact' },
  hideDetails: { default: true },
  clearable: { type: Boolean, default: false },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' },
  prependInnerIcon: { type: String, default: '' },
  appendInnerIcon: { type: String, default: '' },
  prependIcon: { type: String, default: '' },
  appendIcon: { type: String, default: '' },
  rules: { type: Array, default: () => [] },
  readonly: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  bgColor: { type: String, default: 'transparent' },
  vMask: { type: String, }
})
</script>

<style scoped>
::v-deep(.v-label) {
  opacity: 1;
  font-weight: 500;
}

:deep(.custom-input input) {
  color: '#FF5252' !important;
  font-weight: 500 !important;
}
</style>