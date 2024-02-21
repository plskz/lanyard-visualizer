export type LanyardAPI = {
  data: Data
  success: boolean
  error?: Error
}

type Data = {
  kv: Kv
  spotify: Spotify
  discord_user: DiscordUser
  activities: Activity[]
  discord_status: string
  active_on_discord_web: boolean
  active_on_discord_desktop: boolean
  active_on_discord_mobile: boolean
  listening_to_spotify: boolean
}

type Activity = {
  flags?: number
  id: string
  name: string
  type: number
  state?: string
  session_id?: string
  details?: string
  timestamps: Timestamps
  assets: Assets
  sync_id?: string
  created_at: number
  party?: Party
  application_id?: string
}

type Assets = {
  large_image: string
  large_text: string
  small_image?: string
  small_text?: string
}

type Party = {
  id: string
}

type Timestamps = {
  start: number
  end?: number
}

type DiscordUser = {
  id: string
  username: string
  avatar: string
  discriminator: string
  bot: boolean
  global_name: string
  avatar_decoration_data: null
  display_name: string
  public_flags: number
}

type Kv = {
  github: string
  isWatching: string
}

type Spotify = {
  timestamps: Timestamps
  album: string
  album_art_url: string
  artist: string
  song: string
  track_id: string
}

type Error = {
  code: string
  message: string
}
