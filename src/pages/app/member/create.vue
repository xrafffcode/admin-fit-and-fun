<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useMemberStore } from '@/stores/member'
import { useCoachStore } from '@/stores/coach'
import { useGoalStore } from '@/stores/goal'

const { loading, error } = storeToRefs(useMemberStore())
const { createMember } = useMemberStore()

const { coaches } = storeToRefs(useCoachStore())
const { fetchCoaches } = useCoachStore()

const { goals } = storeToRefs(useGoalStore())
const { fetchGoals } = useGoalStore()

const member = ref({
  name: '',
  phone_number: '',
  weight: '',
  height: '',
  coach_id: '',
  goal_id: '',
})

const handleReset = () => {
  member.value = {
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
  document.title = 'Tambah Member'
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
        Tambah Member
      </h2>

      <VBtn
        :to="{ name: 'members' }"
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
                v-model="member.name"
                label="Nama"
                placeholder="Nama Member"
                :error-messages="error && error.name ? [error.name] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
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
              md="12"
            >
              <VTextField
                v-model="member.weight"
                label="Weight"
                placeholder="Masukkan angka saja"
                :error-messages="error && error.weight ? [error.weight] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="member.height"
                label="Height"
                placeholder="Masukkan angka saja"
                :error-messages="error && error.height ? [error.height] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-model="member.coach_id"
                :items="coaches"
                label="Pilih Coach"
                item-title="name"
                item-value="id"
                :error-messages="error && error.coach_id ? [error.coach_id] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-model="member.goal_id"
                :items="goals"
                label="Pilih Goal"
                item-title="name"
                item-value="id"
                :error-messages="error && error.goal_id ? [error.goal_id] : []"
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
