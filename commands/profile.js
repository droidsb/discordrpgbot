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
  
  //console.log(usrserver)
  
/* for(var i=0; i<users.length; i++){
    
    searchid(usrserver,users).data[i].armor[0]=false;
    searchid(usrserver,users).data[i].armor[1]=false;
    searchid(usrserver,users).data[i].armor[2]=false;
    searchid(usrserver,users).data[i].armor[3]=false;
    
  }
  fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');*/
  
   if(searchid(message.author.id, searchid(usrserver,users).data)!==undefined){
    
    var name=searchid(message.author.id, searchid(usrserver,users).data).name;
     
     var usr=""
    
    var health=searchid(message.author.id, searchid(usrserver,users).data).hp;
     
     if(message.content===prefix+"profile"){
     
      usr=searchid(message.author.id, searchid(usrserver,users).data)
      
      }
     
     
     
     if(message.content!==prefix+"profile"){
       
       var name=message.content.replace(prefix+"profile ", "")
       
       for(var i=0; i<searchid(usrserver,users).data.length; i++){
         
         var dusr=searchid(usrserver,users).data[i]
         
         var ausr=searchid(message.author.id, searchid(usrserver,users).data);
        
         if(dusr.location===ausr.location && dusr.name.toLowerCase().includes(name.toLowerCase())){
           
           usr=dusr;
           
         }
         
         
         
       }
     
      
      
      }
     
     //console.log(usr.name)
     
     if(message.content!==prefix+"profile" && usr===""){message.channel.send("No user with that name in this location")}
    
    var total=40;
     
     console.log(usr.armor)
     
     var helmet=usr.armor[0];
     
     var chestplate=usr.armor[1];
     
     var pants=usr.armor[2];
     
     var boots=usr.armor[3];
     
     var shield=usr.armor[4];
     
     /*for(var i=0; i<searchid(usrserver,users).data.length; i++){
       
       searchid(usrserver,users).data[i].armor[0]=false;
       searchid(usrserver,users).data[i].armor[1]=false;
       searchid(usrserver,users).data[i].armor[2]=false;
       searchid(usrserver,users).data[i].armor[3]=false;
      searchid(usrserver,users).data[i].armor[4]=false;
       
     }*/
     
     if(shield===null || shield===undefined){
       
      
       
       shield=false;
     }
     
     
     if(helmet===false || helmet===null){
       
      helmet={name: "No Helmet"}
       
     }
     
     if(chestplate===false || chestplate===null){
       
      chestplate={name: "No Chestplate"}
       
     }
     
     if(pants===false || pants===null){
       
      pants={name: "No Pants" }
       
     }
     
     if(boots===false || boots===null){
       
      boots={name: "No Boots" }
       
     }
     
     if(shield===false || shield===null){
       
      shield={name: "No Shield" }
       
     }
     
     
     
     var wep=usr.equip;
     
     if(usr.equip===false){
       
      wep="No weapon equipped" 
       
     }
     
    //console.log(usr.name)
     
    message.channel.send("**"+usr.name+": **"+(Math.round(health * 10) / 10)+"/"+total+" HP\n**Weapon: **"+wep+"\n**Armor:**\nHelmet: "+helmet.name+"\nChestplate: "+chestplate.name+"\nPants: "+pants.name+"\nBoots: "+boots.name+"\nShield: "+shield.name);
     
     //message.channel.send(helmet.name)
      
    }
    
    else{message.channel.send("Could not find account")}

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}