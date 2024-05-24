<script setup>
import { useAuthStore } from '@/stores/auth'

const { user } = useAuthStore()
</script>

<template>
  <VRow>
    <VCol cols="12">
      <h1 class="display-4">
        Selamat Datang, {{ user?.profile?.name }}
      </h1>

      <p class="lead">
        Anda login sebagai {{ user?.role }}
      </p>
    </VCol>
  </VRow>
</template>
