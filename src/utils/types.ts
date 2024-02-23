export interface User {
  id: string
  username: string
  global_name?: string
  avatar: string
  avatar_decoration_data?: string
  discriminator: string
  public_flags: number
  banner?: string
  banner_color?: string
  accent_color?: string
  bio?: string
  cached?: boolean
}

export interface UserProfile {
  bio: string
  accent_color: number
  banner: string
  theme_colors: number[]
}

export interface Profile {
  user: User
  user_profile: UserProfile
  legacy_username?: string
  connected_accounts: ConnectedAccount[]
  premium_type: number
  premium_since: string
  premium_guild_since: string
  cached?: boolean
}

export interface ConnectedAccount {
  type: string
  id: string
  name: string
  href: string
  metadata?: Record<string, string>
  verified: boolean
}
