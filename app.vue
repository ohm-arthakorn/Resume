<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Portfolio` : 'Portfolio';
  },
  meta: [
    { name: 'description', content: 'My University Portfolio' }
  ]
})
</script>
