const { filesInDirectory, filesMetadata, breadcrumbs } = require('../utils')
const { opinions } = require('../utils/opinions')
const { services } = require('../utils/services')

const home = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)

  const postsInDirectory = filesInDirectory('posts')
  const posts = filesMetadata('posts', postsInDirectory)
  const projectsInDirectory = filesInDirectory('portafolio')
  const projects = filesMetadata('portafolio', projectsInDirectory)

  return res.render('pages/index', {
    posts,
    projects,
    opinions,
    services,
    breadcrumbsArray,
    metadata: {
      metaDescription: 'Bienvenido a mi pagina web, aqui vas a encontrar mis proyectos personales, algun que otro post sobre programacion,seo....',
      index: 'index',
      follow: 'follow',
      title: 'Manuel Martin - Consultor SEO y Web Developer',
      featuredImage: '/public/images/favicon.png',
    },
  })
}

module.exports = { home }
