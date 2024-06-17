import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useMemberProgressStore = defineStore({
  id: 'member-progress',
  state: () => ({
    memberProgress: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchMemberProgress(params) {
      try {
        this.loading = true

        const response = await axiosInstance.get('/member-progress', { params })

        this.memberProgress = response.data.data
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },

    async fetchMemberProgres(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/member-progress/${id}`)

        return response.data.data 
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    
    async createMemberProgress(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/member-progress', payload)

        this.success = response.data.message

        router.push({ name: 'member-progress' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },

    async updateMemberProgress(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/member-progress/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message

        router.push({ name: 'member-progress' })
      } catch (error) {
        console.error(error)
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },

    async deleteMemberProgress(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/member-progress/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
