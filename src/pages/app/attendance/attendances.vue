<script setup>
import { ref, onBeforeMount } from 'vue'
import { useAttendanceStore } from '@/stores/attendance'
import { useMemberStore } from '@/stores/member'
import { can } from '@/helpers/permissionHelper'


const headers = [
  {
    text: 'Member',
    value: 'member.name',
    width: 200,
  },
  {
    text: 'Coach',
    value: 'member.coach.name',
  },
  {
    text: 'Exercise',
    value: 'program.title',
    width: 300,
  },
  {
    text: 'Shake',
    value: 'shake.name',
    width: 200,
  },
  {
    text: 'Tea',
    value: 'tea',
  },
  {
    text: 'Parking Ticket',
    value: 'parking_ticket',
    width: 150,
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

const { members } = storeToRefs(useMemberStore())
const { fetchMembers } = useMemberStore()

const filter = ref({
  member_id: '',
  start_date: new Date(new Date().getFullYear(), new Date().getMonth(), 2).toISOString().slice(0, 10),
  end_date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toISOString().slice(0, 10),
})

fetchAttendances()
fetchMembers()

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

    <VCol
      cols="12"
      md="3"
    >
      <VSelect
        v-model="filter.member_id"
        :items="members"
        item-title="name"
        item-value="id"
        label="Member"
        clearable
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="3"
    >
      <VTextField
        v-model="filter.start_date"
        label="Start Date"
        clearable
        variant="solo"
        type="date"
      />
    </VCol>

    <VCol
      cols="12"
      md="3"
    >
      <VTextField
        v-model="filter.end_date"
        label="End Date"
        clearable
        variant="solo"
        type="date"
      />
    </VCol>

    <VCol
      cols="12"
      md="3"
    >
      <button
        class="btn btn-filter"
        @click="fetchAttendances(filter)"
      >
        <VIcon icon="mdi-magnify" />
        Filter
      </button>
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
            <input
              v-model="item.is_attended"
              type="checkbox"
              :disabled="item.is_attended"
              @change="() => handleUpdateAttendance(item)"
            >
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


<style>
.btn-filter {
  background-color: white;
  color: #000;
  border-radius: 5px;
  padding: 10px;
  border: none;
  width: 100%;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  text-align: center;
  text-decoration: none;
  height: 100%;
}
</style>
