<script setup>
import { useAuthStore } from '@/stores/auth'
import { can } from '@/helpers/permissionHelper'
import { useAdminStore } from '@/stores/admin'
import { useAttendanceStore } from '@/stores/attendance'
import { useCoachStore } from '@/stores/coach'
import { useGoalStore } from '@/stores/goal'
import { useMemberStore } from '@/stores/member'
import { useMembershipStore } from '@/stores/membership'
import { usePermissionStore } from '@/stores/permission'
import { useProgramStore } from '@/stores/program'
import { useRoleStore } from '@/stores/role'
import { useShakeStore } from '@/stores/shake'

document.title = 'Dashboard'

const { user } = useAuthStore()

const { admins } = useAdminStore()
const { fetchAdmins } = useAdminStore()

const { attendances } = useAttendanceStore()
const { fetchAttendances } = useAttendanceStore()

const { coaches } = useCoachStore()
const { fetchCoaches } = useCoachStore()

const { goals } = useGoalStore()
const { fetchGoals } = useGoalStore()

const { members } = useMemberStore()
const { fetchMembers } = useMemberStore()

const { memberships } = useMembershipStore()
const { fetchMemberships } = useMembershipStore()

const { permissions } = usePermissionStore()
const { fetchPermissions } = usePermissionStore()

const { programs } = useProgramStore()
const { fetchPrograms } = useProgramStore()

const { roles } = useRoleStore()
const { fetchRoles } = useRoleStore()

const { shakes } = useShakeStore()
const { fetchShakes } = useShakeStore()

fetchAdmins()
fetchAttendances()
fetchCoaches()
fetchGoals()
fetchMembers()
fetchMemberships()
fetchPermissions()
fetchPrograms()
fetchRoles()
fetchShakes()
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

    <VCol 
      cols="6"
      sm="12"
      md="6"
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
      cols="6"
      sm="12"
      md="6"
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

    <VCol 
      cols="6"
      sm="12"
      md="6"
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
      cols="6"
      sm="12"
      md="6"
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
      cols="6"
      sm="12"
      md="6"
    >
      <VCard>
        <VCardTitle>
          Total Roles
        </VCardTitle>
        <VCardText>
          {{ roles.length }}
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
          Total Programs
        </VCardTitle>
        <VCardText>
          {{ goals.length }}
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
          Total Admins
        </VCardTitle>
        <VCardText>
          {{ admins.length }}
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
          Total Permissions
        </VCardTitle>
        <VCardText>
          {{ permissions.length }}
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
          Total Memberships
        </VCardTitle>
        <VCardText>
          {{ memberships.length }}
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
          Total Attendances
        </VCardTitle>
        <VCardText>
          {{ attendances.length }}
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

  <VRow v-if="can('dashboard-admin')">
    <VCol 
      cols="6"
      sm="12"
      md="6"
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
