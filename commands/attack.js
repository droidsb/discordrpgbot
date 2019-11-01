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
  
  if(cooldown.includes(searchid(message.author.id,cooldown))===false || ticks>searchid(message.author.id,cooldown).time+4000){
    
    cooldown.splice(cooldown.indexOf(searchid(message.author.id,cooldown)),1)
       
       cooldown.push({id:message.author.id,time:ticks})

 var person=message.content.replace(prefix+"attack ","").replace("undefined","")
 
 var usr=searchname(person,searchid(usrserver,users).data)
 
 var att=searchid(message.author.id,searchid(usrserver,users).data);
 
 if(usr.location===att.location){
   
   if(att.equip!==false){
     
     if(usr.status==="Awake"){
     
     var twen=Math.round(Math.random()*20)
     
     //console.log(twen)
     
     if(twen<=1){
       
      att.hp=att.hp-2;
       
       message.channel.send("**You accidently hit yourself with your own weapon**")
       
     }
     
     if(twen>9 && twen>1){
       
       var wepdam=searchname(att.equip,searchid(usrserver,items).data).chance
     
     var attacks=Math.round((Math.random()*(wepdam-(wepdam/2)))+(wepdam/2))
     
     attacks=attacks*(twen/10)
       
       
       
       var prot=0;
       
       if(usr.armor[0]!==false){
        
         prot=prot+usr.armor[0].chance;
         
       }
       if(usr.armor[1]!==false){
        
         prot=prot+usr.armor[1].chance;
         
       }
       
       if(usr.armor[2]!==false){
        
         prot=prot+usr.armor[2].chance;
         
       }
       if(usr.armor[3]!==false){
        
         prot=prot+usr.armor[3].chance;
         
       }
       
       if(usr.armor[4]!==false){
        
         prot=prot+usr.armor[4].chance;
         
       }
       
       prot=prot/10;
       
       prot=prot/2
       
       attacks=attacks-prot;
       
       attacks=Math.round(attacks * 10) / 10
       
       if(attacks<0){
         
         
         attacks=0;
         
         message.channel.send("Your attack failed")
      
          client.users.get(usr.id).send("**"+att.name+"**'s attack failed")
         
         
         if(prot>0){
         
           message.channel.send("You hit them but your sword glances off their armor")
      
          client.users.get(usr.id).send("**"+att.name+"** hits you but their sword glances off your armor.")
           
         }
         
       }
       
       if(attacks>0){
       
       message.channel.send("Attack multiplier **"+(twen/10)+"**\nEnemy armor subtractions **"+prot+"**\n**Did "+attacks+" damage**")
       message.channel.send("Their health "+(Math.round(usr.hp*10)/10)+"/40")
      
     
     client.users.get(usr.id).send("**"+att.name+"** attacked you with **"+searchname(att.equip,searchid(usrserver,items).data).name+"**")
     client.users.get(usr.id).send("Your health "+(Math.round(usr.hp*10)/10)+"/40")
     usr.hp=usr.hp-attacks;
         
       }
     }
     
     if(twen===2){message.channel.send("You failed to attack and tripped over your weapon")
      
          client.users.get(usr.id).send("**"+att.name+"** tried to attack you but tripped instead")
                 }
     
     if(twen===3){message.channel.send("You run forward to attack but swing your sword uselessly")
      
          client.users.get(usr.id).send("**"+att.name+"** runs towards you to attack but swings their sword uselessly")
                 }
     if(twen===4){message.channel.send("You leap forward to attack and swing, but miss your opponent")
      
          client.users.get(usr.id).send("**"+att.name+"** leaps towards you a takes a swing at you, but misses")
                 }
     
     if(twen===5){message.channel.send("You strike at your opponent but they block your hit easily")
      
          client.users.get(usr.id).send("**"+att.name+"** takes a swing at you but you easily block it")
                 }
     if(twen===6){message.channel.send("You jab at your opponent but they skillfully block it")
      
          client.users.get(usr.id).send("**"+att.name+"** attemps a jab but you are able to block it")
                 }
     if(twen===7){message.channel.send("You swing you sword at your opponent but they block it before it cuts into them")
      
          client.users.get(usr.id).send("**"+att.name+"** swings their sword at you, and you just block it before it hits you")
                 }
     if(twen===8){message.channel.send("You bring your sword down hard on your opponent and metal clangs loudly as they manage to block it.")
      
          client.users.get(usr.id).send("**"+att.name+"** brings their sword down on you but you bring you sword up to block it and a loud clang rings out")
                 }
     
     if(twen===9){message.channel.send("You swing your sword and they block it, but not good enough, your sword glances off them")
      
          client.users.get(usr.id).send("**"+att.name+"** swings their sword at you and you attempt to block it but miss a bit, their sword glances off you")
                 }


     }
     
     else{message.channel.send("You cannot attack a person while they are asleep!")}
   }
   
   else{message.channel.send("You have no weapon equipped!")}
   
   
 }
  
  else{message.channel.send("They are not in this location")}
    
  }
  
  else{message.channel.send("You must wait "+Math.round((((searchid(message.author.id,cooldown).time)+4000)-(ticks))/1000)+" seconds")}

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}