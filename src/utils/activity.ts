export const stringFromType = (type: number) => {
  switch (type) {
    case 0:
      return 'Playing'
    case 1:
      return 'Streaming'
    case 2:
      return 'Listening to'
    case 3:
      return 'Watching'
    default:
      return ''
  }
}
export const getActivity = (activity: any) => {
  // remove the 'Playing' prefix
  // if (activity.type === 0) return activity.name

  return `${stringFromType(activity.type)} ${activity.name}`
}
