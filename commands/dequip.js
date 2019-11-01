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
  
  

 var wep=message.content.replace(prefix+"dequip ","").replace("undefined","")
 
if(wep==="weapon"){
  
 searchid(message.author.id,searchid(usrserver,users).data).equip=false 
  
  message.channel.send("You dequipped your weapon.")
  
}
  
  if(wep==="armor"){
  
 searchid(message.author.id,searchid(usrserver,users).data).armor[0]=false
    searchid(message.author.id,searchid(usrserver,users).data).armor[1]=false
    searchid(message.author.id,searchid(usrserver,users).data).armor[2]=false
    searchid(message.author.id,searchid(usrserver,users).data).armor[3]=false
    
     message.channel.send("You dequipped your armor.")
  
}
  
 
  
  if(wep==="shield"){
  
 
    searchid(message.author.id,searchid(usrserver,users).data).armor[4]=false
    
     message.channel.send("You dequipped your shield.")
  
}
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}