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
   
   var moblsave=moblist;
   
   //moblist=[];
   
   var mobname=message.content.replace(prefix+"attackmob ","")
   
   var user=searchid(message.author.id,searchid(usrserver,users).data)
   
   var loc=searchid(user.location,searchid(usrserver,locations).data)
   
   var mobhere=[]
   
   for(var i=0; i<searchid(usrserver,mobs).data.length; i++){
    
     if(searchid(usrserver,mobs).data[i].location===user.location){
       
       mobhere.push(searchid(usrserver,mobs).data[i])
     }
     
   }
  
 // console.log(mobname)
  
  //console.log(mobhere)
   
   var check=searchname(mobname,mobhere)
   
   var mob=searchid(check.id,searchid(usrserver,mobs).data)
  
 // console.log(mob.inv)
   
   var saveinv=searchname(mobname,searchid(usrserver,moblist).data).inv;
   
   if(mob!==null || mob!==undefined){
     
     
   
   if(Number(mob.location)===Number(user.location)){
     
    // if(mob.type==="hostile"){
       
       
        if(user.equip!==false){
     
     var twen=Math.round(Math.random()*20)
     
     //console.log(twen)
     
     if(twen<=1){
       
      user.hp=user.hp-2;
       
       message.channel.send("**You accidently hit yourself with your own weapon**")
       
     }
     
     if(twen>9 && twen>1){
       
       var wepdam=searchname(user.equip,searchid(usrserver,items).data).chance
     
     var attacks=Math.round((Math.random()*(wepdam-(wepdam/2)))+(wepdam/2))
     
     attacks=attacks*(twen/10)
       
       
       
      
       
       attacks=Math.round(attacks * 10) / 10
       
       if(attacks<0){
         
         
         attacks=0;
         
         message.channel.send("Your attack failed")
      
         
         
         
       
         
       }
       
       if(attacks>0){
         
         //console.log(searchid(usrserver,mobs).data)
         
        mob.hp=mob.hp-attacks;
         
         if(mob.hp<0){
           
          mob.hp=0
           
         }
       
       message.channel.send("Attack multiplier **"+(twen/10)+"**\n**Did "+attacks+" damage**\nTheir health "+(Math.round(mob.hp*10)/10))
       //message.channel.send("Their health "+(Math.round(mob.hp*10)/10))
      
     
     
     
         
         if(mob.hp<=0){
           
           //var save=mob.inv
           
           //console.log(mob.inv)
           
           console.log(saveinv)
           console.log(saveinv.length)
           
           for(var x=0; x<saveinv.length; x++){
             
              searchid(mob.location, searchid(usrserver,locations).data).items.push(saveinv[x])
             
             //console.log(x)
              
              
            }
           
          //message.channel.send("**"+mob.name+"** was killed by **"+user.name+"**!")
           
           for(var i=0; i<searchid(usrserver,users).data.length; i++){
             
             if(searchid(usrserver,users).data[i].location===searchid(message.author.id,searchid(usrserver,users).data).location && searchid(usrserver,users).data[i].status==="Awake"){
             
             client.users.get(searchid(usrserver,users).data[i].id).send("**"+mob.name+"** was killed by **"+user.name+"**!")
               
             }
             
            
             
             
           }
           
            
           
          searchid(usrserver,mobs).data.splice(searchid(mob.id,searchid(usrserver,mobs).data),1)
           
            fs.writeFileSync('./mobs', JSON.stringify(mobs), 'utf8');
           
           fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
           
         }
         
       }
     }
     
     if(twen===2){message.channel.send("You failed to attack and tripped over your weapon")
      
         
                 }
     
     if(twen===3){message.channel.send("You run forward to attack but swing your sword uselessly")
      
               
                 }
     if(twen===4){message.channel.send("You leap forward to attack and swing, but miss your opponent")
      
         
                 }
     
     if(twen===5){message.channel.send("You strike at your opponent but they block your hit easily")
      
          
                 }
     if(twen===6){message.channel.send("You jab at your opponent but they skillfully block it")
      
          
                  
                 }
     if(twen===7){message.channel.send("You swing you sword at your opponent but they block it before it cuts into them")
      
          
                  
                 }
     if(twen===8){message.channel.send("You bring your sword down hard on your opponent and metal clangs loudly as they manage to block it.")
      
          
                 }
     
     if(twen===9){message.channel.send("You swing your sword and they block it, but not good enough, your sword glances off them")
      
        
                 }


     
   }
   
   else{message.channel.send("You have no weapon equipped!")}
       
       
     //}
     
    // else{message.channel.send("That is not a hostile mob!")}
     
     
   }
     
     else{message.channel.send("No mob with that name in this location")}
   
   }
  
  else{message.channel.send("Could not find a mob with that name")}
  
  fs.writeFileSync('./moblist', JSON.stringify(moblsave), 'utf8');
  
  
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}