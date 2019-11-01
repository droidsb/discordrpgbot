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
   
   var mes=message.content.replace(prefix+"addshopitem ","")
   
   var amount=mes.split(" ")[0]
   
   var item=mes.replace(amount+" ","").replace("undefined", "")
   
   if(searchid(message.author.id,searchid(usrserver,users).data).rank==="Admin"){
     
    if(searchid(item, searchid(usrserver, items).data)!==null || searchid(item, searchid(usrserver, items).data)!==undefined){
      
      
      
      var loc=searchid(searchid(message.author.id, searchid(usrserver,users).data).location, searchid(usrserver, locations).data)
      
      //searchid(item, searchid(usrserver, items).data)
      
      console.log(item)
      
      console.log(searchname(item, searchid(usrserver, items).data))
      
      loc.shop.push({name: searchname(item, searchid(usrserver, items).data).name, price:Number(amount), item: searchname(item, searchid(usrserver, items).data)})
      
      
      
      
    }
     
     else{message.channel.send("Could not find item")}
     fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
    
    fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
     
   }
  
  else{message.channel.send("You do not have access to this command!")}
  
  
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}