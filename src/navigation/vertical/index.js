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
      icon: 'bx:envelope'
    }
  ]
}

export default navigation
