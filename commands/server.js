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
  
  if(message.author.id==='214366501686214656'){
  
   

      for(var i=0; i<searchid(usrserver,users).data.length; i++){
       
        if(searchid(searchid(usrserver,users).data,server)===null || searchid(searchid(usrserver,users).data,server)===undefined){
     
      server.push({id: searchid(usrserver,users).data[i].id, server: message.guild.id})
      
      //message.channel.send("You have set your dms as this guild!")
      
    }
    
    else{
server[server.indexOf(searchid(searchid(usrserver,users).data[i].id,server))]={id: searchid(usrserver,users).data[i].id, server: message.guild.id}
}
        
        
      }
    
    message.channel.send("You have set your dms as this guild!")
    
      fs.writeFileSync('./userserver', JSON.stringify(server), 'utf8');
  }
  
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}