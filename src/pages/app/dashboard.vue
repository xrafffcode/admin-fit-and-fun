<script setup>
import { useAuthStore } from '@/stores/auth'
import { can } from '@/helpers/permissionHelper'
import { useMemberStore } from '@/stores/member'
import { useProgramStore } from '@/stores/program'

const { user } = useAuthStore()

const { members } = useMemberStore()
const { fetchMembers } = useMemberStore()

const { programs } = useProgramStore()
const { fetchPrograms } = useProgramStore()

fetchMembers()
fetchPrograms()
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

  <VRow v-if="can('dashboard-owner')">
    <VCol 
      cols="6"
      sm="12"
      md="6"
    >
      <VCard>
        <VCardTitle>
          Total Members
        </VCardTitle>
        <VCardText>
          {{ members.length }}
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VRow v-if="can('dashboard-coach')">
    <VCol 
      cols="6"
      sm="12"
      md="6"
    >
      <VCard>
        <VCardTitle>
          Total Members
        </VCardTitle>
        <VCardText>
          {{ members.length }}
        </VCardText>
      </VCard>
    </VCol>

    <VCol 
      cols="6"
      sm="12"
      md="6"
    >
      <VCard>
        <VCardTitle>
          Total Exercises
        </VCardTitle>
        <VCardText>
          {{ programs.length }}
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
