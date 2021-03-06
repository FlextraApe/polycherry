import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PolyCherry',
  description:
    'PolyCherry - Best DEFi',
  image: 'https://PolyCherry.com/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('PolyCherry')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('PolyCherry')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('PolyCherry')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('PolyCherry')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('PolyCherry')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('PolyCherry')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('PolyCherry')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('PolyCherry')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('PolyCherry')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('PolyCherry')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('PolyCherry')}`,
      }
    default:
      return null
  }
}
