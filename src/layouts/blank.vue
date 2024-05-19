<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.path,
  () => {
    window.scrollTo({
      top: 0,
    })
  },
)

const showScrollToTop = ref(false)

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    showScrollToTop.value = true
  } else {
    showScrollToTop.value = false
  }
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>



<template>
  <div class="layout-wrapper layout-blank">
    <RouterView />
  </div>
</template>


<style>
body {
  scroll-behavior: smooth;
}

.layout-wrapper.layout-blank {
  flex-direction: column;
}

.layout-wrapper.layout-blank {
  background-color: #fff !important;
}

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: all 0.3s;
}

.scroll-to-top:hover {
  background-color: #f3f3f3;
}

.scroll-to-top v-icon {
  font-size: 24px;
  color: #000;
}
</style>
