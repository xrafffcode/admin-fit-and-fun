<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { useMemberProgressStore } from '@/stores/member-progress'
import { useMemberStore } from '@/stores/member'

const route = useRoute()

const { loading, error } = storeToRefs(useMemberProgressStore())
const { fetchMemberProgres, updateMemberProgress } = useMemberProgressStore()

const { members } = storeToRefs(useMemberStore())
const { fetchMembers } = useMemberStore()

const memberProgressId = route.params.id


const memberProgress = ref({
  id: memberProgressId,
  member_id: '',
  date: '',
  weight: '',
  body_fat: '',
  muscle_mass: '',
  cell_age: '',
  fat: '',
  note: '',
})

const fetchMemberProgresData = async () => {
  try {
    const data = await fetchMemberProgres(memberProgressId)

    memberProgress.value = {
      id: memberProgressId,
      member_id: data.member.id,
      date: data.date,
      weight: parseFloat(data.weight),
      body_fat: parseFloat(data.body_fat),
      muscle_mass: parseFloat(data.muscle_mass),
      cell_age: parseFloat(data.cell_age),
      fat: parseFloat(data.fat),
      note: data.note,
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Member Progress Edit'
  fetchMemberProgresData()
  fetchMembers()
})

const handleSubmit = () => {
  updateMemberProgress(memberProgress.value)
}

const handleReset = () => {
  fetchMemberProgresData()
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Member Progress Edit
      </h2>

      <VBtn
        :to="{ name: 'member-progress' }"
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
              <VSelect
                v-model="memberProgress.member_id"
                :items="members"
                item-title="name"
                item-value="id"
                label="Member"
                required
                :error-messages="error && error.member_id ? [error.member_id] : []"
              />
            </VCol>
           
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="memberProgress.date"
                label="Date"
                type="date"
                required
                :error-messages="error && error.date ? [error.date] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="memberProgress.weight"
                label="Weight"
                type="number"
                required
                :error-messages="error && error.weight ? [error.weight] : []"
                placeholder="Enter numbers only kg"
                suffix="kg"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="memberProgress.body_fat"
                label="BodyFat"
                type="number"
                required
                :error-messages="error && error.body_fat ? [error.body_fat] : []"
                placeholder="Enter numbers only %"
                suffix="%"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="memberProgress.muscle_mass"
                label="Muscle Mass"
                type="number"
                required
                :error-messages="error && error.muscle_mass ? [error.muscle_mass] : []"
                placeholder="Enter numbers only kg"
                suffix="kg"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="memberProgress.cell_age"
                label="Cell Age"
                type="number"
                required
                :error-messages="error && error.cell_age ? [error.cell_age] : []"
                placeholder="Enter numbers only"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="memberProgress.fat"
                label="Ficeral Fat"
                type="number"
                required
                :error-messages="error && error.fat ? [error.fat] : []"
                placeholder="Enter numbers only"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="memberProgress.note"
                label="Note"
                required
                :error-messages="error && error.note ? [error.note] : []"
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
                type="reset"
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
