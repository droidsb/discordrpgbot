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
  

  var item=message.content.replace(prefix+"eat ","")
  
  
  
  if(searchname(item,searchid(usrserver,items).data).type==="food"){
    
   //console.log(searchname(item,searchid(message.author.id,users).items))
    
    if(searchid(message.author.id,searchid(usrserver,users).data).items.includes(searchname(item,searchid(message.author.id,searchid(usrserver,users).data).items)) && searchname(item,searchid(message.author.id,searchid(usrserver,users).data).items)!==null || searchname(item,searchid(message.author.id,searchid(usrserver,users).data).items)!==undefined){
       
     searchid(message.author.id,searchid(usrserver,users).data).items.splice(searchid(message.author.id,searchid(usrserver,users).data).items.indexOf(searchname(item,searchid(message.author.id,searchid(usrserver,users).data).items)),1)
      
      searchid(message.author.id,searchid(usrserver,users).data).hp=searchid(message.author.id,searchid(usrserver,users).data).hp+searchname(item,searchid(usrserver,items).data).chance
      
      message.channel.send("**You eat some "+(searchname(item,searchid(usrserver,items).data).name)+"**");
      
      
      for(var i=0; i<searchid(usrserver,users).data.length; i++){
       
       if(searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).location===searchid(message.author.id,searchid(usrserver,users).data).location && searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).status==="Awake"){
      
      if(searchid(usrserver,users).data[i].id!==message.author.id){
        
         client.users.get(searchid(usrserver,users).data[i].id).send("**"+searchid(message.author.id,searchid(usrserver,users).data).name+"** has eaten some **"+(searchname(item,searchid(usrserver,items).data).name)+"**")
         
       }
         
       }
       }
      
      //message.channel.send("**Restored "+(searchname(item,items).chance)+" hp**");
       
       }
    
    else{message.channel.send("Could not find item in your inventory")}
    
  }
  
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}