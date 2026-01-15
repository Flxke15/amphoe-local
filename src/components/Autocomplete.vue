<template>
  <v-autocomplete
    v-model="localValue"
    :placeholder="props.placeholder"
    :persistent-placeholder="props.persistentPlaceholder"
    :variant="props.variant"
    :density="props.density"
    :items="props.items"
    :item-title="props.itemTitle"
    :item-value="props.itemValue"
    :return-object="props.returnObject"
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
    :bg-color="props.readonly ? 'grey-lighten-1' : props.bgColor"
    :key="localValue"
    autocomplete="off"
    rounded="xl"
  >
    <template v-slot:label v-if="props.label">
      {{ props.label }}<span v-if="props.required" class="text-red">*</span>
    </template>
  </v-autocomplete>
</template>

<script setup>
const localValue = defineModel()
const props = defineProps({
  required: { type: Boolean, default: false },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  persistentPlaceholder: { type: Boolean, default: true },
  variant: { type: String, default: 'outlined' },
  density: { type: String, default: 'compact' },
  items: { type: Array, default: () => [] },
  itemTitle: { type: String, default: 'title' },
  itemValue: { type: String, default: 'value' },
  returnObject: { type: Boolean, default: false },
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
  bgColor: { type: String, default: 'white' },
})
</script>

<style scoped>
::v-deep(.v-label) {
  opacity: 1;
  font-weight: 500;
}
</style>