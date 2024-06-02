<script setup>
import { ref, onBeforeMount } from 'vue'
import { useGoalStore } from '@/stores/goal'
import { can } from '@/helpers/permissionHelper'

const headers = [
  {
    text: 'Image',
    value: 'image',
  },
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Description',
    value: 'description',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  },
]

const { goals, loading, success } = storeToRefs(useGoalStore())
const { fetchGoals, deleteGoal } = useGoalStore()

fetchGoals()

async function handleDeleteGoal(goal) {
  const confirmed = confirm('Delete this program?')
  if (confirmed) {
    await deleteGoal(goal.id)
    fetchGoals()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'Programs'
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
        Programs List
      </h2>

      <VBtn
        v-if="can('goal-create')"
        :to="{ name: 'goal-create' }"
        color="primary"
      >
        Add Program
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Search Program"
        placeholder="Search Program"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="goals"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-image="item">
            <VImg
              :src="item.image_url"
              width="100"
              height="100"
              contain
            />
          </template>

          <template #item-time="item">
            {{ formatDateTime(item.time) }}
          </template>
          <template #item-operation="item">
            <VBtn
              v-if="can('goal-edit')"
              :to="{ name: 'goal-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Edit
            </VBtn>
            <VBtn
              v-if="can('goal-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteGoal(item)"
            >
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
