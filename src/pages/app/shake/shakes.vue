
<script setup>
import { ref, onBeforeMount } from 'vue'
import { useShakeStore } from '@/stores/shake'
import { can } from '@/helpers/permissionHelper'

const headers = [
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  },
]

const { shakes, loading, success } = storeToRefs(useShakeStore())
const { fetchShakes, deleteShake } = useShakeStore()

fetchShakes()

async function handleDeleteShake(shake) {
  const confirmed = confirm('Delete this shake?')

  if (confirmed) {
    await deleteShake(shake.id)
    fetchShakes()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'Shakes'
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
        Shakes List
      </h2>

      <VBtn
        v-if="can('shake-create')"
        :to="{ name: 'shake-create' }"
        color="primary"
      >
        Add Shake
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Shake"
        placeholder="Cari Shake"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="shakes"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-operation="item">
            <VBtn
              v-if="can('shake-edit')"
              :to="{ name: 'shake-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Edit
            </VBtn>
            <VBtn
              v-if="can('shake-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteShake(item)"
            >
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
