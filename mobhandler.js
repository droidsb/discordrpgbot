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

module.exports.run = async (client,ticks,users,items,locations,mobs,moblist,cooldown,server) => {
  
  
 var usrserver=server.server
 
 //console.log(usrserver)
 
 var moblsave=moblist;
  
  
  
 
  
  for(var i=0; i<searchid(usrserver,mobs).data.length; i++){
    
    var umob=searchid(usrserver,mobs).data[i];
    
    
//    umob.inv.splice(umob.inv.indexOf(null),1)
    
    if(umob.type==="hostile"){
     
      
      for(var p=0; p<searchid(usrserver, users).data.length; p++){
        
        var usr=searchid(usrserver, users).data[p];
       
        if(usr.location===umob.location){
          
          var att=Math.round(Math.random()*100)
          
          //console.log(att)
          
          if(att>98){
         
          
          var ran=Math.round(Math.random()*(umob.attacks.length-1))
          
        //console.log(umob)
          
          var attack=umob.attacks[ran]
          
          //console.log(umob.attacks[0].dmg)
            
           // console.log(attack.description)
          
          var dmg=Math.round((Math.random()*(attack.dmg/2))+(attack.dmg/2))
          
         usr.hp=usr.hp-dmg
          
         client.users.get(usr.id).send("**"+umob.name+"** "+attack.description)
          
          
          }
        }
        
        
      }
      
      
    }
    
    var rand=Math.round(Math.random()*100)
 
 if(rand>99){
   
var rn=Math.round(Math.random()*1);
   
   //console.log(rn)
 
  if(rn===0){
   for(var p=0; p<searchid(usrserver,users).data.length; p++){
     
     if(searchid(usrserver,users).data[p].location===searchid(usrserver,mobs).data[i].location && searchid(usrserver,users).data[p].status==="Awake"){
     
      client.users.get(searchid(usrserver,users).data[p].id).send("**"+searchid(usrserver,mobs).data[i].name+"** says, \""+searchid(usrserver,mobs).data[i].sayings[Math.round(Math.random()*(searchid(usrserver,mobs).data[i].sayings.length-1))]+"\"")
       
     }
     
   }
    
    
  }
    
    if(rn===1){
   
    var choice=searchid(searchid(usrserver,mobs).data[i].location,searchid(usrserver,locations).data).travel[Math.round(Math.random()*(searchid(searchid(usrserver,mobs).data[i].location,searchid(usrserver,locations).data).travel.length-1))]
    
    //console.log(Number(choice))
      
      choice=Number(choice)
      
    if(searchid(usrserver,mobs).data[i].restrictions.includes(Number(choice))){
     
      var locsave=searchid(usrserver,mobs).data[i].location;
      
     for(var p=0; p<searchid(usrserver,users).data.length; p++){
       
       
     
     if(searchid(usrserver,users).data[p].location===searchid(usrserver,mobs).data[i].location && searchid(usrserver,users).data[p].status==="Awake"){
     
      client.users.get(searchid(usrserver,users).data[p].id).send("**"+searchid(usrserver,mobs).data[i].name+"** leaves to "+searchid(choice,searchid(usrserver,locations).data).travelname)
       
     }
       
     }
      
      searchid(usrserver,mobs).data[i].location=Number(choice);
      
      fs.writeFileSync('./mobs', JSON.stringify(mobs), 'utf8');
      fs.writeFileSync('./moblist', JSON.stringify(moblsave), 'utf8');
      
      for(var p=0; p<searchid(usrserver,users).data.length; p++){
     
     if(searchid(usrserver,users).data[p].location===searchid(usrserver,mobs).data[i].location && searchid(usrserver,users).data[p].status==="Awake"){
     
      client.users.get(searchid(usrserver,users).data[p].id).send("**"+searchid(usrserver,mobs).data[i].name+"** arrives from "+searchid(locsave,searchid(usrserver,locations).data).travelname)
       
     }
       
     }
      
    }
      
    }
    
  }
    
   

   
    
    
  }

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}