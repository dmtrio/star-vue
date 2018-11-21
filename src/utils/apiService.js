let apiService
export default class ApiService {
  constructor () {
    this.api = 'https://swapi.co/api/'
  }

  static init () {
    if (!(apiService instanceof ApiService)) {
      apiService = new ApiService()
    }
    return apiService
  }
  // returns a promise to be resolved
  apiCall (url) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then(res => res.json())
  }
  search (type, query) {
    const url = `${this.api}${type}/?search=${query}`
    return this.apiCall(url)
  }
}
