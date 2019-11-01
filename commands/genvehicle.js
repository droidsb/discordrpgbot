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
  
   if(searchid(message.author.id,searchid(usrserver,users).data).rank==="Admin"){
         
          message.content=message.content.replace(prefix+"genvehicle ")
    
    var name=message.content.split(" ")[0]
    
    var location=message.content.split(" ")[1]
    
    var reach=message.content.split(" ")[2]
    
    
    //var id=message.content.split(" ")[2]
    
    
         
         
    
    var description=message.content.replace(name+" ","").replace(location+" ","").replace(reach+" ","").replace("undefined","")
    
    name=name.replace("_"," ").replace("undefined","")
         
         location=location.replace("_"," ").replace("undefined","")
    
    message.channel.send("createvehicle {\"name\":\""+name+"\",\"location\":"+Number(location)+",\"reach\":"+Number(reach)+",\"description\":\""+description+"\",\"id\":"+(searchid(usrserver,vehicles).data.length)+"}")
         
         
         
       }
    
    else{message.channel.send("You do not have access to this command!")}

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}