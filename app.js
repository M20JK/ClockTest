function timy() {
  const time = new Date(); // const // let // 
  let h = time.getHours() 
  let minute = time.getMinutes();
  let second = time.getSeconds();




  /// changing from 24 to 12 system  and adding am or pm and 0 
  h > 12 ? pm = 'PM' : pm = 'AM'
  h =(h > 12) ? h - 12 : h ;
  h= (h < 10) ?"0" + h : h ;
  h =(h == 0) ? h = 12 : h ;
  minute= (minute < 10) ?"0" + minute : minute ;
  second= (second < 10) ?"0" + second : second ;





/// timer code below
let hm = 1
let mn = 38
if(h == hm && minute == mn){
  document.getElementById('timer').innerHTML ='Its time to take a break' ;
  
}
//////end timer code 
 



  let timeNow = `${h}:${minute}:${second} `;

  document.getElementById("clock").innerHTML = timeNow;
  document.getElementById("PM").innerHTML = pm;

}
setInterval(timy , 1000)
///// fetching users from json to the console

// fetch('/apj')
// .then((res) => res.json())
// .then(json => console.log(json))

// .then((data) => {nnn
//     console.log(data);
//     console.log('WE fetch the data')
//     // document.getElementById('anything').innerHTML = data
// })
// .catch((err) => {
//     console.log(err);
//     console.log('WE failed')

// })


/// CountDowen clock

let seco = 150
let timeer = 0

function secondy(s){
  let min = Math.floor( s / 60)
  let sec = s % 60
  return min +':'+ sec
}

function countdown(){

timeer ++

document.getElementById("clock2").innerHTML =secondy( seco - timeer);

}
// setInterval(countdown , 1000)



