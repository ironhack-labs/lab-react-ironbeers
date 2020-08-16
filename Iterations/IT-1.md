1. npm install
2. npm i bootstrap
3. App.js: importo bootstrap

4. npm i react-bootstrap
5. Creo el componente Homepage.js
6. Homepage.js: importo react-bootstrap

7. npm i react-router-dom
8. Index.js: importo BrowserRouter y envuelvo al componente App en ello.

9. App.js:
   9.1. Importo Switch y Route.
   9.2. Creo las rutas de las iteraciones y la de la homepage. Las envuelvo en Switch.

10. En Homepage.js:
    10.1. Como los tres componentes van a ser iguales, creo un componente nuevo llamado "OptionCard" para iterar.
    10.2. Creo un array de objetos donde guardo los diferentes accesos e informaciones de las tarjetas.

11. OptionCard.js:
    11.1. rafce
    11.2. Importo Card (react-bootstrap) y Link (react-router-dom), ya que el estilo se lo da bootstrap y los links que llevarán a las rutas.
    11.3. Los parámetros que recibe esta OptionCard son las propiedades de los objetos, entre {} porque son objetos.
    11.4. Envuelvo todo el componente en un link, para que todo sea clicable.
    11.5. El sistema es igual al Bootstrap normal pero usando componentes.

12. En Homepage.js:
12.1. Mapeo el array de objetos con la información de cada card y aplico todo dentro del componente OptionCard.js
12.2. En el return, devuelvo un container con un row y una columna donde enseño la variable donde he guardado la iteración de array de objetos usando OptionCard como plantilla