import { isToday } from './index'

export const avatarText = value => {
  if (!value)
    return ''
  const nameArray = value.split(' ')
  
  return nameArray.map(word => word.charAt(0).toUpperCase()).join('')
}

// TODO: Try to implement this: https://twitter.com/fireship_dev/status/1565424801216311297
export const kFormatter = num => {
  const regex = /\B(?=(\d{3})+(?!\d))/g
  
  return Math.abs(num) > 9999 ? `${Math.sign(num) * +((Math.abs(num) / 1000).toFixed(1))}k` : Math.abs(num).toFixed(0).replace(regex, ',')
}

/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Intl.DateTimeFormatOptions} formatting Intl object to format with
 */


/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value)
  let formatting = { month: 'short', day: 'numeric' }
  if (toTimeForCurrentDay && isToday(date))
    formatting = { hour: 'numeric', minute: 'numeric' }
  
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

export const prefixWithPlus = value => value > 0 ? `+${value}` : value

export const toRupiah = value => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  })
  
  return formatter.format(value)
}


export const toNumeral = value => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'decimal',
    minimumFractionDigits: 0,
  })
  
  return formatter.format(value)
}

export const toPercentage = value => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'percent',
    minimumFractionDigits: 0,
  })
  
  return formatter.format(value)
}

export const formatDate = (value, 
  formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value)
    return value
  
  return new Intl.DateTimeFormat('id-ID', formatting).format(new Date(value))
}

export function formatDateTime(dateString) {
  const date = new Date(dateString)


  const day = date.getDate()
  const month = date.toLocaleString('id-ID', { month: 'long' })
  const year = date.getFullYear()
  const time = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })

  return `${day} ${month} ${year}, ${time}`
}

export function formatDateToISO(dateString) {
  return dateString.split('T')[0] + 'T' + dateString.split('T')[1].slice(0, 5)
}

