<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Example
      </h2>

      <VBtn
        :to="{ name: 'admin-example' }"
        color="primary"
      >
        Kembali
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
              <VTextField
                v-model="code"
                label="Kode"
                placeholder="Kode Example"
                :error-messages="error && error.code ? [error.code] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="name"
                label="Nama"
                placeholder="Nama Example"
                :error-messages="error && error.name ? [error.name] : []"
                :disabled="loading"
                :loading="loading"
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
                Simpan
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

<script setup>
import { useExampleStore } from '@/stores/example'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useExampleStore())
const { fetchExample, updateExample } = useExampleStore()

const exampleId = route.params.id

const code = ref('')
const name = ref('')


const fetchExampleData = async () => {
  try {
    const example = await fetchExample(exampleId)

    code.value = example.code
    name.value = example.name
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchExampleData()

  document.title = 'Edit Example'
})

const handleSubmit = () => {

  updateExample({
    id: exampleId,
    code: code.value,
    name: name.value,
  })
}

const handleReset = () => {
  fetchExampleData()
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
