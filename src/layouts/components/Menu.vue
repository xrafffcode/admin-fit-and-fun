<script setup>
import { useAuthStore } from '@/stores/auth'

import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

const { user, checkAuth } = useAuthStore()

checkAuth()

const is = roles => {
  const userRole = user?.roles[0].name

  return roles.includes(userRole)
}
</script>

<template>
  <VerticalNavLink
    v-if="is(['admin', 'checker', 'gas-operator', 'technical-admin'])"
    :item="{
      title: 'Dashboard',
      icon: 'bx-home',
      to: '/admin/dashboard',
    }"
  />
  
  <VerticalNavLink
    v-if="is(['admin'])"
    :item="{
      title: 'Dashboard Ews',
      icon: 'bx-chart',
      to: '/admin/dashboard-ews',
    }"
  />

  <VerticalNavLink
    v-if="is(['admin'])"
    :item="{
      title: 'Master Data',
      icon: 'bx-data',
      children: [
        {
          title: 'Penerima Notifikasi',
          to: '/admin/notification-recepient',
        },
        {
          title: 'EWS Device',
          to: '/admin/ews-device',
        },
        {
          title: 'Pelanggan',
          to: '/admin/client',
        },
        {
          title: 'Vendor',
          to: '/admin/vendor',
        },
        {
          title: 'Material',
          to: '/admin/material',
        },
        {
          title: 'POS',
          to: '/admin/station',
        },
        {
          title: 'Proyek',
          to: '/admin/project',
        },
      ],
    }"
  />

  <VerticalNavLink
    v-if="is(['checker'])"
    :item="{
      title: 'Material Movement',
      icon: 'bx-transfer',
      to: '/checker/material-movement/create',
    }"
  />

  <VerticalNavLink
    v-if="is(['gas-operator'])"
    :item="{
      title: 'Catat BBM Truk',
      icon: 'bx-gas-pump',
      to: '/gas-operator/fuel-log-truck/create',
    }"
  />

  <VerticalNavLink
    v-if="is(['gas-operator'])"
    :item="{
      title: 'Catat BBM Alat Berat',
      icon: 'bx-gas-pump',
      to: '/gas-operator/fuel-log-heavy-vehicle/create',
    }"
  />

  <VerticalNavLink
    v-if="is(['admin'])"
    :item="{
      title: 'Manajemen Kendaraan',
      icon: 'bx-car',
      children: [
        {
          title: 'Truk',
          to: '/admin/truck',
        },
        {
          title: 'Alat Berat',
          to: '/admin/heavy-vehicle',
        },
        {
          title: 'Pengisian Bahan Bakar',
          to: '/admin/fuel-log',
        },
        {
          title: 'Penyewaan Kendaraan',
          to: '/admin/vehicle-rental-record',
        },
      ],
    }"
  />

  <VerticalNavLink
    v-if="is(['admin'])"
    :item="{
      title: 'Manajemen User',
      icon: 'bx-user',
      children: [
        {
          title: 'Admin Teknik',
          to: '/admin/technical-admin',
        },
        {
          title: 'Pemeriksa',
          to: '/admin/checker',
        },
        {
          title: 'Pengemudi',
          to: '/admin/driver',
        },
        {
          title: 'Operator BBM',
          to: '/admin/gas-operator',
        },
      ],
    }"
  />

  <VerticalNavLink
    v-if="is(['admin'])"
    :item="{
      title: 'Perpindahan Material',
      icon: 'bx-transfer',
      to: '/admin/material-movement',
    }"
  />

  <VerticalNavLink
    v-if="is(['technical-admin'])"
    :item="{
      title: 'Perpindahan Material',
      icon: 'bx-transfer',
      to: '/technical-admin/material-movement',
    }"
  />

  <VerticalNavLink
    v-if="is(['admin'])"
    :item="{
      title: 'Kesalahan Input',
      icon: 'bx-data',
      children: [
        {
          title: 'Perpindahan Material',
          to: '/admin/material-movement-error-log',
        },

        {
          title: 'Pengisian Bahan Bakar',
          to: '/admin/fuel-log-error-log',
        },
      ],
    }"
  />
</template>
