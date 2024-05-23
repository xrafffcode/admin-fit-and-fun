import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useProgramStore = defineStore({
  id: 'program',
  state: () => ({
    programs: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchPrograms() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/program')

        this.programs = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchProgram(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/program/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createProgram(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/program', payload)

        this.success = response.data.message

        router.push({ name: 'programs' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateProgram(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/program/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message

        router.push({ name: 'programs' })
      } catch (error) {
        console.error(error)
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteProgram(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/program/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
