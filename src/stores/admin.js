import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useAdminStore = defineStore({
  id: 'admin',
  state: () => ({
    permissions: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchAdmins() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/admin')

        this.admin = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchAdmin(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/admin/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createAdmin(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/admin', payload)

        this.success = response.data.message

        router.push({ name: 'admins' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateAdmin(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.put(`/admin/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message

        router.push({ name: 'admins' })
      } catch (error) {
        console.error(error)
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteAdmin(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/admin/${id}`)

        this.success = response.data.message

      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
