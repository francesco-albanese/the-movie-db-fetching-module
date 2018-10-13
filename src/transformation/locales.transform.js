export const transformLocaleResponse = data => {
  const { locales } = data
  console.log(typeof data)
  return locales
}