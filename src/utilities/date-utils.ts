import { DateTime } from 'luxon'

export const isValidDate = (dateString: string) => {
  const date = DateTime.fromISO(dateString)
  return date.isValid
}

export const toLocale = (dateString: string) => {
  const date = DateTime.fromISO(dateString)

  return date.isValid ? date.toLocaleString() : 'Invalid Date'
}
