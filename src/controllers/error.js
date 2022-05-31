const error404 = (req, res) => {
  res.status(404).render('errors/404', {
    metadata: {
      metaDescription: 'vrvr',
      index: 'noindex',
      follow: 'follow',
      featuredImage: '/public/images/favicon.png',
    },
  })
}

const error500 = (req, res) => {
  res.status(500).render('errors/500', {
    metadata: {
      metaDescription: 'vrvr',
      index: 'noindex',
      follow: 'follow',
      featuredImage: '/public/images/favicon.png',
    },
  })
}

module.exports = { error404, error500 }
