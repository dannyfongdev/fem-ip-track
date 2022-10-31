const fetch = require('node-fetch');

const handler = async (event) => {
  try {
    // build the url
    const fetchUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY_GEO}&${event.rawQuery}`; 
    console.log(fetchUrl);

    // fetch from ipify
    const response = await fetch(fetchUrl);
    console.log(response);
    const responseData = await response.json();
    console.log(responseData);
 
    // return ipify data
    return {
      statusCode: 200,    
      body: JSON.stringify(responseData),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
