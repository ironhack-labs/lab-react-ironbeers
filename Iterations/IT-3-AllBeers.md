1. Como debo llamar a la APi, hago npm i axios
2. Creo un array vacío en el estado para guardar las cervezas que vengan de axios.
3. Creo un método para recoger todas las cervezas.
   3.1. Recoge las cervezas con axios.get
   3.2. Una vez la promise se cumpla, guardo las cervezas en el array vacío del state.

4. Creo el componentDidMount para que no se haga display hasta que no se haya cumplido la promesa de axios.

5. BeerCard.js:
   5.1. Ya que todas las cervezas tienen en común la forma en la que se van a enseñar, creo un componente-template en el que iterar luego con la información recibida.
   5.2. Como quiero enseñar una imagen (image_url), el título (name), un resumen (tagline) y un creador (name), le paso los props que recibirá de axios (de AllBeers)
   5.3. Creo el HTML para renderizar la tarjeta con los props que reciba
