<script setup>
import { ref, onBeforeMount } from 'vue'
import { useAttendanceStore } from '@/stores/attendance'
import { can } from '@/helpers/permissionHelper'
import { formatDateTime } from '@/@core/utils/formatters'

const headers = [
  {
    text: 'Member',
    value: 'member.name',
    width: 300,
  },
  {
    text: 'Program',
    value: 'program.name',
    width: 300,
  },
  {
    text: 'Shake',
    value: 'shake.name',
    width: 300,
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
    text: 'Aksi',
    value: 'operation',
    sortable: false,
  },
]

const { attendances, loading, success } = storeToRefs(useAttendanceStore())
const { fetchAttendances, deleteAttendance } = useAttendanceStore()

fetchAttendances()

async function handleDeleteAttendance(attendance) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus attendance ini?')

  if (confirmed) {
    await deleteAttendance(attendance.id)
    fetchAttendances()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'List Attendance'
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
          Tutup
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
        List Attendance
      </h2>

      <VBtn
        v-if="can('attendance-create')"
        :to="{ name: 'attendance-create' }"
        color="primary"
      >
        Tambah Attendance
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Attendance"
        placeholder="Cari Attendance"
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
          <template #item-time="item">
            {{ formatDateTime(item.time) }}
          </template>
          <template #item-operation="item">
            <VBtn
              v-if="can('attendance-edit')"
              :to="{ name: 'attendance-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              v-if="can('attendance-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteAttendance(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>