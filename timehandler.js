const Discord = module.require("discord.js");

var fs = require('fs');


function searchname(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name.toLowerCase().includes(nameKey.toLowerCase())) {
            return myArray[i];
        }
    }
}


function searchid(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return myArray[i];
        }
    }
}

function searchitem(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].items.toLowerCase().includes(nameKey.toLowerCase())) {
            return myArray[i];
        }
    }
}

function searchlocation(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].location.toLowerCase().includes(nameKey.toLowerCase())) {
            return myArray[i];
        }
    }
}

function searchtravelname(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].travelname.toLowerCase().includes(nameKey.toLowerCase())) {
            return myArray[i];
        }
    }
}

//var months=[{name: "Novus",days: 31},{name: "Ningues",days: 28},{name: "Ver",days: 20},{name: "Virens",days: 30},{name: "Solis",days: 38},{name: "Frons",days: 38},{name: "Vocavis",days: 26},{name: "Prinix",days: 38}]
  
var said=false;




module.exports.run = async (client,ticks,users,items,locations,mobs,moblist) => {
  
  
  
  
  
  var months=[{name: "Novus",days: 31},{name: "Ningues",days: 28},{name: "Ver",days: 20},{name: "Virens",days: 30},{name: "Solis",days: 38},{name: "Frons",days: 35},{name: "Vocavis",days: 26},{name: "Prinix",days: 38}]
 
  var dividea=60*15;
  
  var day=Math.floor((Math.round(ticks/1000/dividea*60))/1440);
     
//    message.channel.send("This world is "+Math.round(ticks/1000/dividea*60)+" ticks old")
  
 // message.channel.send("It is day "+day+"")
  
  var month=0;
  
  
  
  var days=0;
  
  var subam=0
  
  var dayinyear=0;
  
  
  
  for(var i=0; i<months.length; i++){
   
    
    
    dayinyear=dayinyear+months[i].days
    
    
    
    
  }
  
  //Math.floor(day/dayinyear)
  
  day=day-(dayinyear*(Math.floor(day/dayinyear)))
  
  
  //console.log(day)
  
  //console.log(day)
  
  //console.log(dayinyear)
  
  var monthc=0;
  
  var lastm=0;
  
  for(var i=0; i<months.length; i++){
   
    
    
      
     
     
        
        if(monthc<day){
         
          monthc=monthc+months[i].days
         
           month=month+1
          
          
          
          lastm=months[i].days
          
        }
        
      
      
      
    
    
   
  }
  
  if(day%dayinyear<months[0].days){
    
    
  }
  
  //console.log(subam)
  
 //if(subam>day
  //console.log(month)
  
  month=month-1;
  
  //month=month%months.length-1
  
  //subam=subam-months[month].days
  
  //console.log(day)
  //console.log(monthc)
  
  monthc=monthc-lastm
  
  
  
  //day=day-monthc
  
var textday=day-monthc;
  
  var ending=""
  
  if((textday)%10===1){
   
    ending="st"
    
  }
  if((textday)%10===2){
   
    ending="nd"
    
  }
  
  if((textday)%10===3){
   
    ending="rd"
    
  }
  
  if((textday)%10>3){
   
    ending="th"
    
  }
  
  if((textday)===11){
   
    ending="th"
    
  }
   if((textday)===12){
   
    ending="th"
    
  }
   if((textday)===13){
   
    ending="th"
    
  }
  
  
  day=Math.floor((Math.round(ticks/1000/dividea*60))/1440)
  
  var year=Math.floor(day/dayinyear)
  
  //console.log(day)
  //console.log(subam)
  
  
  //subam=subam+(Math.floor((day/dayinyear)*dayinyear))
   var add=""
  
   if(((Math.floor((ticks/1000/dividea*60))-(day*24*60))%60)<10){
    
    add="0"
    
  }
  
  var hofd=(Math.floor((ticks/1000/60/dividea*60))-(day*24));
  
  var sofd=((Math.floor((ticks/1000/dividea*60))-(day*24*60))%60);
  
  
  if(hofd===0 && sofd===0 && said===false && ticks>100){
        
         for(var i=0; i<users.length; i++){
       
       if(searchid(users[i].id,users).status==="Awake"){
      
      
        
         //client.users.get(users[i].id).send("The sun is rising")
         
         client.users.get(users[i].id).send("A new day has begun.\nIt is the "+(day-monthc)+ending+" of the month "+months[month].name+" in the year "+year)
  
         
         
         said=true
       }
         
       }
         
       }
  
  if(hofd===7 && sofd===0 && said===false){
        
         for(var i=0; i<users.length; i++){
       
       if(searchid(users[i].id,users).status==="Awake"){
      
      
        
        client.users.get(users[i].id).send("The sun is rising")
         
         //client.users.get(users[i].id).send("It is the "+(day-subam)+" of the month "+months[month].name+" in the year "+year)
  
         
         
         said=true
       }
         
       }
         
       }
  
  if(hofd===12 && sofd===0 && said===false){
        
         for(var i=0; i<users.length; i++){
       
       if(searchid(users[i].id,users).status==="Awake"){
      
      
        
        client.users.get(users[i].id).send("It is noon")
         
         said=true
         
       }
         
       }
         
       }
       
if(hofd===20 && sofd===0 && said===false){
        
         for(var i=0; i<users.length; i++){
       
       if(searchid(users[i].id,users).status==="Awake"){
      
      
        
        client.users.get(users[i].id).send("The sun sets over the world of Hyrelious")
         
         said=true
         
       }
         
       }
         
       }

  if(sofd===1){
   
    said=false
    
  }
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}