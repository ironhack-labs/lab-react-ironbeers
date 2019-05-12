/* eslint-env node, mocha */

'use strict'

const PunkAPI = require('../dist/punkapi-javascript-wrapper')
const should = require('chai').should()

describe('punkapi-javascript-wrapper', function () {
  let api = null

  beforeEach(function () {
    api = new PunkAPI()
  })

  describe('Base URL', function () {
    it('it should have the base API URL', function () {
      const url = api.baseURL
      url.should.equal('https://api.punkapi.com/v2')
    })
  })
})
