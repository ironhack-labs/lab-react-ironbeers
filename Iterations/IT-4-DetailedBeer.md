1. Corrijo un error en AllBeers.js donde no pasaba el ID para usarlo en la URL dinámica
2. Corrijo un error en BeerCard.js donde no pasaba el ID en "Link" para usarlo en la URL dinámica.

3. App.js
   3.1. Cambio la ruta para pasar los props al componente DetailedBeer, para así usar el ID.

4. En DetailedBeer.js
4.1. Importo Axios, la navbar y elementos de React bootstrap.
4.2. Creo un state con un ID vacío y una beer vacía.
4.3. Creo un componentDidMount para esperar a la llamada de Axios.
4.4. En la llamada, destructuro el ID (pasado por props gracias a la ruta cambiada de App.js) y lo paso a la llamada Axios para que coja la cerveza.
4.5. Guardo la información en el estado.
4.6. Renderizo la información.
