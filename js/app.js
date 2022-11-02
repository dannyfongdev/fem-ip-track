// Init
const geo = new Geolocation();
const ui = new UI();
const searchButtonUI = document.querySelector("#search-button");
const searchStringUI = document.querySelector("#search-string");
const errorMessage = document.querySelector("#error-message");

// Event Listener
document.addEventListener('DOMContentLoaded', getGeoData(','));

searchButtonUI.addEventListener('click', async(e) => {
  const strValue = searchStringUI.value;

  if (ipAddressCheck(strValue)) {
    ui.clearMap();
    getGeoData(strValue, '');
  } else {
    if (checkIsValidDomain(strValue)) {
      ui.clearMap();
      getGeoData('', strValue);
    } else {
      errorMessage.innerText = "Not a valid domain name or IP address."
      setTimeout ( ()=>{
        errorMessage.innerText = "";
      }, 5000)
    }
  }
});

function getGeoData(ip, domain) {
  geo.getGeoData(ip, domain)
    .then(result => {
      ui.paintUI(result);
      lat = result.lat;
      lng = result.lng;
    })
    .catch(err => console.log(err));
}

// utility functions
function ipAddressCheck(ipAddress) {
  const regEx =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (ipAddress.match(regEx)) {
    return true;
  } else {
    return false;
  }
}

function checkIsValidDomain(domain) { 
  const re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/); 
  return domain.match(re);
}
