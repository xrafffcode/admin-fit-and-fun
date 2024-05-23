<script setup>
import { ref, onBeforeMount } from 'vue'
import { useMemberStore } from '@/stores/member'
import { can } from '@/helpers/permissionHelper'

const headers = [
  {
    text: 'Nama',
    value: 'name',
  },
  {
    text: 'Phone Number',
    value: 'phone_number',
  },
  {
    text: 'Weight',
    value: 'weight',
  },
  {
    text: 'Height',
    value: 'height',
  },
  {
    text: 'Coach',
    value: 'coach.name',
  },
  {
    text: 'Goal',
    value: 'goal.name',
    width: 300,
  },
  {
    text: 'Aksi',
    value: 'operation',
    sortable: false,
  },
]

const { members, loading, success } = storeToRefs(useMemberStore())
const { fetchMembers, deleteMember } = useMemberStore()

fetchMembers()

async function handleDeleteMember(member) {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus member ini?')

  if (confirmed) {
    await deleteMember(member.id)
    fetchMembers()
  }
}

const search = ref('')

onBeforeMount(() => {
  document.title = 'Members'
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
        List Members
      </h2>

      <VBtn
        v-if="can('member-create')"
        :to="{ name: 'member-create' }"
        color="primary"
      >
        Tambah Member
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="search"
        label="Cari Member"
        placeholder="Cari Member"
        clearable
        :loading="loading"
        variant="solo"
      />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable
          :headers="headers"
          :items="members"
          :loading="loading"
          :search-value="search"
          buttons-pagination
          show-index
          class="data-table"
        >
          <template #item-operation="item">
            <VBtn
              v-if="can('member-edit')"
              :to="{ name: 'member-edit', params: { id: item.id } }"
              color="primary"
              size="small"
              class="m-5"
            >
              Ubah
            </VBtn>
            <VBtn
              v-if="can('member-delete')"
              color="error"
              size="small"
              class="m-5"
              @click="() => handleDeleteMember(item)"
            >
              Hapus
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
