const error404 = (req, res) => {
  res.status(404).render('errors/404', {
    metadata: {
      title: 'Error 404',
      metaDescription: '',
      index: 'noindex',
      follow: 'nofollow',
      featuredImage: '/public/images/favicon.png',
    },
  })
}

const error500 = (req, res) => {
  res.status(500).render('errors/500', {
    metadata: {
      metaDescription: '',
      index: 'noindex',
      title: 'Error 500',
      follow: 'nofollow',
      featuredImage: '/public/images/favicon.png',
    },
  })
}

module.exports = { error404, error500 }
