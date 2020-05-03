const axios  = require('axios');

const getLugarLatLong = async(direccion) => {
  const encodeUrl = encodeURI(direccion);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {'x-rapidapi-key': 'ef83cf4af3msh31d7815ae0d6db2p1ba6a1jsne808142dca06'}
  });

  const respuesta = await instance.get();

  if (respuesta.data.Results.length === 0){
    throw new Error(`No hay resultados para ${direccion}`);
  }

  const data = respuesta.data.Results[0];
  const nombre =  data.name;
  const lat = data.lat;
  const long = data.lon;

  return {
      nombre,
      lat,
      long
  }
}


module.exports = {
  getLugarLatLong
}
