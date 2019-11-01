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
  
 var mes=message.content.toLowerCase().replace(prefix+"get ")
    
    var amountm=mes.split(" ")[0].replace(undefined,"")
    
    var item=mes.replace(amountm+" ","").replace(undefined,"")
    
   
    
    var pickup=0;
    
    if(searchname(item,searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items)!==null && searchname(item,searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items)!==undefined){
      
    for(var i=0; i<Number(amountm); i++){
      
     
      
      if(searchname(item,searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items)!==null && searchname(item,searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items)!==undefined){
      
         pickup=pickup+1;
      
      var picked=searchname(item,searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items).name
      
      searchname(item,searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items).droptime=false
      
      
    searchid(message.author.id,searchid(usrserver,users).data).items.push(searchname(item,searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items))
    
    var iarr=searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items
    
    var iOfi=searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items.indexOf(searchname(item,searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items))
    
    iarr.splice(iOfi,1)
        
      }
      
      else{/*message.channel.send("Not enough items, picked up "+pickup+" items")*/}
      
   }
      
    message.channel.send("You picked up "+pickup+" **"+picked+"**");
      
      for(var i=0; i<searchid(usrserver,users).data.length; i++){
       
       if(searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).location===searchid(message.author.id,searchid(usrserver,users).data).location){
       if(searchid(usrserver,users).data[i].id!==message.author.id){
        
         if(client.users.get(searchid(usrserver,users).data[i].id)!==undefined){
        
        client.users.get(searchid(usrserver,users).data[i].id).send("**"+searchid(message.author.id,searchid(usrserver,users).data).name+"** picked up "+picked)
           
         }
         
      }
       }
     }
    
    
   
    fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
    
    fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
      
    }
    
   else{message.channel.send("Could not find item named **"+item+"**")} 
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}