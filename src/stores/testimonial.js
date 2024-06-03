import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useTestimonialStore = defineStore({
  id: 'testimonial',
  state: () => ({
    testimonials: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchTestimonials() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/testimonial')

        this.testimonials = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchTestimonial(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/testimonial/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async createTestimonial(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/testimonial', payload)

        this.success = response.data.message

        router.push({ name: 'testimonials' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async updateTestimonial(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post(`/testimonial/${payload.id}`, {
          ...payload,
          _method: 'PUT',
        })

        this.success = response.data.message

        router.push({ name: 'testimonials' })
      } catch (error) {
        console.error(error)
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
    async deleteTestimonial(id) {
      try {
        this.loading = true

        const response = await axiosInstance.delete(`/testimonial/${id}`)

        this.success = response.data.message
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
