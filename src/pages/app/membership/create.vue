<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref, watch } from 'vue'
import { useMembershipStore } from '@/stores/membership'
import { useMemberStore } from '@/stores/member'

const { loading, error } = storeToRefs(useMembershipStore())
const { createMembership } = useMembershipStore()

const { members } = storeToRefs(useMemberStore())
const { fetchMembers } = useMemberStore()

const membership = ref({
  member_id: '',
  type: '',
  remaining_sessions: '',
})

const handleReset = () => {
  membership.value = {
    member_id: '',
    type: '',
    remaining_sessions: '',
  }
}

const handleSubmit = () => {  
  createMembership(membership.value)
}

watch(() => membership.value.type, val => {
  if (val) {
    membership.value.remaining_sessions = val
  }
})

onBeforeMount(() => {
  document.title = 'Add Membership'
  fetchMembers()
  handleReset()
  error.value = null
})
</script>

<template>
  <VRow>
    <VAlert 
      v-if="error"
      type="warning"
      dismissible
      class="mb-4"
    >
      {{ error }}
      
      <template #close>
        <VIcon
          @click="error = null"
        >
          $close
        </VIcon>
      </template>
    </VAlert>

    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Add Membership
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
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VAutocomplete
                v-model="membership.type"
                :items="['10', '30']"
                :item-title="item => item"
                label="Select Type"
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
                placeholder="Remaining Sessions"
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
