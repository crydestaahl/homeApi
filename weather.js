let long;
let lat;
let currently;
let temp;
let icon;


navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;

    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const api = `${proxy}https://api.darksky.net/forecast/2fc28e02d1eca30bff98c77c7305b914/${lat},${long}`; //`${proxy}https://api.darksky.net/forecast/2fc28e02d1eca30bff98c77c7305b914/37.8267,-122.4233`

    fetch(api)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            const { temperature, icon } = data.currently;
            temp = 'Ca ' + Math.floor((temperature - 32) * .5556);

            const div = document.querySelector('.weather');
            const element = document.createElement('p');
            const element2 = document.createElement('p');
            element.innerHTML = data.daily.summary;
            element2.innerHTML = temp;
            div.appendChild(element2);
            div.appendChild(element);

            setIcons(icon, document.querySelector('.icon'))
        });

    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: 'black' });
        const currentIcon = icon.replace(/-/g, '_').toUpperCase()
        skycons.play()
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});

