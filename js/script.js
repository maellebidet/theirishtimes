var map = L.map('map');
var points = [
    [16.0144, -61.7064],   // Guadeloupe
    [4.9224, -52.3135],    // Guyane
    [14.6096, -61.0733],   // Martinique
    [-20.8789, 55.4481],   // Réunion
    [-12.7806, 45.2279],   // Mayotte
    [-17.5516, -149.5585], // Polynésie française
    [-22.2758, 166.4580]   // Nouvelle-Calédonie
];

map.fitBounds(points);

// INTERRACTION CHANGEMENT CARTE
// Couche normale OSM
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Couche satellite (Esri World Imagery)
var esriSat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri — Source: Esri, USGS, etc.',
    maxZoom: 19
});


// Ajouter la couche normale par défaut
osm.addTo(map);

// Contrôle des couches
var baseMaps = {
    "Carte normale": osm,
    "Satellite (Esri)": esriSat
};
L.control.layers(baseMaps).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Recentrer la carte
document.getElementById("resetView").addEventListener("click", function () {
    map.fitBounds(points); // recentre la carte sur tes DOM-TOM
});

// --- Aller à Mayotte ---
var mayotteCoords = [-12.8275, 45.1662]; // lat, lng

document.getElementById("goMayotte").addEventListener("click", function () {
    map.setView(mayotteCoords, 10);
});

// --- Aller en Guyane ---
var guyaneCoords = [4.0, -53.0]; // lat, lng
document.getElementById("goGuyane").addEventListener("click", function () {
    map.setView(guyaneCoords, 7);
});

// --- Aller en Guadeloupe ---
var guadeloupeCoords = [16.265, -61.551]; // lat, lng
document.getElementById("goGuadeloupe").addEventListener("click", function () {
    map.setView(guadeloupeCoords, 10);
});

// --- Aller en Nouvelle-Calédonie ---
var nouvelleCaledonieCoords = [-21.3, 165.3]; // lat, lng
document.getElementById("goNouvelleCaledonie").addEventListener("click", function () {
    map.setView(nouvelleCaledonieCoords, 7);
});

// --- Aller en Polynésie française (Tahiti) ---
var polynesieFrancaiseCoords = [-17.6797, -149.4068]; // lat, lng
document.getElementById("goPolynesieFrancaise").addEventListener("click", function () {
    map.setView(polynesieFrancaiseCoords, 10);
});

// --- Aller à La Réunion ---
var reunionCoords = [-21.1151, 55.5364]; // lat, lng
document.getElementById("goReunion").addEventListener("click", function () {
    map.setView(reunionCoords, 10);
});


// style pour les points
var pointStyle = {
    radius: 8,       // Taille point 
    color: '#d76b5fff',
    fillColor: '#a96161ff',
    fillOpacity: 0.8 // Opacité remplissage
};


// LISTING CINEMA
// CINÉMA LIBERTY
L.circleMarker([-17.5375, -149.5667], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma Liberty à Papeete !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));



// CINÉMA MAJESTIC
L.circleMarker([-17.5336, -149.5669], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma Majestic à Papeete !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// MAJESTIC ITI
L.circleMarker([-17.7500, -149.3000], pointStyle).addTo(map)
    .bindPopup('Welcome to Majestic Iti à Taravao, Tahiti !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// ORIGIN CINEMA DUMBÉA
L.circleMarker([-22.2059, 166.4574], pointStyle).addTo(map)
    .bindPopup('Welcome to l’Origin Cinema de Dumbéa !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINÉMA CINÉCITY NOUMÉA
L.circleMarker([-22.2663, 166.4481], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma CinéCity à Nouméa !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINÉ DRIVE-IN MONT-DORE
L.circleMarker([-22.2226, 166.5247], pointStyle).addTo(map)
    .bindPopup('Welcome to Ciné Drive-In du Mont-Dore !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINÉMA NYAAN KONÉ
L.circleMarker([-21.0575, 164.8558], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma Nyaan à Koné !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));



// CADI CINE WOULE
L.circleMarker([14.604361, -61.065269], pointStyle).addTo(map)
    .bindPopup('Welcome to Ciné Cadi Woule !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// URANIA
L.circleMarker([5.163068, -52.640785], pointStyle).addTo(map)
    .bindPopup('Welcome to Urania !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// Le Plaza SD
L.circleMarker([-20.879155, 55.44994], pointStyle).addTo(map)
    .bindPopup('Welcome to Plaza SD !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINEMA REX
L.circleMarker([-21.341862, 55.478423], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma Rex !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// SALLE ROBERT LOYSON
L.circleMarker([16.330896, -61.345451], pointStyle).addTo(map)
    .bindPopup('Welcome to la Salle Robert Loyson !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINE THEATRE DE LAMENTIN
L.circleMarker([16.271667, -61.638984], pointStyle).addTo(map)
    .bindPopup('Welcome to Ciné Théâtre de Lamentin !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// Le Ritz
L.circleMarker([-20.876797, 55.451985], pointStyle).addTo(map)
    .bindPopup('Welcome to Ritz !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINEMA LE LACAZE
L.circleMarker([-20.876094, 55.448221], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma Le Lacaze !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINEMA MOULIN A CAFE
L.circleMarker([-21.284495, 55.471921], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma Moulin à Café !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// LE CINEPALMES
L.circleMarker([-20.901176, 55.515451], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinépalmes !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINEMA CINEPALMES
L.circleMarker([-20.873781, 55.452385], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma Cinepalmes !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// MULTIPLEXE CINE GRAND SUD PIERREFONDS
L.circleMarker([-21.306012, 55.425336], pointStyle).addTo(map)
    .bindPopup('Welcome to Multiplexe Ciné Grand Sud Pierrefonds !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// MADIANA CONGRES
L.circleMarker([14.614648, -61.095336], pointStyle).addTo(map)
    .bindPopup('Welcome to Madiana Congres !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// AGORA
L.circleMarker([4.892799, -52.328902], pointStyle).addTo(map)
    .bindPopup('Welcome to Agora !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// Le Toucan
L.circleMarker([5.3422, -54.046], pointStyle).addTo(map)
    .bindPopup('Welcome to Toucan !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// LE FANGAOURIN
L.circleMarker([-21.355148, 55.565571], pointStyle).addTo(map)
    .bindPopup('Welcome to Fangourin !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// Le Séchoir
L.circleMarker([-21.217586, 55.310449], pointStyle).addTo(map)
    .bindPopup('Welcome to Séchoir !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINEMA LE PLAZA
L.circleMarker([-21.280304, 55.415387], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma Le Plaza !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINESTAR
L.circleMarker([16.273147, -61.521363], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéstar !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINEMA DU D'ARBAUD
L.circleMarker([15.995253, -61.725086], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma du D\'Arbaud !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// Salles Gilles Floro
L.circleMarker([15.998408, -61.69204], pointStyle).addTo(map)
    .bindPopup('Welcome to Salles Gilles Floro !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// Rex
L.circleMarker([16.244283, -61.533849], pointStyle).addTo(map)
    .bindPopup('Welcome to Rex !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINEMA ELDORADO
L.circleMarker([4.93961, -52.333778], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma Eldorado !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// POLE CULTUREL ET SPORTIF
L.circleMarker([-21.104064, 55.297038], pointStyle).addTo(map)
    .bindPopup('Welcome to Pôle Culturel et Sportif !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// SATHEC/MAG-EL RANCHO
L.circleMarker([15.890026955313024, -61.31718125397775], pointStyle).addTo(map)
    .bindPopup('Welcome to Sathec/Mag-El Rancho !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// TROPIQUES ATRIUM SCENE NATIONALE
L.circleMarker([14.604361, -61.065269], pointStyle).addTo(map)
    .bindPopup('Welcome to Tropiques Atrium Scène Nationale !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINEMA CRISTAL
L.circleMarker([-21.033801, 55.710434], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma Cristal !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// MULTIPLEXE CINE CAMBAIE
L.circleMarker([-20.985438, 55.288689], pointStyle).addTo(map)
    .bindPopup('Welcome to Multiplexe Ciné Cambaie !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// Salle Henri Madore
L.circleMarker([-21.36017, 55.767273], pointStyle).addTo(map)
    .bindPopup('Welcome to la Salle Henri Madore !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// Pôle Culturel Moussa Tchangalana
L.circleMarker([-12.93555, 45.149099], pointStyle).addTo(map)
    .bindPopup('Welcome to Pôle Culturel Moussa Tchangalana !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


// CINEMA ALPAOE
L.circleMarker([-12.791204, 45.179739], pointStyle).addTo(map)
    .bindPopup('Welcome to Cinéma Alpaoe !')
    .openPopup()
    .on("dblclick", e => map.setView(e.latlng, 50));


window.addEventListener("load", setupEventListeners);