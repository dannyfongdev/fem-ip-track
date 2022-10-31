class UI {
  constructor() {
    this.ipUI = document.querySelector("#ip-address");
    this.locationUI = document.querySelector("#location");
    this.timezoneUI = document.querySelector("#timezone");
    this.ispUI = document.querySelector("#isp");
    this.map = null;
  }

  paintUI(data) {
    // console.log(data);
    this.ipUI.textContent = data.ip;
    this.locationUI.textContent =
      data.location.city +
      ", " +
      data.location.region +
      "  " +
      data.location.postalCode;
    this.timezoneUI.textContent = data.location.timezone;
    this.ispUI.textContent = data.isp;
    this.paintMap(data.location.lat, data.location.lng);
  }

  paintMap(lat, lng) {
    this.map = L.map("map").setView([lat, lng], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    var marker = L.marker([lat, lng]).addTo(this.map);
  }

  clearMap() {
    try {
      this.map.remove();
    } catch {
        // no action needed
    }
  }
}
