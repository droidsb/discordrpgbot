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
  
  
var id=message.content.toLowerCase().replace(prefix+"wizgo ","")
       
       if(searchid(message.author.id,searchid(usrserver,users).data).rank==="Admin"){
         
         searchid(message.author.id,searchid(usrserver,users).data).location=Number(id)
         
          
      fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
    
    fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
         
         
         
         //message.channel.send("You have Wizard Traveled to **"+searchid(Number(id),locations).name+"**.")
         message.channel.send("The world around you begins to shimmer and suddenly disappear. Then light starts coming back and you materialize at **"+searchid(Number(id),searchid(usrserver,locations).data).name+"**.")
          
         
          for(var i=0; i<users.length; i++){
       
       if(searchid(users[i].id,users).location===searchid(message.author.id,users).location){
       
      if(users[i].id!==message.author.id){
        
        
        
         if(searchid(Number(id),locations).name.includes(".hidden")===false&& searchid(users[i].id,users).status==="Awake"){
    
           
           
           
         client.users.get(users[i].id).send("The air in front of you starts to shimmer, suddenly you see **"+searchid(message.author.id,users).name+"** form in front of you, seemingly out of nowhere.")
           
         }
      
      }
       }
          }
       
         
       }
    
    else{message.channel.send("You do not have access to this command")}
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}