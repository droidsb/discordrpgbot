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



module.exports.run = async (client, message, args, prefix,ticks,users,items,locations) => {

  var server=fs.readFileSync('./userserver',"utf8")



server=JSON.parse(server)
  
  if(message.channel.type!=="dm"){
    if(searchid(message.author.id,server)===null || searchid(message.author.id,server)===undefined){
     
      server.push({id: message.author.id, server: message.guild.id})
      
      message.channel.send("You have set your dms as this guild!")
      
    }
    
    else{
server[server.indexOf(searchid(message.author.id,server))]={id: message.author.id, server: message.guild.id}
      
      message.channel.send("You have set your dms as guild "+searchid(message.author.id,server).server)
                                                            
}
  }
  else{message.channel.send("You must set your world outside of the dm!")}
  
  fs.writeFileSync('./userserver', JSON.stringify(server), 'utf8');

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}