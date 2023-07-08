const input_box=document.querySelector('.box');
const img=document.querySelector('.my_img');
const temprature=document.querySelector('.temp');
const desp=document.querySelector('.what');
const humidity=document.querySelector('.humid');
const wind_speed=document.querySelector('.speed');
const buttton=document.getElementById('src_btn');



 async function check_weather(city){

      const key="6c8e1f18e432e0922a7497f5e37fa51f";
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
      
      const p= await fetch(`${url}`).then((response)=>

       response.json()
       
     )

    // console.log(p);
    // console.log(data);
    // for showing data
    // .then( (data) => {
      // console.log(data);

    //  temprature.innerHTML=`${data.main.temp}`;
  // });


     
     
       
      temprature.innerHTML=`${Math.round(p.main.temp-273.15)}°C`;
      humidity.innerHTML=`${p.main.humidity}%`;
      wind_speed.innerHTML=`${p.wind.speed}km/h`;
      desp.innerHTML=`${p.weather[0].description}`;


    //  if(p.weather[0].main='Mist'){
       // img.src="/images/mist.png";
    //  }
    
   



      switch(p.weather[0].main){

    
        case'clouds':
        img.src="/images/cloud.png";
        break;
       
        case'clear':
        img.src="/images/clear.png";
        break;

        case'Rain':
        img.src="/images/rain.png";
        break;

        case'Mist':
        img.src="/images/mist.png";
        break;

        case'Snow':
        img.src="/images/snow.png";
        break;

      }


   





}




buttton.onclick = function()
{
    
    check_weather(input_box.value);
    
    };




