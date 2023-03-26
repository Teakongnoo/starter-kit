const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'bx:home-circle'
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'bx:envelope'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'bx:shield'
    },
    {
      path: '/register',
      title: 'Register',
      icon: 'bx:form'
    },
    {
      title: 'Calendar',
      path: '/apps/calendar',
      icon: 'mdi:calendar-blank-outline'
    },
    {
      title: 'Login',
      path: '/login',
      icon: 'mdi:calendar-blank-outline'
    },
    {
      title: 'FORM',
      path: '/forms',
      icon: 'mdi:calendar-blank-outline'
    }
  ]
}

export default navigation
