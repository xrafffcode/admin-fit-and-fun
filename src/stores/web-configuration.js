import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useWebConfigurationStore = defineStore({
  id: 'web-configuration',
  state: () => ({
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchWebConfiguration() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/web-configuration')

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },

    async updateWebConfiguration(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/web-configuration`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
