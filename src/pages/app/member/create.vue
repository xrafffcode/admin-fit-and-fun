<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useMemberStore } from '@/stores/member'
import { useCoachStore } from '@/stores/coach'
import { useGoalStore } from '@/stores/goal'

const { loading, error } = storeToRefs(useMemberStore())
const { createMember } = useMemberStore()

const { coaches } = storeToRefs(useCoachStore())
const { fetchCoaches, loading: loadingCoaches } = useCoachStore()

const { goals } = storeToRefs(useGoalStore())
const { fetchGoals, loading: loadingGoals } = useGoalStore()

const member = ref({
  email: '',
  password: '',
  name: '',
  phone_number: '',
  weight: '',
  height: '',
  coach_id: '',
  goal_id: '',
})

const handleReset = () => {
  member.value = {
    email: '',
    password: '',
    name: '',
    phone_number: '',
    weight: '',
    height: '',
    coach_id: '',
    goal_id: '',  
  }
}

const handleSubmit = () => {
  createMember(member.value)
}

onBeforeMount(() => {
  document.title = 'Add Member'
  fetchCoaches()
  fetchGoals()
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
        Add Member
      </h2>

      <VBtn
        :to="{ name: 'members' }"
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
              md="6"
            >
              <VTextField
                v-model="member.email"
                label="Email"
                placeholder="Email"
                :error-messages="error && error.email ? [error.email] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="member.password"
                label="Password"
                placeholder="Password"
                :error-messages="error && error.password ? [error.password] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="member.name"
                label="Name"
                placeholder="Member Name"
                :error-messages="error && error.name ? [error.name] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="member.phone_number"
                label="Phone Number"
                placeholder="0812233456"
                :error-messages="error && error.phone_number ? [error.phone_number] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="member.weight"
                label="Weight"
                placeholder="Enter numbers only"
                :error-messages="error && error.weight ? [error.weight] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="member.height"
                label="Height"
                placeholder="Enter numbers only"
                :error-messages="error && error.height ? [error.height] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              v-if="user?.role !== 'coach'"
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="member.coach_id"
                :items="coaches"
                label="Select Coach"
                item-title="name"
                item-value="id"
                :error-messages="error && error.coach_id ? [error.coach_id] : []"
                :loading="loadingCoaches"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                v-model="member.goal_id"
                :items="goals"
                label="Select Program"
                item-title="name"
                item-value="id"
                :error-messages="error && error.goal_id ? [error.goal_id] : []"
                :loading="loadingGoals"
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
