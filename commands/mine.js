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

module.exports.run = async (client, message, args, prefix,ticks,users,items,locations,mobs,moblist,cooldown,server) => {
  
  var usrserver=searchid(message.author.id,server).server
  
  
  
  var rams=5;
  
  var ramg=5;
  
  var rami=10;
  
  var found=0;
     
     var found2=0;
     
     var found3=0;
  
  
    
  
  
  if(searchid(message.author.id,searchid(usrserver,users).data).status==="Awake"){
  
     if(searchid(message.author.id,searchid(usrserver,users).data).location===13 || searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).name.includes("Shaft") || cooldown.length===0){
       
      // console.log(message.author.username)
       
      // console.log(cooldown)
       
       if(cooldown.includes(searchid(message.author.id,cooldown))===false || ticks>searchid(message.author.id,cooldown).time+5000){
    
    cooldown.splice(cooldown.indexOf(searchid(message.author.id,cooldown)),1)
       
       cooldown.push({id:message.author.id,time:ticks})
       
       var sir=Math.round(Math.random()*100);
       
       if(sir<=90 && sir>=10){
         
         
         
         for(var i=0; i<Math.round(Math.random()*rams); i++){
          
           searchid(message.author.id,searchid(usrserver,users).data).items.push(searchname("Silver",searchid(usrserver,items).data))
           
           found=found+1;
           
         }
       
         if(found>0){
        message.channel.send("Found "+found+" Silver");
         }
         
         
       }
       
      
       
        if(Math.round(Math.random()*100)>98){
      
          
          for(var i=0; i<Math.round(Math.random()*ramg); i++){
            
            
            searchid(message.author.id,searchid(usrserver,users).data).items.push(searchname("Gold",searchid(usrserver,items).data))
            
            found2=found2+1;
            
          }
          
          if(found2>0){
          message.channel.send("Found "+found2+" Gold");
          }
          
         
       }
       
       
        if(Math.round(Math.random()*100)>98){
      
          
          for(var i=0; i<Math.round(Math.random()*rami); i++){
            
            
            searchid(message.author.id,searchid(usrserver,users).data).items.push(searchname("Iron",searchid(usrserver,items).data))
            
            found3=found3+1;
            
          }
          
          if(found3>0){
          message.channel.send("Found "+found3+" Iron");
          }
          
         
       }
       
       if(found===0 && found2===0 && found3===0){message.channel.send("You found nothing")}

       fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
       
       }
    
    else{message.channel.send("You must wait "+Math.round(((searchid(message.author.id,cooldown).time+5000)-(ticks))/1000)+" seconds.")}
       
     }
     
     else{message.channel.send("You cannot mine here")}
    
 }
  
  else{message.channel.send("You flail around in your sleep. You can't mine while sleeping! Do `"+prefix+"wake` to wake up.")}
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}