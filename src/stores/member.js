import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useMemberStore = defineStore({
  id: 'member',
  state: () => ({
    coachs: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchMembers() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/member')

        this.members = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchMember(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/member/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createMember(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/member', payload)

        this.success = response.data.message

        router.push({ name: 'members' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateMember(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.put(`/member/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message

        router.push({ name: 'members' })
      } catch (error) {
        console.error(error)
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteMember(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/member/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
