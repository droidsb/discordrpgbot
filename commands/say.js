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
  
 var name=searchid(message.author.id,searchid(usrserver,users).data).name
     
     var chat=message.content.replace(prefix+"say ","").replace(prefix+"Say ","")
     
     if(searchid(message.author.id, searchid(usrserver,users).data).status==="Awake"){
     
     for(var i=0; i<searchid(usrserver,users).data.length; i++){
       
       if(searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).location===searchid(message.author.id,searchid(usrserver,users).data).location && searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).status==="Awake"){
      
      if(searchid(usrserver,users).data[i].id===message.author.id){
        
         client.users.get(searchid(usrserver,users).data[i].id).send("**You** say, \""+chat+"\"")
         
       }
       
       else{
        client.users.get(searchid(usrserver,users).data[i].id).send("**"+name+"** says, \""+chat+"\"")
       }
         
       }
       
       
     }
       
       
     }
     
     if(searchid(message.author.id, searchid(usrserver,users).data).status==="Asleep"){
         
        message.channel.send("You mumble to yourself in your slumber. Do \`"+prefix+"wake\` command to wake up!")
         
       }
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}