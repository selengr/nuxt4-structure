import { UiButton } from '../../.nuxt/components';
<template>
  <UiButton color="primary" size="md" @click="save">
    Save
  </UiButton>

  <UiButton color="secondary" size="sm">
    Cancel
  </UiButton>

  <UiButton color="danger" size="lg" @click="remove">
    Delete
  </UiButton>

  <UiButton color="primary" size="lg" @click="reza">
     hi reza
  </UiButton>

  <h1>{{ name }}</h1>
</template>

<script setup>
const name = ref("")
const save = () => console.log("Saved")
const reza = () => name.value = "reza jooonm how are you today"

const remove = () => console.log("Deleted")
</script>
