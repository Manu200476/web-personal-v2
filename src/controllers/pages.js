const { filesInDirectory, filesContent, breadcrumbs } = require('../utils')

const pagesController = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)

  const pagesInDirectory = filesInDirectory('pages')
  const pages = filesContent('pages', pagesInDirectory)
  const singlePage = pages.find((page) => page.metadata.slug === req.params.slug)
  if (singlePage === undefined) return res.redirect('/error-404')
  return res.render('templates/basic-template', { ...singlePage, breadcrumbsArray })
}

const contactController = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)
  res.render('pages/contact', {
    breadcrumbsArray,
    metadata: {
      title: 'Contacto',
      metaDescription: '',
      index: 'noindex',
      follow: 'nofollow',
      title: 'Contacto',
      featuredImage: '/public/images/favicon.png',
    },
  })
}

module.exports = { pagesController, contactController }
