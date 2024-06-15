<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useWebConfigurationStore } from '@/stores/web-configuration'
import { handleFileChange } from '@/helpers/fileHelper'


const { loading, error, success } = storeToRefs(useWebConfigurationStore())
const { fetchWebConfiguration, updateWebConfiguration } = useWebConfigurationStore()

const webConfiguration = ref({
  title: '',
  description: '',
  logo: null,
  logo_name: '',
  logo_url: '',
  schedule_image: null,
  schedule_image_name: '',
  schedule_image_url: '',
})

const fetchWebConfigurationData = async () => {
  try {
    const data = await fetchWebConfiguration()

    webConfiguration.value = {
      title: data.title,
      description: data.description,
      logo: null,
      logo_name: '',
      logo_url: data.logo_url,
      schedule_image: null,
      schedule_image_name: '',
      schedule_image_url: data.schedule_image_url,
    }
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(() => {
  document.title = 'Web Configuration'
  fetchWebConfigurationData()
})

const handleSubmit = () => {
  updateWebConfiguration(webConfiguration.value)
}

const onLogoChange = e => {
  handleFileChange(e, webConfiguration.value, 'logo')

  webConfiguration.value.logo_url = URL.createObjectURL(e.target.files[0])
}

const onScheduleImageChange = e => {
  handleFileChange(e, webConfiguration.value, 'schedule_image')

  webConfiguration.value.schedule_image_url = URL.createObjectURL(e.target.files[0])
}

const handleReset = () => {
  fetchWebConfigurationData()
}
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
    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol
              cols="12"
              md="12"
            >
              <VTextField
                v-model="webConfiguration.title"
                label="Title"
                placeholder="Title"
                :error-messages="error && error.title ? [error.title] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VTextarea
                v-model="webConfiguration.description"
                label="Description"
                placeholder="Description"
                :error-messages="error && error.description ? [error.description] : []"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VImg
                v-if="webConfiguration.logo_url"
                :src="webConfiguration.logo_url"
                width="100"
                height="auto"
                class="mb-4"
              />

              <VFileInput
                v-model="webConfiguration.logo"
                label="Logo"
                placeholder="Logo"
                :error-messages="error && error.logo ? [error.logo] : []"
                @change="onLogoChange"
              />
            </VCol>

            <VCol
              cols="12"
              md="12"
            >
              <VImg
                v-if="webConfiguration.schedule_image_url"
                :src="webConfiguration.schedule_image_url"
                width="100"
                height="auto"
                class="mb-4"
              />

              <VFileInput
                v-model="webConfiguration.schedule_image"
                label="Schedule Image"
                placeholder="Schedule Image"
                :error-messages="error && error.schedule_image ? [error.schedule_image] : []"
                @change="onScheduleImageChange"
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
