import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useGoalStore = defineStore({
  id: 'goal',
  state: () => ({
    goals: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchGoals() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/goal')

        this.goals = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchGoal(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/goal/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createGoal(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/goal', payload)

        this.success = response.data.message

        router.push({ name: 'goals' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateGoal(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/goal/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message

        router.push({ name: 'goals' })
      } catch (error) {
        console.error(error)
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteGoal(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/goal/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
