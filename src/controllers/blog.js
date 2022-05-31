const { filesInDirectory, filesMetadata, pagination, filesContent, breadcrumbs } = require('../utils')

const indexBlog = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)

  const page = req.query.page || 1

  const postsInDirectory = filesInDirectory('posts')
  const posts = filesMetadata('posts', postsInDirectory)
  const postsOrderById = posts.sort()
  const { chunkFiles, totalPages, nextPage, previousPage } = pagination(postsOrderById, 12, page)

  return res.render('templates/blog-template', {
    chunkFiles,
    totalPages,
    nextPage,
    previousPage,
    breadcrumbsArray,
    actualPage: page,
    metadata: {
      metaDescription: 'En este blog voy a hablar sobre SEO, Desarrollo, programacion... espero que puedas aprender auqnue solo sea un poquito de lo poco que se',
      index: page > 1 ? 'noindex' : 'index',
      follow: 'follow',
      title: 'Blog Sobre SEO | Desarrollo | Programacion - ManuelMartin',
      featuredImage: '/public/images/favicon.png',
    },
  })
}

const singlePost = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)

  const postsInDirectory = filesInDirectory('posts')
  const posts = filesContent('posts', postsInDirectory)

  const uniquePost = posts.find((post) => post.metadata.slug === req.params.slug)

  if (uniquePost === undefined) return res.redirect('/error-404')

  return res.render('templates/post-template', { ...uniquePost, breadcrumbsArray })
}

module.exports = { indexBlog, singlePost }
