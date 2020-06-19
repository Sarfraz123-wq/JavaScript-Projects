let d = new Date();
let newDate = d.getMonth()+ 1 +'.'+ d.getDate()+'.'+ d.getFullYear();
let zip = document.getElementById('zip');
let feelings = document.getElementById('feelings');
const apiKey = 'ae8bbdf48b4b078d953937d13932cf99&units=metric';

let generate = document.getElementById('generate');
var everything = document.getElementById('generate').addEventListener('click', async ()=>{
var data = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip.value},pk&appid=${apiKey}`)
try{
    var data2 = await data.json()
    postData('/addData',{date:newDate,Feelings:feelings.value,Zip:zip.value,temperature:data2.main.temp,cityName: data2.name}).then(showUI())
}catch(error){
    console.log('error',error);
}

});


const postData = async (url = '', data = {})=>{
      console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

      try {
        const newData = await response.json();
       // console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
      
  }

  const showUI = async () =>{
    const request = await fetch('/all');
    try{
        const allData = await request.json();          
        
        document.getElementById('date').innerHTML = "Date: "+ allData.date;
        document.getElementById('postalCode').innerHTML = "Zip Code: "+ zip.value;
        document.getElementById('temp').innerHTML = "Temperature: "+ allData.temperature;
        document.getElementById('content').innerHTML = "Yours Feelings: "+ feelings.value;
      
    }catch(error){
        console.log('error',error);
    }
}
