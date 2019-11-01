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
    
    var delt=message.content.replace(prefix+"deltravel ","")
    
    //console.log(delt)
   
    //searchname(searchid(message.author.id,users).location,locations).travel.push(addt)
    //console.log(searchid(searchid(message.author.id,users).location,locations).travel.indexOf(delt))
    searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location].travel.splice(searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location].travel.indexOf(delt),1)
    
    //locations[searchid(message.author.id,users).location].travel.push(addt)
    
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