import { axiosInstance } from '@/plugins/axios'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useTrialApplicantStore = defineStore({
  id: 'trial-applicant',
  state: () => ({
    trialApplicants: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchTrialApplicants() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/trial-applicant')

        this.trialApplicants = response.data.data
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createTrialApplicant(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/register/trial', payload)

        console.log(response)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteTrialApplicant(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/trial-applicant/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async absentTrialApplicant(id) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/trial-applicant/${id}/absent`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    }
  },
})
