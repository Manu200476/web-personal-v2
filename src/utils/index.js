const fs = require('fs')
const metadataParser = require('markdown-yaml-metadata-parser')
const marked = require('marked')

const mdFiles = (directoryName, dirname = __dirname) => `${dirname}/../../data/${directoryName}`

const breadcrumbs = (path) => {
  const breadcrumbsArray = []
  let breadcrumbsName = path.split('/')
  breadcrumbsName[0] = 'Home'
  breadcrumbsName = breadcrumbsName.map((item) => item.charAt(0).toUpperCase() + item.replace(/-/g, ' ').slice(1))

  for (let i = 0; i < breadcrumbsName.length; i += 1) {
    let link = ''
    if (i === 0) link = '/'
    if (i === 1) link = `/${path.split('/')[1]}`

    const breadcrumbObj = {
      name: breadcrumbsName[i],
      link,
      position: (i + 1) === breadcrumbsName.length ? 'last' : i,
    }
    breadcrumbsArray.push(breadcrumbObj)
  }
  return breadcrumbsArray
}

const arrayIntoChunks = (arr, chunkSize, page) => {
  const res = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize)
    res.push(chunk)
  }

  return res[page - 1]
}

const filesInDirectory = (directoryName) => {
  const directoryPath = mdFiles(directoryName)
  const filesDirectory = fs.readdirSync(directoryPath, 'utf-8', (err, files) => {
    if (err) return err

    return files
  })
  return filesDirectory
}

const filesMetadata = (directoryName, files) => {
  const filesArray = []

  for (let i = 0; i < files.length; i += 1) {
    const file = files[i]
    const filePath = mdFiles(`${directoryName}/${file}`)

    const fileContent = fs.readFileSync(filePath).toString()
    const { metadata } = metadataParser(fileContent)
    filesArray.push(JSON.stringify(metadata))
  }

  return filesArray
}

const filesContent = (directoryName, files) => {
  const filesContentArray = []

  for (let i = 0; i < files.length; i += 1) {
    const file = files[i]
    const filePath = mdFiles(`${directoryName}/${file}`)
    const fileContent = fs.readFileSync(filePath).toString()
    const { metadata, content } = metadataParser(fileContent)
    const obj = {
      metadata,
      content: marked(content),
    }
    filesContentArray.push(obj)
  }

  return filesContentArray
}

const pagination = (files, chunkSize, page) => {
  const chunkFiles = arrayIntoChunks(files, chunkSize, page)
  const totalPages = Math.ceil(files.length / chunkSize)
  const nextPage = Number(page) + 1
  const previousPage = Number(page) - 1

  return {
    chunkFiles,
    totalPages,
    nextPage,
    previousPage,
  }
}

module.exports = {
  mdFiles,
  arrayIntoChunks,
  filesInDirectory,
  filesMetadata,
  filesContent,
  pagination,
  breadcrumbs,
}
