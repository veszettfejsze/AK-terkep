
var themap ;

function setup() {

  createCanvas(displayWidth,200);
    fill(235);
    noStroke();
    rect(10,10,displayWidth-10,190,15);
    

    
    var marker1 = L.marker([47.52,19.05]).addTo(themap);
    var marker2 = L.marker([47.25,19.63]).addTo(themap);
    var marker3 = L.marker([47.23,16.62]).addTo(themap);
    
    /*var circle = L.circle([47.49,19.04], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
    }).addTo(themap);*/
    
    //simple popup
    marker1.bindPopup("<b>Itt találod őket</b><br>amikor épp nem koslatnak.").openPopup();
    marker2.bindPopup("<b>Albertirsa</b><br>Ákos innen indult.").openPopup();
    marker3.bindPopup("<b>Szombathely</b><br>Kriszti kezdőpontja.").openPopup();
    //circle.bindPopup("I am a circle.");
    
    //adding popup as layer
    /*var popup = L.popup()
    .setLatLng([47.46, 19.05])
    .setContent("Itt találod őket, ha épp nem koslatnak.")
    .openOn(themap);
}
var popup = L.popup();

function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(themap);


            themap.on('click', onMapClick);}*/
}
function draw() {
        
    
   
}
