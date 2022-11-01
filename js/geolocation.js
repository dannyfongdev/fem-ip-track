class Geolocation {
  constructor() {
    this.geoData = {
      ip: "8.8.8.8",
      location: {
        country: "US",
        region: "California",
        city: "Mountain View",
        lat: 37.38605,
        lng: -122.08385,
        postalCode: "94035",
        timezone: "-07:00",
        geonameId: 5375480,
      },
      domains: [
        "14abbeyroad.com",
        "21vek-api-1471.21vek-dev.by",
        "21vek-api-1472.21vek-dev.by",
        "21vek-api-1476.21vek-dev.by",
        "21vek-api-1482.21vek-dev.by",
      ],
      as: {
        asn: 15169,
        name: "GOOGLE",
        route: "8.8.8.0/24",
        domain: "https://about.google/intl/en/",
        type: "Content",
      },
      isp: "Google LLC",
    };

    this.geoDataMsn = {
      ip: "13.82.28.61",
      location: {
        country: "US",
        region: "Virginia",
        city: "Washington",
        lat: 38.71345,
        lng: -78.15944,
        postalCode: "22747",
        timezone: "-04:00",
        geonameId: 4792307,
      },
      domains: [
        "securetrustukplcs.com",
        "krystiyankostyantyn.com",
        "microsoftactualite.ch",
        "microsoftnachrichten.ch",
        "microsoftnews.at",
      ],
      as: {
        asn: 8075,
        name: "MICROSOFT-CORP-MSN-AS-BLOCK",
        route: "13.64.0.0/11",
        domain: "",
        type: "Content",
      },
      isp: "Microsoft Corporation",
    };
  }

  // console.log(geoData)

  async getGeoData(ip, domain) {
    // for now, use dummy data, save fetches bc quota
    return this.geoData;
    if (ip=='' && domain=='') {
      // return default dummy data
      return this.geoData;
    }
    // build query
    const queryString = `ipAddress=${ip}&domain=${domain}`;
    
    // call serverless function
    const response = await fetch(`/.netlify/functions/geolocation?${queryString}`);
    const responseData = await response.json();
    return responseData;
  }


  // Fetch data from geo.ipify.org API
  async getGeoDataFromProxy(ip, domain) {
    const response = await fetch(
      "http://localhost:8888/.netlify/functions/geolocation"
    );

    const responseData = await response.json();

    return responseData;
  }
}
