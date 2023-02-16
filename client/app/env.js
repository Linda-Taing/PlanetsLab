export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'linda-taing.us.auth0.com'
export const audience = 'https://bcw-example.com'
export const clientId = 'KJLmJ9da3J86wMJjWqTxIiwpKno4YP03'
