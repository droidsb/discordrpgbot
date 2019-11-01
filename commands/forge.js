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
  
 
    
    var mes=message.content.replace(prefix+"forge ","")
    
    var amount=mes.split(" ")[0]
    
    var cname=mes.replace(amount+" ","")
    
    var fa=0;
    
    if(searchname("silver",searchid(usrserver,items).data).name.includes(cname) || searchname("gold",searchid(usrserver,items).data).name.includes(cname) && searchid(message.author.id,searchid(usrserver,users).data).items.indexOf(searchname(cname,searchid(message.author.id,searchid(usrserver,users).data).items))!==null || searchid(message.author.id,searchid(usrserver,users).data).items.indexOf(searchname(cname,searchid(message.author.id,searchid(usrserver,users).data).items))!==undefined){
    
    for(var i=0; i<Number(amount); i++){
    
    if(searchname(cname,searchid(message.author.id,searchid(usrserver,users).data).items).name===searchname(cname,searchid(usrserver,items).data).name){
      
    searchid(message.author.id,searchid(usrserver,users).data).items.splice(searchid(message.author.id,searchid(usrserver,users).data).items.indexOf(searchname(cname,searchid(message.author.id,searchid(usrserver,users).data).items)),1)
    
      if("silver".includes(cname)){
      searchid(message.author.id,searchid(usrserver,users).data).money=searchid(message.author.id,searchid(usrserver,users).data).money+1;
      }
      
      if("gold".includes(cname)){
      searchid(message.author.id,searchid(usrserver,users).data).money=searchid(message.author.id,searchid(usrserver,users).data).money+10;
      }
      
      fa=fa+1;
      
    }
    
    }
      
      message.channel.send("Forged "+fa+" "+searchname(cname,searchid(usrserver,items).data).name)
      
      fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
    
    fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
      
    }
    
    else{message.channel.send("Cannot forge that item!")}
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}