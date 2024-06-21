<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { can } from '@/helpers/permissionHelper'
import { useAdminStore } from '@/stores/admin'
import { useCoachStore } from '@/stores/coach'
import { useGoalStore } from '@/stores/goal'
import { useMemberStore } from '@/stores/member'
import { useProgramStore } from '@/stores/program'
import { useShakeStore } from '@/stores/shake'
import { storeToRefs } from 'pinia'

const { user } = useAuthStore()

const { admins } = storeToRefs(useAdminStore())
const { fetchAdmins } = useAdminStore()

const { coaches } = storeToRefs(useCoachStore())
const { fetchCoaches } = useCoachStore()

const { goals } = storeToRefs(useGoalStore())
const { fetchGoals } = useGoalStore()

const { members } = storeToRefs(useMemberStore())
const { fetchMembers, getChartDataStatisticsMemberGroupByCoach } = useMemberStore()

const { programs } = storeToRefs(useProgramStore())
const { fetchPrograms } = useProgramStore()

const { getChartDataStatisticsShakesOut } = useShakeStore()

fetchAdmins()
fetchCoaches()
fetchGoals()
fetchMembers()
fetchPrograms()

const seriesChartDataStatisticsMemberGroupByCoach = ref([])
const chartOptionsChartDataStatisticsMemberGroupByCoach = ref({})

const seriesChartDataStatisticsShakesOut = ref([])
const chartOptionsChartDataStatisticsShakesOut = ref({})

const fetchChartData = async () => {
  const data = await getChartDataStatisticsMemberGroupByCoach()

  chartOptionsChartDataStatisticsMemberGroupByCoach.value = data.options
  seriesChartDataStatisticsMemberGroupByCoach.value = data.series

  const data2 = await getChartDataStatisticsShakesOut()

  chartOptionsChartDataStatisticsShakesOut.value = data2.options
  seriesChartDataStatisticsShakesOut.value = data2.series
}

fetchChartData()

onBeforeMount(() => {
  document.title = 'Dashboard'
})
</script>

<template>
  <VRow>
    <VCol cols="12">
      <h1 class="display-4">
        Hello Welcome Back, {{ user?.profile?.name }}
      </h1>
    </VCol>
  </VRow>

  <VRow v-if="can('dashboard-owner')">
    <VCol
      cols="12"
      md="3"
    >
      <VCard>
        <VCardTitle>
          Total Exercise
        </VCardTitle>
        <VCardText>
          {{ programs.length }}
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="3"
    >
      <VCard>
        <VCardTitle>
          Total Coach
        </VCardTitle>
        <VCardText>
          {{ coaches.length }}
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="3"
    >
      <VCard>
        <VCardTitle>
          Total Program
        </VCardTitle>
        <VCardText>
          {{ goals.length }}
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="3"
    >
      <VCard>
        <VCardTitle>
          Total Admin
        </VCardTitle>
        <VCardText>
          {{ admins.length }}
        </VCardText>
      </VCard>
    </VCol>


    <VCol
      cols="12"
      md="12"
    >
      <VCard>
        <VCardTitle>
          Statistics Members By Coach
        </VCardTitle>
        <VCardText>
          <apexchart
            type="bar"
            height="350"
            :options="chartOptionsChartDataStatisticsMemberGroupByCoach"
            :series="seriesChartDataStatisticsMemberGroupByCoach"
          />
        </VCardText>
      </VCard>
    </VCol>


    <VCol
      cols="12"
      md="12"
    >
      <VCard>
        <VCardTitle>
          Statistics Shakes Out
        </VCardTitle>
        <VCardText>
          <apexchart
            type="line"
            height="350"
            :options="chartOptionsChartDataStatisticsShakesOut"
            :series="seriesChartDataStatisticsShakesOut"
          />
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VRow v-if="can('dashboard-coach')">
    <VCol
      cols="12"
      md="3"
    >
      <VCard>
        <VCardTitle>
          Total Members
        </VCardTitle>
        <VCardText>
          {{ members.length }}
        </VCardText>
      </VCard>
    </VCol>

   
    <VCol
      cols="12"
      md="3"
    >
      <VCard>
        <VCardTitle>
          Total Exercises
        </VCardTitle>
        <VCardText>
          {{ programs.length }}
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
