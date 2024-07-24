<script setup>
import { ref, onBeforeMount } from 'vue'
import { useTrialApplicantStore } from '@/stores/trial-applicant'
import { can } from '@/helpers/permissionHelper'


const headers = [
  {
    text: 'Date Created',
    value: 'created_at',
  },
  {
    text: 'Name',
    value: 'name',
    width: 200,
  },
  {
    text: 'Phone Number',
    value: 'phone',
    width: 200,
  },
  {
    text: 'Coach',
    value: 'coach.name',
  },
  {
    text: 'Program',
    value: 'goal.name',
  },
  {
    text: 'Tea',
    value: 'tea',
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

const { trialApplicants, loading, success } = storeToRefs(useTrialApplicantStore())
const { fetchTrialApplicants, deleteTrialApplicant, absentTrialApplicant } = useTrialApplicantStore()

fetchTrialApplicants()

async function handleDeleteTrialApplicant(trialApplicant) {
  const confirmed = confirm('Delete this trial applicant?')
  if (confirmed) {
    await deleteTrialApplicant(trialApplicant.id)
    fetchTrialApplicants()
  }
}

const search = ref('')

async function handleUpdateTrialApplicant(trialApplicant) {
  const confirmed = confirm('Apakah anda yakin mengubah status kehadiran?')

  if (confirmed) {
    await absentTrialApplicant(trialApplicant.id)

    fetchTrialApplicants()
  }

  return false
}

onBeforeMount(() => {
  document.title = 'Trial Applicants'
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
        Trial Applicants List
      </h2>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Search Trial Applicant"
        placeholder="Search Trial Applicant"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="trialApplicants"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template
            v-if="can('trial-applicant-absent')"
            #item-attended="item"
          >
            <input
              v-model="item.is_attended"
              type="checkbox"
              :disabled="item.is_attended"
              @change="() => handleUpdateTrialApplicant(item)"
            >
          </template>
          <template #item-action="item">
            <VBtn
              v-if="can('trial-applicant-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteTrialApplicant(item)"
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
