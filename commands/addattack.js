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
    
    var addt=message.content.replace(prefix+"addattack ","")
    
    var name=addt.split(" ")[0]
    
    var data=addt.replace(name+" ","").replace(undefined,"")
    
    data=JSON.parse(data)
   
    //searchname(searchid(message.author.id,users).location,locations).travel.push(addt)
    
    searchname(name,searchid(usrserver,moblist).data).attacks.push(data)
   
   console.log(searchname(name,searchid(usrserver,moblist).data))
    
    //searchid(usrserver,moblist).data[searchid(usrserver,moblist).data.indexOf(searchname(addt))].push(addt)
    
    fs.writeFileSync('./moblist', JSON.stringify(moblist), 'utf8');
    
    
    
    
    }
  
  else{message.channel.send("You do not have access to this command!")}
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}