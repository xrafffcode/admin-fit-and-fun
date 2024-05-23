import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useAttendanceStore = defineStore({
  id: 'attendance',
  state: () => ({
    attendances: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchAttendances() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/attendance')

        this.attendances = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchAttendance(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/attendance/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createAttendance(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/attendance', payload)

        this.success = response.data.message

        router.push({ name: 'attendances' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateAttendance(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/attendance/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message

        router.push({ name: 'attendances' })
      } catch (error) {
        console.error(error)
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteAttendance(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/attendance/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
