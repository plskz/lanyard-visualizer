'use server'

import { LanyardAPI } from './types'

export const getData = async (id: string) => {
  const data = await fetch(`https://api.lanyard.rest/v1/users/${id}`)
  const res: LanyardAPI = await data.json()

  if (!res.success) return new Error('User not found')

  return res
}
