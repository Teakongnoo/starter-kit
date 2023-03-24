const navigation = () => [
  {
    title: 'Home',
    path: '/home',
    icon: 'bx:home-circle',
  },
  {
    title: 'Second Page',
    path: '/second-page',
    icon: 'bx:envelope',
  },
  {
    path: '/acl',
    action: 'read',
    subject: 'acl-page',
    title: 'Access Control',
    icon: 'bx:shield',
  },{
    title: 'Calendar',
    path: '/apps/calendar',
    icon: 'mdi:calendar-blank-outline'
  },
]

export default navigation
