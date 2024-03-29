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
    
    
    
    var locn=message.content.replace(prefix+"searchloc ","")
    
    if(isNaN(locn)===false){
      
      if(searchid(Number(locn),searchid(usrserver,locations).data)===undefined){message.channel.send("Could not find location")}
     
     else{
      var loc=searchid(Number(locn),searchid(usrserver,locations).data)
     
     message.channel.send("**Name: **"+loc.name+"\n**ID: **"+loc.id)
      
      }
      
    
      
    }
    
    if(isNaN(locn)===true){
    
      if(searchname(locn,searchid(usrserver,locations).data)===undefined){message.channel.send("Could not find location")}
      
      else{
     var loc=searchname(locn,searchid(usrserver,locations).data)
     
     message.channel.send("**Name: **"+loc.name+"\n**ID: **"+loc.id)
      }
    }
    
    }
  
  else{message.channel.send("You do not have access to this command!")}
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}