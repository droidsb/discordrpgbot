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
  
  var mes=message.content.toLowerCase().replace(prefix+"drop ","")  
    var amountm=mes.split(" ")[0].replace(undefined,"")
    
    var item=mes.replace(amountm+" ","").replace(undefined,"")
    
   
    
    var dropd=0;
    
    var tm=false;
    
    //searchid(message.author.id,users).items.push(searchname(item,searchname(searchid(message.author.id,users).location,locations).items))
    
    if(searchname(item,searchid(message.author.id,searchid(usrserver,users).data).items)!==null && searchname(item,searchid(message.author.id,searchid(usrserver,users).data).items)!==undefined){
      
      for(var i=0; i<Number(amountm); i++){
        
        if(searchname(item,searchid(message.author.id,searchid(usrserver,users).data).items)!==null && searchname(item,searchid(message.author.id,searchid(usrserver,users).data).items)!==undefined){
      
          dropd=dropd+1;
      
      var dropped=searchname(item,searchid(message.author.id,searchid(usrserver,users).data).items).name
    
    searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items.push(searchname(item,searchid(message.author.id,searchid(usrserver,users).data).items))
      
      searchname(dropped,searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items).droptime=Math.round(ticks/1000)
    
    var iarr=searchid(message.author.id,searchid(usrserver,users).data).items
    
    var iOfi=searchid(message.author.id,searchid(usrserver,users).data).items.indexOf(searchname(item,searchid(message.author.id,searchid(usrserver,users).data).items))
    
    iarr.splice(iOfi,1)
    
        }
        
        else{tm=true}
        
        
      }
      
      if(tm===true){
       
        message.channel.send("Not enough items, dropped "+dropd+" items")
        
      }
      
   message.channel.send("You dropped "+dropd+" **"+dropped+"**")
      
      for(var i=0; i<searchid(usrserver,users).data.length; i++){
       
       if(searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).location===searchid(message.author.id,searchid(usrserver,users).data).location){
       if(searchid(usrserver,users).data[i].id!==message.author.id){
        
        //console.log(searchid(usrserver,users).data[i].id)
         
         //console.log(searchid(usrserver,users).data[i].id)
         //console.log(client.users.get(searchid(usrserver,users).data[i].id))
         
         if(client.users.get(searchid(usrserver,users).data[i].id)!==undefined){
         
        client.users.get(searchid(usrserver,users).data[i].id).send("**"+searchid(message.author.id,searchid(usrserver,users).data).name+"** dropped "+dropped)
           
         }
         
      }
       }
     }
    
    fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
    
    fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
      
    }
    
    else{message.channel.send("No item named **"+item+"** in your inventory")}

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}