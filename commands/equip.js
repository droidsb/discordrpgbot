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
  

 var wep=message.content.replace(prefix+"equip ","").replace("undefined","")
 
 if(searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).name!==null || searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).name!== undefined){
 
if(searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).type==="weapon"){
  
 searchid(message.author.id,searchid(usrserver,users).data).equip=searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).name
  
  
  message.channel.send("You equipped a **"+searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).name+"**")
  
  fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
  
}
   
  
  
  if(searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).type.includes("armor")){
    
    if(searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).type.includes("helmet")){
      
      searchid(message.author.id,searchid(usrserver,users).data).armor[0]=searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items)
  
  
    message.channel.send("You equipped a **"+searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).name+"**")
  
      
      fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
      
    }
     if(searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).type.includes("chestplate")){
      
      searchid(message.author.id,searchid(usrserver,users).data).armor[1]=searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items)
  
  
    message.channel.send("You equipped a **"+searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).name+"**")
  
      
      fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
      
    }
     if(searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).type.includes("pants")){
      
      searchid(message.author.id,searchid(usrserver,users).data).armor[2]=searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items)
  
  
    message.channel.send("You equipped a **"+searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).name+"**")
  
      
      fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
      
    }
   if(searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).type.includes("boots")){
      
      searchid(message.author.id,searchid(usrserver,users).data).armor[3]=searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items)
  
  
    message.channel.send("You equipped a **"+searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).name+"**")
  
      
      fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
      
    }
    
    if(searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).type.includes("shield")){
      
      searchid(message.author.id,searchid(usrserver,users).data).armor[4]=searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items)
  
  
    message.channel.send("You equipped a **"+searchname(wep,searchid(message.author.id,searchid(usrserver,users).data).items).name+"**")
  
      
      fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
      
    }
  
 
}
   
   //else{message.channel.send("That is not a weapon/armor!")}

 }
  
  else{message.channel.send("Could not find item")}
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}