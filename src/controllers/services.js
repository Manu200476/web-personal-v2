const { breadcrumbs } = require('../utils')

const seoConsulting = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)

  return res.render('services/seo-consulting', {
    breadcrumbsArray,
    metadata: {
      metaDescription: 'Bienvenido a mi portafolio, aqui voy a ir subiendo todos los proyectos que vaya haciendo tanto de programacion como de seo y lo que surja',
      index: 'index',
      title: 'Portafolio de SEO y Web Dev - ManuelMartin',
      follow: 'follow',
      featuredImage: '/public/images/favicon.png',
    }
  })
}

const webDesign = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)

  return res.render('services/web-design', {
    breadcrumbsArray,
    metadata: {
      metaDescription: 'Bienvenido a mi portafolio, aqui voy a ir subiendo todos los proyectos que vaya haciendo tanto de programacion como de seo y lo que surja',
      index: 'index',
      title: 'Portafolio de SEO y Web Dev - ManuelMartin',
      follow: 'follow',
      featuredImage: '/public/images/favicon.png',
    }
  })
}

const seoAudit = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)

  return res.render('services/seo-audit', {
    breadcrumbsArray,
    metadata: {
      metaDescription: 'Bienvenido a mi portafolio, aqui voy a ir subiendo todos los proyectos que vaya haciendo tanto de programacion como de seo y lo que surja',
      index: 'index',
      title: 'Portafolio de SEO y Web Dev - ManuelMartin',
      follow: 'follow',
      featuredImage: '/public/images/favicon.png',
    }
  })
}

const seoAdvisory = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)

  return res.render('services/seo-advisory', {
    breadcrumbsArray,
    metadata: {
      metaDescription: 'Bienvenido a mi portafolio, aqui voy a ir subiendo todos los proyectos que vaya haciendo tanto de programacion como de seo y lo que surja',
      index: 'index',
      title: 'Portafolio de SEO y Web Dev - ManuelMartin',
      follow: 'follow',
      featuredImage: '/public/images/favicon.png',
    }
  })
}

const coding = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)

  return res.render('services/coding', {
    breadcrumbsArray,
    metadata: {
      metaDescription: 'Bienvenido a mi portafolio, aqui voy a ir subiendo todos los proyectos que vaya haciendo tanto de programacion como de seo y lo que surja',
      index: 'index',
      title: 'Portafolio de SEO y Web Dev - ManuelMartin',
      follow: 'follow',
      featuredImage: '/public/images/favicon.png',
    }
  })
}

const webManteinance = (req, res) => {
  const breadcrumbsArray = breadcrumbs(req.path)

  return res.render('services/web-manteinance', {
    breadcrumbsArray,
    metadata: {
      metaDescription: 'Bienvenido a mi portafolio, aqui voy a ir subiendo todos los proyectos que vaya haciendo tanto de programacion como de seo y lo que surja',
      index: 'index',
      title: 'Portafolio de SEO y Web Dev - ManuelMartin',
      follow: 'follow',
      featuredImage: '/public/images/favicon.png',
    }
  })
}

module.exports = {
  seoConsulting,
  webDesign,
  seoAudit,
  seoAdvisory,
  coding,
  webManteinance
}
