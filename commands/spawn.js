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
  
 //var moblsave=moblist
  
if(searchid(message.author.id,searchid(usrserver,users).data).rank==="Admin"){
 
  var spawn=message.content.replace(prefix+"spawn ","")
  
  if(searchname(spawn,searchid(usrserver,moblist).data)!==undefined || searchname(spawn,searchid(usrserver,moblist).data)!==null){
  
   var ran=(Math.random()*1000000)
   
   //console.log(ran)
    
    searchname(spawn,searchid(usrserver,moblist).data).id=ran
   
  // var save=searchname(spawn,searchid(usrserver,moblist).data).id;
    
     fs.writeFileSync('./moblist', JSON.stringify(moblist), 'utf8');
    
    var moblist=fs.readFileSync('./moblist',"utf8")


moblist=JSON.parse(moblist)
    
    searchname(spawn,searchid(usrserver,moblist).data).hp=searchname(spawn,searchid(usrserver,moblist).data).maxhp
    
  searchid(usrserver,mobs).data.push(searchname(spawn,searchid(usrserver,moblist).data))
    
    
    
    //searchid(save,searchid(usrserver,mobs).data).id=ran
    
    
    
   // console.log(searchname(spawn,searchid(usrserver,moblist).data).inv)
    
    //console.log(searchid(usrserver,moblist).data)
    
    //fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
    fs.writeFileSync('./mobs', JSON.stringify(mobs), 'utf8');
    
   //  fs.writeFileSync('./moblist', JSON.stringify(moblsave), 'utf8');
    
    message.channel.send("Spawned in **"+searchname(spawn,searchid(usrserver,moblist).data).name+"**!")
    
    //console.log(ran)
    
  }
  
}
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}