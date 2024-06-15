<script setup>
import { ref, onBeforeMount } from 'vue'
import { useMemberProgressStore } from '@/stores/member-progress'
import { can } from '@/helpers/permissionHelper'
import { formatDate } from '@/@core/utils/formatters';

const headers = [
  {
    text: 'Member',
    value: 'member.name',
  },
  {
    text: 'Date',
    value: 'date',
  },
  {
    text: 'Weight',
    value: 'weight',
  },
  {
    text: 'Body Fat',
    value: 'body_fat',
  },
  {
    text: 'Muscle Mass',
    value: 'muscle_mass',
  },
  {
    text: 'Cell Age',
    value: 'cell_age',
  },
  {
    text: 'Fat',
    value: 'fat',
  },
  {
    text: 'Note',
    value: 'note',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  },
]

const { memberProgress, loading, success } = storeToRefs(useMemberProgressStore())
const { fetchMemberProgress } = useMemberProgressStore()

fetchMemberProgress()

const search = ref('')

onBeforeMount(() => {
  document.title = 'Member Progress'
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
        Members Progress
      </h2>

      <VBtn
        v-if="can('member-progress-create')"
        :to="{ name: 'member-progress-create' }"
        color="primary"
      >
        Add Member Progress
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="memberProgress"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-date="item">
            {{ formatDate(item.date) }}
          </template>

          <template #item-weight="item">
            {{ parseFloat(item.weight).toFixed(2) }} Kg
          </template>

          <template #item-body_fat="item">
            {{ parseFloat(item.body_fat).toFixed(2) }} %
          </template>

          <template #item-muscle_mass="item">
            {{ parseFloat(item.muscle_mass).toFixed(2) }} Kg
          </template>

          <template #item-cell_age="item">
            {{ parseFloat(item.cell_age).toFixed(2) }} %
          </template>

          <template #item-fat="item">
            {{ parseFloat(item.fat).toFixed(2) }} 
          </template>

          <template #item-operation="item">
            <VBtn
              v-if="can('member-progress-edit')"
              :to="{ name: 'member-progress-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Edit
            </VBtn>
            <VBtn
              v-if="can('member-progress-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteMemberProgress(item)"
            >
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
