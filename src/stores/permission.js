import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const usePermissionStore = defineStore({
  id: 'permission',
  state: () => ({
    permissions: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchPermissions() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/permission')

        this.permissions = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchPermission(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/permission/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createPermission(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/permission', payload)

        this.success = response.data.message

        router.push({ name: 'permissions' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updatePermission(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/permission/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message

        router.push({ name: 'permissions' })
      } catch (error) {
        console.error(error)
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deletePermission(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/permission/${id}`)

        this.success = response.data.message

        this.fetchPermissions()
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
