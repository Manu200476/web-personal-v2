const { filesMetadata, filesInDirectory, pagination, filesContent, breadcrumbs } = require('../utils')

const indexPortafolio = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)

  const page = req.query.page || 1

  const projectsInDirectory = filesInDirectory('portafolio')
  const projects = filesMetadata('portafolio', projectsInDirectory)
  const projectsOrderById = projects.sort()
  const { chunkFiles, totalPages, nextPage, previousPage } = pagination(projectsOrderById, 12, page)

  return res.render('templates/portafolio-template', {
    chunkFiles,
    totalPages,
    nextPage,
    previousPage,
    breadcrumbsArray,
    actualPage: page,
    metadata: {
      metaDescription: 'Bienvenido a mi portafolio, aqui voy a ir subiendo todos los proyectos que vaya haciendo tanto de programacion como de seo y lo que surja',
      index: page > 1 ? 'noindex' : 'index',
      title: 'Portafolio de SEO y Web Dev - ManuelMartin',
      follow: 'follow',
      featuredImage: '/public/images/favicon.png',
    },
  })
}

const singleProject = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)

  const projectsInDirectory = filesInDirectory('portafolio')
  const projects = filesContent('portafolio', projectsInDirectory)
  const project = projects.find((post) => post.metadata.slug === req.params.slug)

  if (project === undefined) return res.redirect('/error-404')

  return res.render('templates/project-template', {
    ...project,
    breadcrumbsArray,
  })
}

module.exports = { indexPortafolio, singleProject }
