'use server'

import { unstable_noStore as noStore } from 'next/cache'
import { ConnectedAccount } from './types'

// TODO: fetch activities
// export const getLanyard_API = async (id: string) => {
//   const data = await fetch(`https://api.lanyard.rest/v1/users/${id}`)
//   const res = await data.json()

//   if (!res.success) return new Error('User not found')

//   return res
// }

export const getLanyard_dcdn = async (id: string) => {
  noStore()

  const data = await fetch(`https://dcdn.dstn.to/profile/${id}`)
  const res = await data.json()

  if (!res) return new Error('User not found')

  return res
}

// ---- Utils ----

/** add link per social */
export const editSocials = (
  socials: ConnectedAccount[]
): ConnectedAccount[] => {
  const generateHref = ({ type, name, id }: ConnectedAccount): string => {
    switch (type) {
      case 'paypal':
        return `https://www.paypal.me/${name}`
      case 'reddit':
        return `https://reddit.com/u/${name}`
      case 'steam':
        return `https://steamcommunity.com/id/${name}`
      case 'tiktok':
        return `https://www.tiktok.com/@${name}`
      case 'twitter':
        return `https://twitter.com/${name}`
      case 'ebay':
        return `https://www.ebay.com/usr/${name}`
      case 'crunchyroll':
        return `https://www.crunchyroll.com/user/${name}`
      case 'playstationnetwork':
        return `https://my.playstation.com/profile/${name}`
      case 'xbox':
        return `https://account.xbox.com/en-us/profile?gamertag=${name}`
      case 'battle.net':
        return `https://battle.net/${name}`
      case 'domain':
        return `https://${name}`
      case 'epicgames':
        return `https://www.epicgames.com/account/profile`
      case 'instagram':
        return `https://instagram.com/${name}`
      case 'leagueoflegends':
        return `https://na.op.gg/summoner/userName=${name}`
      case 'riot games':
        return `https://na.leagueoflegends.com/en-us/summoner/${id}`
      case 'youtube':
        return `https://www.youtube.com/channel/${id}`
      case 'spotify':
        return `https://open.spotify.com/user/${id}`
      case 'facebook':
        return `https://www.facebook.com/${id}`
      case 'github':
        return `https://github.com/${name}`
      case 'twitch':
        return `https://www.twitch.tv/${name}`
      default:
        return `https://google.com/search?q=${name}`
    }
  }

  socials.map((account: ConnectedAccount) => {
    account.href = generateHref(account)
    return account
  })

  return socials
}
