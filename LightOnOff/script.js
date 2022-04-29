console.log("Light")

// ======== QuerySelector ========
const container = document.querySelector('#container');
const btn = document.querySelector('#btnOn')
const imgBulb = document.querySelector('#imgLightOff')
const imgBtn = document.querySelector('#imgButton')

// create function to turn light on when mouse click.
btn.addEventListener('click', event => {

    if(imgBulb.src.match('lightOff')) {

        imgBulb.src = 'lightOn.png'
        imgBtn.src = 'offSwitch.jpg'
        
       

     } else {
        imgBulb.src = 'lightOff.png';
        imgBtn.src = 'onSwitch.jpg'
     }
})

