
<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import { useShakeStore } from '@/stores/shake'
import { handleFileChange } from '@/helpers/fileHelper'

const route = useRoute()

const { loading, error } = storeToRefs(useShakeStore())
const { fetchShake, updateShake } = useShakeStore()

const shakeId = route.params.id

const shake = ref({
  id: shakeId,
  image: null,
  image_name: '',
  image_url: '',
  name: '',
  description: '',
})

const fetchShakeData = async () => {
  try {
    const data = await fetchShake(shakeId)

    shake.value = data
    shake.value.image = null
    shake.value.image_name = ''
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Edit Shake'
  fetchShakeData()
})

const handleSubmit = () => {
  updateShake(shake.value)
}

const onFileChange = e => {
  handleFileChange(e, shake.value, 'image')

  shake.value.image_url = URL.createObjectURL(e.target.files[0])
}

const handleReset = () => {
  fetchshakeData()
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Shake
      </h2>

      <VBtn
        :to="{ name: 'shakes' }"
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
              <VImg
                v-if="shake.image_url"
                :src="shake.image_url"
                width="100"
                height="100"
                alt="Shake Image"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VFileInput
                v-model="shake.image_name"
                label="Image"
                placeholder="Choose Image"
                :error-messages="error && error.image ? [error.image] : []"
                @change="onFileChange"
              />
            </VCol>
            
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="shake.name"
                label="Name"
                placeholder="Shake Name"
                :error-messages="error && error.name ? [error.name] : []"
              />
            </VCol>

            <VCol cols="12">
              <VTextarea
                v-model="shake.description"
                label="Description"
                placeholder="Shake Description"
                :error-messages="error && error.description ? [error.description] : []"
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
