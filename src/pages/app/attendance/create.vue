<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useAttendanceStore } from '@/stores/attendance'
import { useMemberStore } from '@/stores/member'
import { useProgramStore } from '@/stores/program'
import { useShakeStore } from '@/stores/shake'

const { loading, error } = storeToRefs(useAttendanceStore())
const { createAttendance } = useAttendanceStore()

const { members } = storeToRefs(useMemberStore())
const { fetchMembers } = useMemberStore()

const { programs } = storeToRefs(useProgramStore())
const { fetchPrograms } = useProgramStore()

const { shakes } = storeToRefs(useShakeStore())
const { fetchShakes } = useShakeStore()

const attendance = ref({
  member_id: '',
  program_id: '',
  shake_id: '',
  tea: '',
  parking_ticket: '',
})

const handleReset = () => {
  attendance.value = {
    member_id: '',
    program_id: '',
    shake_id: '',
    tea: '',
    parking_ticket: '',
  }
}

const handleSubmit = () => {
  createAttendance(attendance.value)
}

onBeforeMount(() => {
  document.title = 'Tambah Attendance'
  fetchAttendances()
  handleReset()
  error.value = null
})
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Tambah Attendance
      </h2>

      <VBtn
        :to="{ name: 'attendances' }"
        color="primary"
      >
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="attendance.member_id"
                :items="members"
                label="Member"
                item-title="name"
                item-value="id"
                :error-messages="error && error.member_id ? [error.member_id] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="attendance.program_id"
                :items="programs"
                label="Program"
                item-title="name"
                item-value="id"
                :error-messages="error && error.program_id ? [error.program_id] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="attendance.shake_id"
                :items="shakes"
                label="Time"
                item-title="name"
                item-value="id"
                :error-messages="error && error.shake_id ? [error.shake_id] : []"
                type="datetime-local"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="attendance.tea"
                label="Tea"
                placeholder="Select Temperature"
                :error-messages="error && error.tea ? [error.tea] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-model="attendance.parking_ticket"
                label="Select Parking Ticket"
                placehorder="Parking Ticket"
                :error-messages="error && error.parking_ticket ? [error.parking_ticket] : []"
              />
            </VCol>
     
            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <VBtn
                type="submit"
                :loading="loading"
                color="primary"
              >
                Simpan
              </VBtn>

              <VBtn
                color="secondary"
                variant="tonal"
                @click="handleReset"
              >
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
