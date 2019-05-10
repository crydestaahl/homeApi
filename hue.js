// 1 = playroom 2 = livingroom 3 = hallway 4 = studio
const hue = jsHue();
const playroomOn = document.querySelector('#playroom-on')
const playroomOff = document.querySelector('#playroom-off')
const livingroomOn = document.querySelector('#livingroom-on');
const livingroomOff = document.querySelector('#livingroom-off');
const hallwayOn = document.querySelector('#hallway-on');
const hallwayOff = document.querySelector('#hallway-off');
const studioOn = document.querySelector('#studio-on');
const studioOff = document.querySelector('#studio-off');
const allInOn = document.querySelector('#all-on')
const allInOff = document.querySelector('#all-off')

//Playroom 
playroomOn.addEventListener('click', () => {
    user.setLightState(1, { on: true }).then(data => {
    });
})
playroomOff.addEventListener('click', () => {
    user.setLightState(1, { on: false }).then(data => {
    });
})

//Livingroom 
livingroomOn.addEventListener('click', () => {
    user.setLightState(2, { on: true }).then(data => {
    });
})
livingroomOff.addEventListener('click', () => {
    user.setLightState(2, { on: false }).then(data => {
    });
})

//Hallway
hallwayOn.addEventListener('click', () => {
    user.setLightState(3, { on: true }).then(data => {
    });
})
hallwayOff.addEventListener('click', () => {
    user.setLightState(3, { on: false }).then(data => {
    });
})
studioOn.addEventListener('click', () => {
    user.setGroupState(6, { on: true }).then(data => {
    });
})

studioOff.addEventListener('click', () => {
    user.setGroupState(6, { on: false }).then(data => {
    });
})

// All inside house
allInOn.addEventListener('click', () => {
    user.setLightState(1, { on: true }).then(data => {
    });
    user.setLightState(2, { on: true }).then(data => {
    });
    user.setLightState(3, { on: true }).then(data => {
    });
})
allInOff.addEventListener('click', () => {
    user.setLightState(1, { on: false }).then(data => {
    });
    user.setLightState(2, { on: false }).then(data => {
    });
    user.setLightState(3, { on: false }).then(data => {
    });
})



hue.discover().then(bridges => {
    if (bridges.length === 0) {
        console.log('No bridges found. :(');
    }
    else {
        bridges.forEach(b => console.log('Bridge found at IP address %s.', b.internalipaddress));
    }
}).catch(e => console.log('Error finding bridges', e));

let bridge = hue.bridge('192.168.1.250');
let username = 'rXE-ktSjJrFs9jQQXGmJNnefbyNeWk6FyVhRIhv8'
let user = bridge.user(username);







//console.log(user.getGroups().then( data => console.log(data)))

//user.getLight(1).then(data => console.log(data))