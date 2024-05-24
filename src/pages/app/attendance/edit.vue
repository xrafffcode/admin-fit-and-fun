<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { useAttendanceStore } from '@/stores/attendance'
import { useMemberStore } from '@/stores/member'
import { useProgramStore } from '@/stores/program'
import { useShakeStore } from '@/stores/shake'

const route = useRoute()

const { loading, error } = storeToRefs(useAttendanceStore())
const { fetchAttendance, updateAttendance } = useAttendanceStore()

const { members } = storeToRefs(useMemberStore())
const { fetchMembers } = useMemberStore()

const { programs } = storeToRefs(useProgramStore())
const { fetchPrograms } = useProgramStore()

const { shakes } = storeToRefs(useShakeStore())
const { fetchShakes } = useShakeStore()

const attendanceId = route.params.id

const attendance = ref({
  id: attendanceId,
  member_id: '',
  program_id: '',
  shake_id: '', 
  tea: '',
  parking_ticket: '',
})

const fetchAttendanceData = async () => {
  try {
    const data = await fetchAttendance(attendanceId)

    attendance.value = {
      id: data.id,
      member_id: data.member_id,
      program_id: data.program_id,
      shake_id: data.shake_id,
      tea: data.tea,
      parking_ticket: data.parking_ticket,
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Edit Attendance'
  fetchMembers()
  fetchPrograms()
  fetchShakes()
  fetchAttendanceData()
})

const handleSubmit = () => {
  updateAttendance(attendance.value)
}

const handleReset = () => {
  fetchAttendanceData()
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Attendance
      </h2>

      <VBtn
        :to="{ name: 'attendances' }"
        color="primary"
      >
        Back
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
              <VAutocomplete
                v-model="attendance.member_id"
                :items="members"
                label="Select Member"
                item-title="name"
                item-value="id"
                :error-messages="error && error.member_id ? [error.member_id] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-model="attendance.program_id"
                :items="programs"
                label="Select Program"
                item-title="name"
                item-value="id"
                :error-messages="error && error.program_id ? [error.program_id] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-model="attendance.shake_id"
                :items="shakes"
                label="Select Shake"
                item-title="name"
                item-value="id"
                :error-messages="error && error.shake_id ? [error.shake_id] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-model="attendance.tea"
                :items="['Hot', 'Cold']"
                label="Select Tea"
                item-title="name"
                item-value="id"
                :error-messages="error && error.tea ? [error.tea] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-model="attendance.parking_ticket"
                :items="['Yes', 'No']"
                label="Select Parking Ticket"
                item-title="name"
                item-value="id"
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
                Save
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
