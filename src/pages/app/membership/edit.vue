<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { useMembershipStore } from '@/stores/membership'
import { useMemberStore } from '@/stores/member'

const route = useRoute()

const { loading, error } = storeToRefs(useMembershipStore())
const { fetchMembership, updateMembership } = useMembershipStore()

const { members } = storeToRefs(useMemberStore())
const { fetchMembers, loading: loadingMembers } = useMemberStore()

const membershipId = route.params.id

const membership = ref({
  id: membershipId,
  member_id: '',
  type: '',
  remaining_sessions: '',
})

const fetchMembershipData = async () => {
  try {
    const data = await fetchMembership(membershipId)

    membership.value = {
      id: data.id,
      member_id: data.member.id,
      type: data.type,
      remaining_sessions: data.remaining_sessions,
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Edit Membership'
  fetchMembershipData()
  fetchMembers()
})

const handleSubmit = () => {
  updateMembership(membership.value)
}

const handleReset = () => {
  fetchMembershipData()
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Membership
      </h2>

      <VBtn
        :to="{ name: 'memberships' }"
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
              md="12"
            >
              <VAutocomplete
                v-model="membership.member_id"
                :items="members"
                label="Select Member"
                item-title="name"
                item-value="id"
                :error-messages="error && error.member_id ? [error.member_id] : []"
                :loading="loadingMembers"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="membership.type"
                label="Type"
                placeholder="Type"
                :error-messages="error && error.type ? [error.type] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="membership.remaining_sessions"
                label="Remaining Sessions"
                placeholder="Sessions"
                :error-messages="error && error.remaining_sessions ? [error.remaining_sessions] : []"
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
