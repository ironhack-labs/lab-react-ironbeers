require('es6-promise').polyfill()
require('isomorphic-fetch')
const qs = require('qs')

class PunkAPIWrapper {
  constructor () {
    this.baseURL = 'https://api.punkapi.com/v2'
    this.rateLimit = null
    this.rateLimitRemaining = null
    this.doRequest = function (URL, options) {
      const optionStr = qs.stringify(options)

      return fetch(URL + (options ? ['?', optionStr].join('') : ''))
        .then(function (res) {
          if (res.status >= 400) {
            console.error('Bad response from server')
          }

          this.rateLimit = res.headers.get('x-ratelimit-limit')
          this.rateLimitRemaining = res.headers.get('x-ratelimit-remaining')

          return res.json()
        }.bind(this))
        .then(function (json) {
          return json
        })
        .catch(function (err) {
          console.error(err)
        })
    }
  }

  // Gets beers from the api, you can apply several filters using url
  // paramaters, the available options are listed below.
  getBeers (options) {
    const URL = `${this.baseURL}/beers`

    return this.doRequest(URL, options)
  }

  // Gets a beer from the api using the beers id.
  getBeer (id) {
    const URL = `${this.baseURL}/beers/${id}`

    if (!id) {
      console.error('No beer ID provided.')
    }

    return this.doRequest(URL)
  }

  // Gets a random beer from the API, this takes no paramaters.
  getRandom () {
    const URL = `${this.baseURL}/beers/random`

    return this.doRequest(URL)
  }

  // Gets the total rate limit set by the API
  // The number returned is the total number of
  // requests allowed per hour.
  getRateLimit () {
    return new Promise(function (resolve, reject) {
      if (this.rateLimit) {
        resolve(this.rateLimit)
      } else {
        resolve(this.getRandom()
          .then(data => {
            return this.rateLimit
          }))
      }
    }.bind(this))
  }

  // Gets the remaining number of requests allowed
  // by the API in the hour. That is, the rate limit minus
  // the number of requests made in the past hour.
  // The number returned is the number of
  // remaining requests allowed per hour.
  getRateLimitRemaining () {
    return new Promise(function (resolve, reject) {
      if (this.rateLimitRemaining) {
        resolve(this.rateLimitRemaining)
      } else {
        resolve(this.getRandom()
          .then(data => {
            return this.rateLimitRemaining
          }))
      }
    }.bind(this))
  }
}

module.exports = PunkAPIWrapper
