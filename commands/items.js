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
  
if(searchid(message.author.id,searchid(usrserver,users).data).rank==="Admin"){
    
    //var listitems=message.content.replace(prefix+"addTravel ","")
         
         var iteml="";
    
        for(var i=0; i<searchid(usrserver,items).data.length; i++){
          
            iteml=iteml+searchid(usrserver,items).data[i].name+": "+searchid(usrserver,items).data[i].description+"\n"
          
        }
  
  
  
  message.channel.send("**Items:**");
  
  var tm="";
  
  for(var i=0; i<searchid(usrserver,items).data.length; i++){
          
      tm=tm+searchid(usrserver,items).data[i].name+": "+searchid(usrserver,items).data[i].description+"\n"
    
    if(i%10===0 && i>0){
      
      message.channel.send(tm);
      
      tm="";
      
    }
    
    //message.channel.send("A")
          
    }
    
         //message.channel.send("**Items:**\n"+iteml)
    
    }
    
     else{message.channel.send("You do not have access to this command!")}
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}