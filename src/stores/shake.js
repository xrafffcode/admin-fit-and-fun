import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useShakeStore = defineStore({
  id: 'shake',
  state: () => ({
    shakes: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchShakes() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/shake')

        this.shakes = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchShake(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/shake/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createShake(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/shake', payload)

        this.success = response.data.message

        router.push({ name: 'shakes' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateShake(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/shake/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message

        router.push({ name: 'shakes' })
      } catch (error) {
        console.error(error)
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteShake(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/shake/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async getChartDataStatisticsShakesOut() {
      try {
        this.loading = true
  
        const response = await axiosInstance.get('/get-chart-data-statistics-shakes-out')
  
        return response.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
