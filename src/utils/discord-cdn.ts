import { Activity } from 'use-lanyard'

export const userProfileLink = (id: string) => `https://discord.com/users/${id}`

export const avatarUri = (id: string, avatarHash: string) => {
  if (!avatarHash) return '/default-avatar.png'

  // if hash starts with a_ it's animated
  if (avatarHash.startsWith('a_')) return `https://cdn.discordapp.com/avatars/${id}/${avatarHash}.gif?size=256`

  return `https://cdn.discordapp.com/avatars/${id}/${avatarHash}.png?size=256`
}

export const appAsset = (activity: Activity) => {
  const { application_id, assets, name } = activity

  // custom assets
  if (name === 'Figma') return 'https://i.imgur.com/gXxhZ4A.png'
  if (name === 'Blender') return 'https://i.imgur.com/aOBW69f.png'

  // @ts-ignore - temporary support for ps4 zzzz
  if (activity.platform === 'ps4') return `https://media.discordapp.net/${assets?.small_image.split(':')[1]}`

  // external discord asset thing
  const split = assets?.large_image.split(':') || []
  if (split.length > 1) return `https://media.discordapp.net/${split[1]}`

  // Used for the Discord Verified Games that don't have assets keys attached to them in Lanyard
  if (application_id && !assets) return `https://dcdn.dstn.to/app-icons/${application_id}.png?size=256`

  // default app asset
  if (!application_id && !assets) return '/default-appAsset.png'

  return `https://cdn.discordapp.com/app-assets/${application_id}/${assets!.large_image}.png?size=256`
}
