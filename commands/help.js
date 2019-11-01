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

module.exports.run = async (client, message, args, prefix) => {
  

  
    
  
  message.channel.send({embed:{
    
    "color": 4886754,
   
    "title": "Commands",
    
    
   
    "fields": [
      {
        "name": "Bot",
        "value": ""+prefix+"Ping\n"+prefix+"Help"
        
      },
      {
        "name": "RPG",
        "value": ""+prefix+"join (name)\n"+prefix+"go (location)\n"+prefix+"inv\n"+prefix+"look\n"+prefix+"get (number) (item)\n"+prefix+"drop (number) (item)\n"+prefix+"say (message)\n"+prefix+"me (action)\n"+prefix+"money\n"+prefix+"pay (username) (amount)\n"+prefix+"forge (amount) (material)\n"+prefix+"status\n"+prefix+"rank\n"+prefix+"sleep\n"+prefix+"wake\n"+prefix+"mine"
        
      }
    ]
  }});
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}