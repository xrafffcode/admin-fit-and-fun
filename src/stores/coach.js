import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useCoachStore = defineStore({
  id: 'coach',
  state: () => ({
    coachs: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchCoachs() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/coach')

        this.coachs = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchCoach(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/coach/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createCoach(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/coach', payload)

        this.success = response.data.message

        router.push({ name: 'coachs' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateCoach(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.put(`/coach/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message

        router.push({ name: 'coachs' })
      } catch (error) {
        console.error(error)
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteCoach(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/coach/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
