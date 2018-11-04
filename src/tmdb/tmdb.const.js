import axios from 'axios'

const BASE_URL = process.env.TMDB_BASE_URL
const API_KEY = process.env.TMDB_API_KEY

export const tmdbClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
  }
})

export const urls = {
  genres: `/genre/movie/list`,
  nowPlaying: `/movie/now_playing`,
  popular: `/movie/popular`,
  search: `/search/movie`,
  topRated: `/movie/top_rated`,
  upcoming: `/movie/upcoming`
}