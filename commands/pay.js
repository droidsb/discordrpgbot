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
  
   var success=false;
    
    var pay=message.content.replace(prefix+"pay ","")
    
    pay=pay.split(" ")
    
    if(message.content.includes("@")){
    
    var p=pay[0].replace("<@","").replace(">","").replace("!","");
    
  
    }
    
    else{p=searchname(pay[0],searchid(usrserver,users).data)}
    var amount=Number(pay[1])
    
    //console.log(p)
    
    if(p!==undefined && searchid(message.author.id,searchid(usrserver,users).data)!==undefined && searchid(message.author.id,searchid(usrserver,users).data).money-amount>=0){
     
      searchid(message.author.id,searchid(usrserver,users).data).money=searchid(message.author.id,searchid(usrserver,users).data).money-amount;
    
    p.money=p.money+amount;
      
      message.channel.send("Sucessfully sent "+amount+" credits!");
      
      
      success=true
      
    }
    
    
    if(success===false){message.channel.send("Could not find that user/not enough funds")}

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}