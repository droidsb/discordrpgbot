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
    
    if(message.content.split(" ").length===5){
         
          message.content=message.content.replace(prefix+"genmob ")
    
    var name=message.content.split(" ")[0]
    
    var location=message.content.split(" ")[1]
    
    var type=message.content.split(" ")[2]
    
    var health=message.content.split(" ")[3]
    
   // var restrictions=message.content.split(" ")[2]
    
   // var type=message.content.split(" ")[3]
    
    
         
         
    
    //var description=message.content.replace(name+" ","").replace(lifetime+" ","").replace(chance+" ","").replace(type+" ","").replace("undefined","")
    
    name=name.replace("_"," ").replace("undefined","")
    
    type=type.replace("_"," ").replace("undefined","")
    
    message.channel.send("addmob {\"name\":\""+name+"\",\"id\":0,\"inv\":[]\"location\":"+location+",\"restrictions\":[],\"sayings\":[],\"type\":\""+type+"\",\"attacks\":[],\"hp\":"+health+",\"maxhp\":"+health+"}")
         
    }
    
    else{message.channel.send("Not enough info. Format is `genmob (name) (location id) (type)`")}
         
       }
    
    else{message.channel.send("You do not have access to this command!")}

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}