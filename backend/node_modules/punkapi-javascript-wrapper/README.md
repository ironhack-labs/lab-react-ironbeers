# PunkAPI Javascript Wrapper

A JS wrapper for the [BrewDog Punk API V2](https://punkapi.com/documentation/v2) - an API for retrieving data about [BrewDog's beers](https://www.brewdog.com/) built by [@samjbmason](https://twitter.com/samjbmason).

## Installation

There are 3 ways to install the PunkAPI Javascript Wrapper.

#### Clone
Clone this repo into your project with:

    git clone https://github.com/brettdewoody/punkapi-javascript-wrapper.git

#### NPM / Yarn
Install via `npm` or `yarn` with:

    npm install --save punkapi-javascript-wrapper

or

    yarn add punkapi-javascript-wrapper

#### Bower
Install via `bower` with:

    bower install punkapi-javascript-wrapper

## Usage

There are several ways the wrapper can be used. The wrapper is available as a library script ([option #1](#option-1)), can be imported with [Webpack](https://webpack.github.io/) into a bundled script for the browser ([option #2](#option-2)), or can be imported into Node ([option #3](#option-3)).

<a name="option-1"></a>
**Library (Option #1)**

Include the compiled library script on your page with:

    <script type="text/javascript" src="/path/to/punkapi-javascript-wrapper/dist/punkapi-javascript-wrapper.js"></script>

Then create a new instance of the `PunkAPIWrapper` and get to work:

    const punkAPI = new PunkAPIWrapper()

<a name="option-2"></a>
**Webpack for the Browser (Option #2)**

Import `PunkAPIWrapper` in your `entry` file with

    const PunkAPIWrapper = require('/path/to/punkapi-javascript-wrapper/src/punkapi-javascript-wrapper.js')

Then create a new instance of `PunkAPIWrapper` and get to work:

    const punkAPI = new PunkAPIWrapper()

Finally `webpack` your code using your Webpack config.

<a name="option-3"></a>
**Node (Option #3)**

The same implementation as Option #2.

Import `PunkAPIWrapper` in your `entry` file with

    const PunkAPIWrapper = require(punkapi-javascript-wrapper)

Then create a new instance of `PunkAPIWrapper` and get to work:

    const punkAPI = new PunkAPIWrapper()

Here's a [Glitch demo](https://glitch.com/edit/#!/punkapi-javascript-wrapper-demo) showing how to use the wrapper in Node and the results:

* A random beer - [https://punkapi-javascript-wrapper-demo.glitch.me/beer/random](https://punkapi-javascript-wrapper-demo.glitch.me/beer/random)
* A specific beer - [https://punkapi-javascript-wrapper-demo.glitch.me/beer/1](https://punkapi-javascript-wrapper-demo.glitch.me/beer/1)
* Strong beers (using a URL param of ?abv_gt=8) - [https://punkapi-javascript-wrapper-demo.glitch.me/beer?abv_gt=8](https://punkapi-javascript-wrapper-demo.glitch.me/beer?abv_gt=8)

## Methods

The wrapper provides 5 methods for retrieving all the BrewDog-related info you want:

* [`punkAPI.getBeer(:id)`](#getbeerid) - a specific beer
* [`punkAPI.getBeers(:options)`]()- beers matching the options
* [`punkAPI.getRandom()`]() - a single random beer
* [`punkAPI.getRateLimit()`]() - total number of requests allowed to the PunkAPI in an hour
* [`punkAPI.getRateLimitRemaining()`]() - number of remaining requests allowed to the PunkAPI in the hour

**Note:** All methods query the BrewDog Punk API using an asynchronous `fetch` request and return a [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise). This means you'll need to use `.then()` to wait for the response and provide a callback for handling the returned data.

    const punkAPI = new PunkAPIWrapper()

    const randomBeer = PunkAPI.getRandom()

    randomBeer.then(beer => {
      alert(beer[0].name)
    })

#### `getBeer(:id)`

Returns an array of length 1 with the beer matching an ID of `:id`. `:id` should be a number corresponding to the ID of the desired beer.

**Example:** const beer1 = punkAPI.getBeer(1)

#### `getBeers(:options)`

Returns an array with beers matching the `:options`. `:options` is an object consisting of available filters (below).

**Example:** const strongBeers = punkAPI.getBeers({'abv_gt': 8})

<table>
<thead>
<tr><td class="ttu pa2 br bb b--light-silver bg-light-gray">Param</td>
<td class="ttu pa2 br bb b--light-silver bg-light-gray">Type</td>
<td class="ttu pa2 bb b--light-silver bg-light-gray">Details</td>
</tr></thead>
<tbody>
<tr>
  <td>abv_gt</td>
  <td>number</td>
  <td>Returns all beers with ABV greater than the supplied number</td>
</tr>

<tr>
  <td>abv_lt</td>
  <td>number</td>
  <td>Returns all beers with ABV less than the supplied number</td>
</tr>

<tr>
  <td>ibu_gt</td>
  <td>number</td>
  <td>Returns all beers with IBU greater than the supplied number</td>
</tr>

<tr>
  <td>ibu_lt</td>
  <td>number</td>
  <td>Returns all beers with IBU less than the supplied number</td>
</tr>

<tr>
  <td>ebc_gt</td>
  <td>number</td>
  <td>Returns all beers with EBC greater than the supplied number</td>
</tr>

<tr>
  <td>ebc_lt</td>
  <td>number</td>
  <td>Returns all beers with EBC less than the supplied number</td>
</tr>

<tr>
  <td>beer_name</td>
  <td>string</td>
  <td>Returns all beers matching the supplied name (this will match partial strings as well so e.g punk will return Punk IPA), if you need to add spaces just add an underscore (_).</td>
</tr>

<tr>
  <td>yeast</td>
  <td>string</td>
  <td>Returns all beers matching the supplied yeast name, this performs a fuzzy match, if you need to add spaces just add an underscore (_).</td>
</tr>

<tr>
  <td>brewed_before</td>
  <td>date</td>
  <td>Returns all beers brewed before this date, the date format is mm-yyyy e.g 10-2011</td>
</tr>

<tr>
  <td>brewed_after</td>
  <td>date</td>
  <td>Returns all beers brewed after this date, the date format is mm-yyyy e.g 10-2011</td>
</tr>

<tr>
  <td>hops</td>
  <td>string</td>
  <td>Returns all beers matching the supplied hops name, this performs a fuzzy match, if you need to add spaces just add an underscore (_).</td>
</tr>

<tr>
  <td>malt</td>
  <td>string</td>
  <td>Returns all beers matching the supplied malt name, this performs a fuzzy match, if you need to add spaces just add an underscore (_).</td>
</tr>

<tr>
  <td>food</td>
  <td>string</td>
  <td>Returns all beers matching the supplied food string, this performs a fuzzy match, if you need to add spaces just add an underscore (_).</td>
</tr>

<tr>
  <td>ids</td>
  <td>string (id|id|...)</td>
  <td>Returns all beers matching the supplied ID's. You can pass in multiple ID's by separating them with a | symbol.</td>
</tr>
</tbody>
</table>

For the most up-to-date filters please see the [PunkAPI docs](https://punkapi.com/documentation/v2).

#### `getRandom()`

Returns an array of length 1 with a random beer

**Example:** const randomBeer = punkAPI.getRandom()

#### `getRateLimit()`

Returns a number displaying the rate limit. This is currently set to 3600 requests per hour per IP address.

**Example:** const rateLimit= punkAPI.getRateLimit()

#### `getRateLimitRemaining()`

Returns a number displaying the available number of requests remaining for this IP address.

**Example:** const rateLimitRemaining= punkAPI.getRateLimitRemaining()

## Examples

**Get a random beer**

    const randomBeer = PunkAPI.getRandom()

    randomBeer.then(beer => {
      alert(beer[0].name)
    })


**Get strong beers**

    const strongBeers = PunkAPI.getBeers({'abv_gt': 8})

    strongBeers.then(beers => {
      beers.forEach(beer => {
        alert(beer.name)
      })
    })

**Get remaining request limit**
    const remainingRequests = PunkAPI.getRateLimitRemaining()

    remainingRequests.then(requests => {
      alert(requests)
    })

## Contributing

Please see the [Contributing Guide](/blob/develop/Contributing.md).

## License

This project is licensed under the terms of the MIT license.
