<script setup>
import { ref, onBeforeMount } from 'vue'
import { useGoalStore } from '@/stores/goal'
import { can } from '@/helpers/permissionHelper'

const headers = [
  {
    text: 'Nama',
    value: 'name',
  },
  {
    text: 'Description',
    value: 'description',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { goals, loading, success } = storeToRefs(useGoalStore())
const { fetchGoals, deleteGoal } = useGoalStore()

fetchGoals()

async function handleDeleteGoal(goal) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus Goal ini?')

  if (confirmed) {
    await deleteGoal(goal.id)
    fetchGoals()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'List Goal'
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
        List Goal
      </h2>

      <VBtn
        v-if="can('goal-create')"
        :to="{ name: 'goal-create' }"
        color="primary"
      >
        Tambah Goal
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Goal"
        placeholder="Cari Goal"
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
          <template #item-operation="item">
            <VBtn
              v-if="can('goal-edit')"
              :to="{ name: 'goal-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              v-if="can('goal-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteGoal(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>