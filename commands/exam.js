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
  
   var item=message.content.replace(prefix+"exam ","")
     
     //console.log(searchname(searchid(message.author.id,users).location,locations).items)
     
     //console.log(searchid(message.author.id,users).items)
     
     //console.log(searchname(item,items))
     
     //includes(searchname(item,items))
     
     //console.log(searchid(message.author.id,users).items)
     //searchname(searchid(message.author.id,users).location,locations).items.includes(searchname(item,items)) || 
     if(searchid(message.author.id,searchid(usrserver,users).data).items.includes(searchname(item,searchid(usrserver,items).data))){
       
       
       
       
     
     //console.log("sup")
     
     
     
     message.channel.send("**"+searchname(item,searchid(usrserver,items).data).name+"**\n"+searchname(item,searchid(usrserver,items).data).description)
     
     }
     
     else{message.channel.send("Could not find anything named **"+item+"**")}

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}