<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useAttendanceStore } from '@/stores/attendance'
import { useMemberStore } from '@/stores/member'
import { useProgramStore } from '@/stores/program'
import { useShakeStore } from '@/stores/shake'

const { user } = useAuthStore()

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
  document.title = 'Add Attendance'
  fetchMembers()
  fetchPrograms()
  fetchShakes()
  handleReset()
  error.value = null

  if (user?.role === 'member') {
    attendance.value.member_id = user?.member_id
  }
})
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Add Attendance
      </h2>

      <VBtn
        :to="{ name: 'attendances' }"
        color="primary"
      >
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VAlert
        v-if="error"
        type="error"
        dismissible
        class="mb-4"
      >
        {{ error }}  
      </VAlert>

      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-if="user?.role !== 'member'"
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
                label="Select Exercise"
                item-title="title"
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
