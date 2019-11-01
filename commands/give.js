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
   
     var mes=message.content.replace(prefix+"give ")
    
    var amountm=mes.split(" ")[0].replace(undefined,"")
    
    var item=mes.replace(amountm+" ","").replace(undefined,"")
    
   
    
    var given=0;
    
    
    if(searchname(item,searchid(usrserver,items).data)!==null || searchname(item,searchid(usrserver,items).data)!==undefined){
      
      for(var i=0; i<Number(amountm); i++){
        
        if(searchname(item,searchid(usrserver,items).data)!==null){
    searchid(message.author.id,searchid(usrserver,users).data).items.push(searchname(item,searchid(usrserver,items).data))
        
        given=given+1;
        }
      }
    
    //items.push(JSON.parse(item))
    
    //fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
     
     message.channel.send("You have been given "+given+" **"+searchname(item,searchid(usrserver,items).data).name+"**\n")
    
    
    fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
    }
    
     }
     
     
     else{message.channel.send("You do not have access to this command!")}

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}