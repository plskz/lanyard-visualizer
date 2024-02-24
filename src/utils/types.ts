export interface ConnectedAccount {
  type: string
  id: string
  name: string
  href: string
  metadata?: Record<string, string>
  verified: boolean
}
