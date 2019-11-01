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
    
    
    
    var usrn=message.content.replace(prefix+"searchusr ","")
    
    var name=searchname(usrn,searchid(usrserver,users).data).name
    
    var location=searchid(searchname(usrn,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).name;
     
     var locationid=searchid(searchname(usrn,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).id;
     
     message.channel.send("**"+name+"** is at **"+location+"** ("+locationid+")")
    
    
    
    }
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}