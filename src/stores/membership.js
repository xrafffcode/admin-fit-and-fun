import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useMembershipStore = defineStore({
  id: 'membership',
  state: () => ({
    memberships: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchMemberships() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/membership')

        this.memberships = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchMembership(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/membership/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createMembership(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/membership', payload)

        this.success = response.data.message

        router.push({ name: 'memberships' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateMembership(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/membership/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message

        router.push({ name: 'memberships' })
      } catch (error) {
        console.error(error)
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteMembership(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/membership/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
