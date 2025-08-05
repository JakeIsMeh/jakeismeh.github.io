<script setup lang="ts">
import { parseURL } from 'ufo'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  title?: string
  website?: string
}>(), {
  title: 'jake\'s cosmic capsule',
})

// const title = computed(() => {
//   return props.title || 'jake\'s cosmic capsule'
// })

</script>

<template>
  <div class="bg-[#ff4090]" style="font-family: 'Atkinson Hyperlegible Next'">
    <div
      class="h-full w-full flex items-start justify-start border-solid border-[#ff4090] border-[36px] rounded-[96px] bg-[#0f1114]">
      <div class="flex items-start justify-start h-full">
        <div class="flex flex-col justify-between w-full h-full color-[#fbedef]">
          <h1 class="text-[96px] px-12 pt-12 font-extrabold text-left"
            style="display: block; line-clamp: 3; text-overflow: ellipsis;">
            {{ title!! ? title : 'jake\'s cosmic capsule' }}
          </h1>
          <p class="text-[36px] pb-12 px-12 font-bold mb-0"
            style="display: block; line-clamp: 1; text-overflow: ellipsis;">
            {{ title ? 'jake\'s cosmic capsule' : '' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
