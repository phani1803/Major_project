
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        //choose from mapboxs core style or make your own style with mapbox studio
        style: 'mapbox://styles/mapbox/streets-v12', //style url
        center: [78.4772, 17.4065], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    console.log(coordinates);

 const marker = new mapboxgl.Marker()
 .setLngLat(coordinates)  //listing.geometry.coordinates
 .addTo(map);