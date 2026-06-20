<template>
  <button
    class="ui-btn"
    :class="[color, size]"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  color?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}>()

const emit = defineEmits(['click'])

const onClick = () => {
  emit('click')
}
</script>

<style scoped>
.ui-btn {
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 6px;
  transition: 0.2s;
  padding: 0.6rem 1.2rem;
}

/* Colors */
.primary {
  background: #3b82f6;
  color: white;
}
.primary:hover {
  background: #2563eb;
}

.secondary {
  background: #e5e7eb;
  color: #111;
}
.secondary:hover {
  background: #d1d5db;
}

.danger {
  background: #ef4444;
  color: white;
}
.danger:hover {
  background: #dc2626;
}

/* Sizes */
.sm {
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
}

.md {
  font-size: 1rem;
}

.lg {
  font-size: 1.2rem;
  padding: 0.8rem 1.4rem;
}
</style>
