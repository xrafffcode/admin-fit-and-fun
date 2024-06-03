import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useTestimoniStore = defineStore({
  id: 'testimoni',
  state: () => ({
    testimonis: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchTestimonis() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/testimoni')

        this.testimonis = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchTestimoni(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/testimoni/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createTestimoni(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/testimoni', payload)

        this.success = response.data.message

        router.push({ name: 'testimonis' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateTestimoni(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/testimoni/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message

        router.push({ name: 'testimonis' })
      } catch (error) {
        console.error(error)
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteTestimoni(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/testimoni/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
