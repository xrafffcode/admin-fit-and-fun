

<template>
  <li class="nav-link">
    <template v-if="!item.children">
      <Component
        :is="item.to ? 'RouterLink' : 'a'"
        :to="item.to"
        :href="item.href"
        class="nav-item"
        :class="{ disabled: item.disable }"
      >
        <VIcon
          :icon="item.icon"
          class="nav-item-icon"
        />
        <span class="nav-item-title">{{ item.title }}</span>
      </Component>
    </template>
    
    <template v-else>
      <a
        class="nav-item"
        @click="toggleSubItems"
      >
        <VIcon
          :icon="item.icon"
          class="nav-item-icon"
        />
        <span class="nav-item-title">{{ item.title }}</span>
        <VIcon
          :icon="isSubItemsOpen ? 'bx-chevron-up' : 'bx-chevron-down'"
          class="nav-item-icon"
        />
      </a>
      
      <ul
        v-show="isSubItemsOpen"
        class="nav-sub-items"
      >
        <VerticalNavLink
          v-for="subItem in item.children"
          :key="subItem.title"
          :item="subItem"
        />
      </ul>
    </template>
  </li>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const route = useRoute()
const isSubItemsOpen = ref(false)

const toggleSubItems = () => {
  isSubItemsOpen.value = !isSubItemsOpen.value
}

  
watch(
  () => route.path,
  () => {
    if (props.item.children) {
      isSubItemsOpen.value = props.item.children.some(
        subItem => subItem.to === route.path,
      )
    }
  },
)

if (props.item.children) {
  isSubItemsOpen.value = props.item.children.some(
    subItem => subItem.to === route.path,
  )
}
</script>

<style lang="scss">
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
