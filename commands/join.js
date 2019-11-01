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
  
  var usrserver=message.guild.id;
  
  var healthcheck=fs.readFileSync('./healthcheck',"utf8")


healthcheck=JSON.parse(healthcheck)
  
  
    var userids=[];
  
  
  
 
  
  for(var i=0; i<searchid(usrserver,users).data.length; i++){
    
    userids.push(searchid(usrserver,users).data[i].id)
    
  }
  
  
  
  if(userids.includes(message.author.id)===true){
    
   message.channel.send("You already have an account"); 
    
  }
 
  
   if(message.content.replace(prefix+"join","")==="" && userids.includes(message.author.id)===false){
     
     message.channel.send("You must enter a name!");
     
     }
  
  if(userids.includes(message.author.id)===false && message.content.replace(prefix+"join","")!==""){
  
  name=message.content.replace(prefix+"join ","");
  
  searchid(usrserver,users).data.push({name: name, hp:40, equip:false, id: message.author.id, location: 0,items:[],armor: [false,false,false,false,false], money:0, rank:"User",status: "Awake","inactive":0,vehicleid:false})
    
  server.push({id: message.author.id, server: message.guild.id}) 
    
   searchid(message.guild.id, healthcheck).data.push({id: message.author.id, hp: 40}) 
    
   // fs.writeFileSync('./server', JSON.stringify(users), 'utf8');
    fs.writeFileSync('./healthcheck', JSON.stringify(healthcheck), 'utf8');
    //console.log(search("spawn",locations).description)
    
    var p=searchid(message.author.id,searchid(usrserver,users).data);
    
    //console.log(search('214366501686214656',users))
    
   // console.log(locations)
    
    //var ploc=searchid(searchid(message.author.id,searchid(usrserver,users).data).location,searchid(usrserver,locations).data)
    
 // message.channel.send("**"+ploc.name+":**\n"+ploc.description)
    
    message.channel.send("Do `look` in a DM with the bot!");
    
    fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
  
  }
  
  
  //{name: "Droidsb", ID: 1, location: "spawn"}
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}