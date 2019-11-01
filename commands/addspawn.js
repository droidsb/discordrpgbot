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
 
 var spawnlist=fs.readFileSync('./spawnlist',"utf8")



spawnlist=JSON.parse(spawnlist)
  var mes=message.content.replace(prefix+"addspawn ","")
 
  var name=mes.split(" ")[0]
  
  var max=mes.split(" ")[1]
  
 // var ml=searchid(usrserver,moblist)
  
  //console.log(ml)
  
  name=searchname(name,searchid(usrserver,moblist).data).name
  
  searchid(usrserver,spawnlist).data.push({name: name, max: Number(max)})
  
  
  fs.writeFileSync('./spawnlist', JSON.stringify(spawnlist), 'utf8');
 
  
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}