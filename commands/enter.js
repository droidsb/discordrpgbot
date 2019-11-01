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

module.exports.run = async (client, message, args, prefix,ticks,users,items,locations,mobs,moblist,cooldown,server,vehicles) => {
  
  var usrserver=searchid(message.author.id,server).server
  
  var shipn=message.content.replace(prefix+"enter ","")
  
  console.log(searchid(usrserver,vehicles).data.length)
  
  for(var i=0; i<searchid(usrserver,vehicles).data.length; i++){
    
    console.log("yeet")
    
    if(searchid(usrserver,vehicles).data[i].name.toLowerCase().includes(shipn.toLowerCase()) && searchid(usrserver,vehicles).data[i].location===searchid(message.author.id, searchid(usrserver, users).data).location){
    
      searchid(message.author.id, searchid(usrserver,users).data).vehicleid=searchid(usrserver,vehicles).data[i].id;
      
      message.channel.send("You entered into **"+searchid(usrserver,vehicles).data[i].name+"**")
      message.channel.send(searchid(usrserver,vehicles).data[i].description)
      
    }
    
  }
  
 ///searchlocation(searchid(message.author.id,searchid(usrserver,users)).data.location,searchid(usrserver,vehicles))
                         
                         //,searchid(usrserver,vehicles).data)
  

}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}