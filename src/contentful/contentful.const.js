import axios from 'axios'

const BASE_URL = process.env.TMDB_CONTENTFUL_BASE_URL
const CONTENTFUL_DELIVERY_TOKEN = process.env.TMDB_CONTENTFUL_CONTENT_DELIVERY_API_TOKEN
const SPACE_ID = process.env.TMDB_CONTENTFUL_SPACE_ID

export const contentfulClient = axios.create({
  baseURL: BASE_URL,
  params: {
    access_token: CONTENTFUL_DELIVERY_TOKEN
  }
})

export const contentTypes = {
  asset: 'image',
  layout: 'layout',
  link: 'link',
  section: 'section',
  text: 'text',
  page: 'page'
}

export const urls = {
  entries: `/spaces/${ SPACE_ID }/entries`,
  space: `/spaces/${ SPACE_ID }`
}