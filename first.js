//first calculate the date

function show_birthday(){
const date1 = new Date()
const date2 = new Date('2025-02-13T00:00:00')
const result = date2 - date1


// SHOWING THE DAYS
const days_showings = document.querySelector('.show_the_days_left')
days_showings.innerHTML = 'DAYS'

days_showings.style.fontSize = '40px'
days_showings.style.color = 'black'
const days = Math.floor((result)/(1000*60*60*24))
const days_show = document.querySelector('.Days_showing')
days_show.innerHTML = days
//styling 
days_show.style.color = 'black'
days_show.style.fontSize = '30px'


//SHOWING THE HOURS

const hour_showings = document.querySelector('.hour_the_days_left')
hour_showings.innerHTML = 'HOURS'
hour_showings.style.fontSize = '40px'
hour_showings.style.color = 'black'

const hour = Math.floor((result)/(1000*60*60)%24)
const hour_show = document.querySelector('.hour_showing')
hour_show.innerHTML = hour
//styling 
hour_show.style.color = 'black'
hour_show.style.fontSize = '30px'

//SHOWING THE MINUTES

const minutes_showings = document.querySelector('.minutes_the_days_left')
minutes_showings.innerHTML = 'MINUTES'
minutes_showings.style.fontSize = '40px'
minutes_showings.style.color = 'black'

const minutes = Math.floor((result)/(1000*60)%60)
const minutes_show = document.querySelector('.minutes_showing')
minutes_show.innerHTML = minutes
//styling 
minutes_show.style.color = 'black'
minutes_show.style.fontSize = '30px'



// SHOWING THE SECONDS

const second_showings = document.querySelector('.second_the_days_left')
second_showings.innerHTML = 'SECOND'
second_showings.style.fontSize = '40px'
second_showings.style.color = 'black'

const second = Math.floor((result)/(1000)%60)
const second_show = document.querySelector('.second_showing')
second_show.innerHTML = second
//styling 
second_show.style.color = 'black'
second_show.style.fontSize = '30px'

}
setInterval(show_birthday,1000)


// const hello = document.getElementById('images1')
// hello.innerHTML = 'hello is the shsfasd'
// hello.style.color = 'black'
// hello.style.fontSize = '40px'
 



