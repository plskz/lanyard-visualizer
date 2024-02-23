export const avatarUri = (id: string, avatarHash: string) => {
  if (!avatarHash) return '/default-avatar.png'

  return `https://cdn.discordapp.com/avatars/${id}/${avatarHash}.png?size=256`
}

export const userProfileLink = (id: string) => `https://discord.com/users/${id}`
