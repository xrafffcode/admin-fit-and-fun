import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useRoleStore = defineStore({
  id: 'role',
  state: () => ({
    roles: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchRoles() {
      try {
        this.loading = true
    
        const response = await axiosInstance.get('/role')
    
        this.roles = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchRole(id) {
      try {
        this.loading = true
    
        const response = await axiosInstance.get(`/role/${id}`)
    
        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createRole(payload) {
      try {
        this.loading = true
    
        const response = await axiosInstance.post('/role', payload)
    
        this.success = response.data.message
    
        router.push({ name: 'roles' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateRole(payload) {
      try {
        this.loading = true
    
        const response = await axiosInstance.put(`/role/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })
    
        this.success = response.data.message
    
        router.push({ name: 'roles' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteRole(id) {
      try {
        this.loading = true
    
        const response = await axiosInstance.delete(`/role/${id}`)
    
        this.success = response.data.message
    
        this.fetchRoles()
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
