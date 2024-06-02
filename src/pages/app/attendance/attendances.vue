<script setup>
import { ref, onBeforeMount } from 'vue'
import { useAttendanceStore } from '@/stores/attendance'
import { can } from '@/helpers/permissionHelper'

const headers = [
  {
    text: 'Member',
    value: 'member.name',
  },
  {
    text: 'Exercise',
    value: 'program.title',
  },
  {
    text: 'Shake',
    value: 'shake.name',
  },
  {
    text: 'Tea',
    value: 'tea',
  },
  {
    text: 'Parking Ticket',
    value: 'parking_ticket',
  },
  {
    text: 'Attended',
    value: 'attended',
  },
  {
    text: 'Action',
    value: 'action',
  },
]

const { attendances, loading, success } = storeToRefs(useAttendanceStore())
const { fetchAttendances, deleteAttendance, absentAttendance } = useAttendanceStore()

fetchAttendances()

async function handleDeleteAttendance(attendance) {
  const confirmed = confirm('Delete this attendance?')
  if (confirmed) {
    await deleteAttendance(attendance.id)
    fetchAttendances()
  }
}

const search = ref('')

async function handleUpdateAttendance(attendance) {
  const confirmed = confirm('Apakah anda yakin mengubah status kehadiran?')

  if (confirmed) {
    await absentAttendance(attendance.id)

    fetchAttendances()
  }

  return false
}

onBeforeMount(() => {
  document.title = 'Attendances'
})
</script>

<template>
  <VDialog
    v-if="success"
    v-model="success"
    max-width="400"
  >
    <VCard>
      <VCardText>
        {{ success }}
      </VCardText>
      <VCardActions>
        <VBtn
          color="primary"
          text
          @click="() => (success = null)"
        >
          Close
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Attendances List
      </h2>

      <VBtn
        v-if="can('attendance-create')"
        :to="{ name: 'attendance-create' }"
        color="primary"
      >
        Add Attendance
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Search Attendance"
        placeholder="Search Attendance"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="attendances"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template
            v-if="can('attendance-absent')"
            #item-attended="item"
          >
            <VCheckbox
              v-model="item.is_attended"
              color="primary"
              :disabled="item.is_attended"
              @change="handleUpdateAttendance(item)"
            />
          </template>
          <template #item-operation="item">
            <VBtn
              v-if="can('attendance-edit')"
              :to="{ name: 'attendance-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Edit
            </VBtn>
            <VBtn
              v-if="can('attendance-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteAttendance(item)"
            >
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
