<script setup>
import { useAuthStore } from '@/stores/auth'

const { user, logout, checkAuth } = useAuthStore()

const handleLogout = () => {
  logout()
}

checkAuth()
</script>

<template>
  <VAvatar
    class="cursor-pointer"
    color="primary"
    variant="tonal"
  >
    {{ user?.email.charAt(0) }}
    <!-- SECTION Menu -->
    <VMenu
      activator="parent"
      width="230"
      location="bottom end"
      offset="14px"
    >
      <VList>
        <!-- 👉 User Avatar & Name -->
        <VListItem>
          <template #prepend>
            <VListItemAction start>
              <VAvatar
                color="primary"
                variant="tonal"
              >
                {{ user?.email.charAt(0) }}
              </VAvatar>
            </VListItemAction>
          </template>

          <VListItemTitle class="font-weight-semibold">
            {{ user?.email }}
          </VListItemTitle>
          <VListItemSubtitle v-if="user?.role === 'coach'">
            ID Herbalife: {{ user?.id_herbalife }}
          </VListItemSubtitle>
        </VListItem>
        <VDivider class="my-2" />


        <!-- 👉 Logout -->
        <VListItem @click="handleLogout">
          <template #prepend>
            <VIcon
              class="me-2"
              icon="bx-log-out"
              size="22"
            />
          </template>

          <VListItemTitle>Logout</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
    <!-- !SECTION -->
  </VAvatar>
</template>
