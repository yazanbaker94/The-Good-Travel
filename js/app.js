'use strict'

Trip.all = [];

function Trip(placename, placecity, transport, img) {
    this.placename = placename;
    this.placecity = placecity;
    this.transport = transport;
    this.hawaii = 'HAWAII.jpg';
    this.italy = 'ITALY.png';
    this.london = 'LONDON.png';
    this.malaysia = 'MALAYSIA.png';
    this.paris = 'PARIS.png';
    this.slovakia = 'SLOVAKIA.png';
    this.img = img;
    Trip.all.push(this);

}


let form = document.getElementById('form');
let results = document.getElementById('results');


form.addEventListener('submit', submitHandler);

function submitHandler (event) {
event.preventDefault();

let placename = event.target.place.value;
let placecity = event.target.trip.value;
let transport = event.target.transport.value;

let img;

if(event.target.trip.value = 'HAWAII') {
    img = 'HAWAII.jpg';
} else if(event.target.trip.value = 'LONDON'){
    img = 'LONDON.png'
}




let newTrip = new Trip(placename, placecity, transport, img);
newTrip.render();
localStorage.setItem('trip', JSON.stringify(Trip.all));
console.log(placecity)

}


Trip.prototype.render = function () {


    let img = document.createElement('img');
    results.appendChild(img);
    img.src = this.img;

    let placename = document.createElement('p');
    results.appendChild(placename);
    placename.textContent = 'Place name: ' + this.placename;

    let placecity = document.createElement('p');
    results.appendChild(placecity);
    placecity.textContent = 'Place city: ' + this.placecity;

    let transport = document.createElement('p');
    results.appendChild(transport);
    transport.textContent = 'type of transport: ' + this.transport;

    let hr = document.createElement('hr');
    results.appendChild(hr);
    
}

if(localStorage.getItem('trip')) {
    Trip.all = JSON.parse(localStorage.getItem('trip'));
    renderLocal();
}


function renderLocal() {
    let data = [];
    data = JSON.parse(localStorage.getItem('trip'));

    for(let i=0; i<data.length; i++) {


        let img = document.createElement('img');
        results.appendChild(img);
        img.src = data[i].img;


        let placename = document.createElement('p');
        results.appendChild(placename);
        placename.textContent = 'Place name: ' + data[i].placename;
    
        let placecity = document.createElement('p');
        results.appendChild(placecity);
        placecity.textContent = 'Place city: ' + data[i].placecity;
    
        let transport = document.createElement('p');
        results.appendChild(transport);
        transport.textContent = 'type of transport: ' + data[i].transport;

        let hr = document.createElement('hr');
        results.appendChild(hr);
    }
}



let clear = function(){
    let button = document.createElement('button');
    button.innerHTML = 'Clear Local Storage then refresh';
    button.onclick = function(){
        localStorage.clear();
    };
    // where do we want to have the button to appear?
    // you can append it to another element just by doing something like
    // document.getElementById('foobutton').appendChild(button);
    clearLocal.appendChild(button);
  };

  clear();