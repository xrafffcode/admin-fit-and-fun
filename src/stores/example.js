import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'


export const useExampleStore = defineStore({
  id: 'example',
  state: () => ({
    examples: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchExamples() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/examples')

        this.examples = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchExample(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/example/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createExample(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/example', payload)

        this.success = response.data.message

        router.push({ name: 'admin-example' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateExample(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/example/${payload.id}`, payload)

        this.success = response.data.message

        router.push({ name: 'admin-example' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteExample(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/example/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
