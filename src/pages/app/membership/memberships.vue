<script setup>
import { ref, onBeforeMount } from 'vue'
import { useMembershipStore } from '@/stores/membership'
import { can } from '@/helpers/permissionHelper'

const headers = [
  {
    text: 'Member',
    value: 'member.name',
    width: 300,
  },
  {
    text: 'Type',
    value: 'type',
  },
  {
    text: 'Remaining Sessions',
    value: 'remaining_sessions',
  },
  {
    text: 'Aksi',
    value: 'operation',
    width: 300,
  },
]

const { memberships, loading, success } = storeToRefs(useMembershipStore())
const { fetchMemberships, deleteMembership } = useMembershipStore()

fetchMemberships()

async function handleDeleteMembership(membership) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus membership ini?')

  if (confirmed) {
    await deleteMembership(membership.id)
    fetchMemberships()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'List Membership'
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
        List Membership
      </h2>

      <VBtn
        v-if="can('membership-create')"
        :to="{ name: 'membership-create' }"
        color="primary"
      >
        Tambah Membership
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Membership"
        placeholder="Cari Membership"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="memberships"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-operation="item">
            <VBtn
              v-if="can('membership-edit')"
              :to="{ name: 'membership-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              v-if="can('membership-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteMembership(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
