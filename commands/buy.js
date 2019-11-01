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
   
   
   var citem=message.content.replace(prefix+"buy ","")
   
   
   if(searchid(searchid(message.author.id, searchid(usrserver,users).data).location,searchid(usrserver,locations).data).name.includes(".shop")){
    
   var shop=searchid(searchid(message.author.id, searchid(usrserver,users).data).location,searchid(usrserver,locations).data).shop
   
   //console.log(shop)
     
     if(searchname(citem,shop)!==null || searchname(citem,shop)!==undefined){
   
   if((searchid(message.author.id, searchid(usrserver,users).data).money)-(searchname(citem,shop).price)>=0){
   
   searchid(message.author.id, searchid(usrserver,users).data).money=(searchid(message.author.id, searchid(usrserver,users).data).money)-(searchname(citem,shop).price)
     
     searchid(message.author.id, searchid(usrserver,users).data).items.push( searchname(citem,shop).item)
     //searchname(item,shop).item
     
    //console.log(searchid(searchid(message.author.id, searchid(usrserver,users).data).location,searchid(usrserver,locations).data).shop)
     
     message.channel.send("You bought **"+searchname(citem,shop).name+"**.")
     
   }
       
       else{message.channel.send("You do not have enough money!")}
     
     fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
    
    fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
       
     }
     
     else{message.channel.send("There is no such item in this shop")}
     
   }
  
  else{message.channel.send("You are not in a valid shop")}
  
  
  
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}