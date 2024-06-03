
<script setup>
import { onBeforeMount } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { can } from '@/helpers/permissionHelper'
import { useAdminStore } from '@/stores/admin'
import { useAttendanceStore } from '@/stores/attendance'
import { useCoachStore } from '@/stores/coach'
import { useGoalStore } from '@/stores/goal'
import { useMemberStore } from '@/stores/member'
import { useMembershipStore } from '@/stores/membership'
import { useProgramStore } from '@/stores/program'
import { useShakeStore } from '@/stores/shake'
import { storeToRefs } from 'pinia'

const { user } = useAuthStore()

const { admins } = storeToRefs(useAdminStore())
const { fetchAdmins } = useAdminStore()

const { attendances } = storeToRefs(useAttendanceStore())
const { fetchAttendances } = useAttendanceStore()

const { coaches } = storeToRefs(useCoachStore())
const { fetchCoaches } = useCoachStore()

const { goals } = storeToRefs(useGoalStore())
const { fetchGoals } = useGoalStore()

const { members } = storeToRefs(useMemberStore())
const { fetchMembers } = useMemberStore()

const { memberships } = storeToRefs(useMembershipStore())
const { fetchMemberships } = useMembershipStore()

const { programs } = storeToRefs(useProgramStore())
const { fetchPrograms } = useProgramStore()


const { shakes } = storeToRefs(useShakeStore())
const { fetchShakes } = useShakeStore()

fetchAdmins()
fetchAttendances()
fetchCoaches()
fetchGoals()
fetchMembers()
fetchMemberships()
fetchPrograms()
fetchShakes()

onBeforeMount(() => {
  document.title = 'Dashboard'
  
})
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
      cols="3"
      sm="12"
      md="3"
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
      cols="3"
      sm="12"
      md="3"
    >
      <VCard>
        <VCardTitle>
          Total Memberships
        </VCardTitle>
        <VCardText>
          {{ memberships.length }}
        </VCardText>
      </VCard>
    </VCol>

    <VCol 
      cols="3"
      sm="12"
      md="3"
    >
      <VCard>
        <VCardTitle>
          Total Attendances
        </VCardTitle>
        <VCardText>
          {{ attendances.length }}
        </VCardText>
      </VCard>
    </VCol>

    <VCol 
      cols="3"
      sm="12"
      md="3"
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

    <VCol 
      cols="3"
      sm="12"
      md="3"
    >
      <VCard>
        <VCardTitle>
          Total Coaches
        </VCardTitle>
        <VCardText>
          {{ coaches.length }}
        </VCardText>
      </VCard>
    </VCol>

    <VCol 
      cols="3"
      sm="12"
      md="3"
    >
      <VCard>
        <VCardTitle>
          Total Shakes
        </VCardTitle>
        <VCardText>
          {{ shakes.length }}
        </VCardText>
      </VCard>
    </VCol>

    <VCol 
      cols="3"
      sm="12"
      md="3"
    >
      <VCard>
        <VCardTitle>
          Total Programs
        </VCardTitle>
        <VCardText>
          {{ goals.length }}
        </VCardText>
      </VCard>
    </VCol>

    <VCol 
      cols="3"
      sm="12"
      md="3"
    >
      <VCard>
        <VCardTitle>
          Total Admins
        </VCardTitle>
        <VCardText>
          {{ admins.length }}
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
