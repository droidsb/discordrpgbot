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
  
 var inv="";
    
    if(searchid(message.author.id,searchid(usrserver,users).data).items.length===0){
      
     
      inv="_No items in your inventory!_"
      
      
    }
    
    var itemp=[];
    
    
    
    for(var i=0; i<searchid(message.author.id,searchid(usrserver,users).data).items.length; i++){
    
      itemp.push(searchid(message.author.id,searchid(usrserver,users).data).items[i].name)
      
    }
    
   
    
    var spliced=[];
    
    var ram=[]
    
     for(var a=0; a<itemp.length; a++){
       
       //console.log("Hello2")
       
       var amount=0;
    
    for(var x=0; x<itemp.length; x++){
      
     
     
      if(itemp[a]===itemp[x] && a!==x){
        
        amount=amount+1
        
       //itemp[a]=itemp[a]+1;
        
       // console.log(a)
      // console.log(x)
        
       
        
       spliced.push(x)
        
        
        
        //console.log(itemp)
        
        
        
      
      
      }
    }
       
       //console.log(amount)
       if(searchname(itemp[a],ram)===undefined){
       ram.push({name:itemp[a], amount: amount+1})
         
       }
         
         }
    
   /* for(var i=0; i<spliced.length; i++){
     
      itemp.splice(spliced[i],1)
      
      
      
    }*/
    
    itemp=[];
    
    for(var i=0; i<ram.length; i++){
     if(ram[i].amount>0){
      itemp.push(ram[i].name+" ("+ram[i].amount+")")
     }
      
    }
    
    
    //console.log(itemp)
    
    for(var i=0; i<itemp.length; i++){
      
     inv=inv+itemp[i]+"\n" 
      
    }
    //"**"+searchid(message.author.id,users).name+"**\nHP: "+searchid(message.author.id,users).hp+"\n"+"
    message.channel.send("**Items:**\n"+inv)
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}