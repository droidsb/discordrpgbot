const Discord = require("discord.js");
const client = new Discord.Client();

var readline = require('readline-sync')

var fs = require('fs');

var mobHand = require('./mobhandler.js');

var timeHand = require('./timehandler.js');

var healthHand = require('./healthhandler.js');

var spawnHand=require('./mobspawning.js');

const discord_token = process.env.TOKEN;

var express = require('express');
var app = express();

var cooldown=[]

var users=[]

var locations=[]



var users=fs.readFileSync('./userdata',"utf8")



users=JSON.parse(users)



var locations=fs.readFileSync('./locations','utf8')

locations=JSON.parse(locations)


var items=fs.readFileSync('./items',"utf8")



items=JSON.parse(items)


var mobs=fs.readFileSync('./mobs',"utf8")



mobs=JSON.parse(mobs)

var moblist=fs.readFileSync('./moblist',"utf8")


moblist=JSON.parse(moblist)

var server=fs.readFileSync('./userserver',"utf8")



server=JSON.parse(server)

var healthcheck=fs.readFileSync('./healthcheck',"utf8")



healthcheck=JSON.parse(healthcheck)



var vehicles=fs.readFileSync('./vehicles',"utf8")



vehicles=JSON.parse(vehicles)

var spawnlist=fs.readFileSync('./spawnlist',"utf8")



spawnlist=JSON.parse(spawnlist)



var ticks=0;

var savetick=0;


  
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);



var prefixsave=process.env.PREFIX;

var prefix=prefixsave;


var startup=false;

client.on("ready", () => {
  console.log("I am ready!");
    
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
 
  client.user.setPresence(`Serving ${client.guilds.size} servers`);
    client.user.setPresence({ game: { name: `Serving ${client.guilds.size} servers`, type: 0 } });
});

client.on("guildCreate", guild => {
  
 users.push({id: guild.id, data: []})
  items.push({id: guild.id, data: []})
  moblist.push({id: guild.id, data: []})
  mobs.push({id: guild.id, data: []})
  locations.push({id: guild.id, data: [{name:"Spawn",travelname:"Spawn",description:"Welcome to spawn!",items:[],travel:[],id:0}]})
  vehicles.push({id: guild.id, data: []})
  healthcheck.push({"id": guild.id, "data": []})
  
  spawnlist.push({"id": guild.id, "data": []})
  
  fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
  fs.writeFileSync('./items', JSON.stringify(items), 'utf8');
  fs.writeFileSync('./moblist', JSON.stringify(moblist), 'utf8');
  fs.writeFileSync('./mobs', JSON.stringify(mobs), 'utf8');
  fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
  fs.writeFileSync('./healthcheck', JSON.stringify(healthcheck), 'utf8');
   fs.writeFileSync('./vehicles', JSON.stringify(vehicles), 'utf8');
  fs.writeFileSync('./spawnlist', JSON.stringify(spawnlist), 'utf8');
 
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setPresence({ game: { name: `Serving ${client.guilds.size} servers`, type: 0 } });
});

client.on("guildDelete", guild => {

  
  users.splice(users.indexOf(searchid(guild.id,users)),1)
  
  items.splice(items.indexOf(searchid(guild.id,items)),1)
  
  moblist.splice(moblist.indexOf(searchid(guild.id,moblist)),1)
  
  mobs.splice(mobs.indexOf(searchid(guild.id,mobs)),1)
  
  locations.splice(locations.indexOf(searchid(guild.id,locations)),1)
  
 vehicles.splice(vehicles.indexOf(searchid(guild.id,vehicles)),1)
  
  healthcheck.splice(healthcheck.indexOf(searchid(guild.id,healthcheck)),1)
  
  spawnlist.splice(spawnlist.indexOf(searchid(guild.id,spawnlist)),1)
  
  fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
  fs.writeFileSync('./items', JSON.stringify(items), 'utf8');
  fs.writeFileSync('./moblist', JSON.stringify(moblist), 'utf8');
  fs.writeFileSync('./mobs', JSON.stringify(mobs), 'utf8');
  fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
   fs.writeFileSync('./healthcheck', JSON.stringify(healthcheck), 'utf8');
   fs.writeFileSync('./vehicles', JSON.stringify(vehicles), 'utf8');
   fs.writeFileSync('./spawnlist', JSON.stringify(spawnlist), 'utf8');
 
  
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setPresence({ game: { name: `Serving ${client.guilds.size} servers`, type: 0 } });
    //client.user.setPresence({ game: { name: 'nameGoesHere', type: 0 } })
    

  console.log(client.guilds.keyArray());
    
    //const guildc = client.guilds.map(g => g.name).join("\n")
    //client.guilds.get().channels.find("topic", "testpass");
    
    
  startup=true;
  
});

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
var d = new Date();
var n = d.getTime();


//console.log("test")



//console.log(client.guilds.array().length)

for(var g=0; g<client.guilds.size; g++){
  
  console.log("test")
  

  var users=fs.readFileSync('./userdata',"utf8")



users=JSON.parse(users)



var locations=fs.readFileSync('./locations','utf8')

locations=JSON.parse(locations)


var items=fs.readFileSync('./items',"utf8")



items=JSON.parse(items)


var mobs=fs.readFileSync('./mobs',"utf8")



mobs=JSON.parse(mobs)

var moblist=fs.readFileSync('./moblist',"utf8")



moblist=JSON.parse(moblist)

  
  users=users[g].data
  items=items[g].data
  locations=locations[g].data
  mobs=mobs[g].data 


  

  
  

setInterval(function() {

timeHand.run(client,ticks,users,items,locations,mobs);
  
  
  
}, 500);
  
  


setInterval(function() {
  
  for(var i=0; i<users.length; i++){
  
  if(searchid(users[i].id, users).location===10){
    
    searchid(users[i].id, users).hp=searchid(users[i].id, users).hp-1;
    
   // client.users.get(users[i].id).send("**-1 hp**")
    
  }
  }
  
},10000);
  
  
    
    
  


  
}



console.log("check2");

//console.log(ticks)

setInterval(function() {
  
 
    



 
  
  
  for(var i=0; i<locations.length; i++){
   
   for(var t=0; t<locations[i].data.length; t++){
     
     
     for(var p=0; p<locations[i].data[t].items.length; p++){
    
       
       
       if(locations[i].data[t].items[p].droptime!==false && locations[i].data[t].items[p].lifetime!==false && locations[i].data[t].items[p].droptime<Math.round(ticks/1000)-locations[i].data[t].items[p].lifetime){
        
       //channel.send("**"+locations[i].items[p].name+"** withered away.")
       
     
        
         for(var x=0; x<users.length; x++){
           
           
        for(var l=0; l<users[x].data.length; l++){
          
          //for(var o=0; o<user[x].data[l].length; o++){
          //console.log(users.length)
          //console.log(users[x].data[l].location)
          
          //console.log(searchid(users[x].data[l].id,users))
          
         // if(searchid(users[x].data[l].id,users)!==undefined){
          
        if(users[x].data[l].location===locations[i].data[t].id && users[x].data[l].status==="Awake"){
       
        
        client.users.get(users[x].data[l].id).send("**"+locations[i].data[t].items[p].name+"** withered away.")
         
          
       // }
          
        //}
            
          }
       
          
        }
         }
        
       
        locations[i].data[t].items.splice(locations[i].data[t].items.indexOf(locations[i].data[t].items[p]),1)
       
        fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
    
    fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
        
        
       }
        
       }
     
   }
    
  
  }
   
    
  

 }, 1000);
		
setInterval(function() {
    
  
  
    if(Math.round((ticks+1553872577897)/1000)!==Math.round((new Date().getTime())/1000)){
    
    
    
    ticks=new Date().getTime()-1553872577897;
      
      //console.log(ticks)
    
    //console.log(Math.round(ticks/1000))
    }
  
 
 
  },500);


setInterval(function() {
    
  
  
  
  for(var i=0; i<server.length; i++){
  
  healthHand.run(client,users,items,locations,mobs,moblist,cooldown,server,server[i].id);
    
    
  }
  
 
  },500);

setInterval(function() {

  for(var i=0; i<server.length; i++){
    
mobHand.run(client,ticks,users,items,locations,mobs,moblist,cooldown,server[i]);
    
  }
  
}, 8000);




 var users=fs.readFileSync('./userdata',"utf8")



users=JSON.parse(users)


setInterval(function() {
  
  
  
  for(var g=0; g<users.length; g++){ 
    
    //console.log("hi1")
  
for(var i=0; i<users[g].data.length; i++){
  
   //console.log("hi2")
  
  if(users[g].data[i].status==="Awake"){
    
  
 
  if(ticks>users[g].data[i].inactive+1800000){
   
   users[g].data[i].status="Asleep"
    
   client.users.get(users[g].data[i].id).send("You have fallen asleep!")
    
    
    
  }
    
  }
  
}
    
  }
  
}, 5000);

/*setInterval(function() {

 var moblist=fs.readFileSync('./moblist',"utf8")


moblist=JSON.parse(moblist)
  
  console.log(moblist[0].data)
  
}, 5000);*/



setInterval(function() {
  
  //console.log(mobs.length)

  for(var i=0; i<mobs.length; i++){
    
spawnHand.run(client,ticks,users,items,locations,mobs,moblist,cooldown,mobs[i].id);
    
  }
  
}, 60000);



client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {

     // User Joins a voice channel

  } else if(newUserChannel === undefined){
    
    //console.log(oldUserChannel.members.array().length)

    if(oldUserChannel.members.filter(member => !member.user.bot).array().length==0){
      
      oldUserChannel.leave();
      
    }

  }
})

//console.log(client.guilds.array())


client.on("message", async message => {
  
  
  
  if (message.author.bot) return;
  
  if(message.channel.type==="dm"){
   
   prefix=""
   
 }
  else{prefix=prefixsave}
  
  if (message.content.indexOf(prefix) !== 0) return;
  
  if (message.content.includes(prefix) === false) return;
  
  if(message.content.startsWith(prefix+"mobclear")){
    
     var server=fs.readFileSync('./userserver',"utf8")



server=JSON.parse(server)
    
     var usrserver=searchid(message.author.id,server).server
    
if(searchid(message.author.id,searchid(usrserver,users).data).rank==="Admin"){
  
 
  
   searchid(usrserver,mobs).data=[]
   
   fs.writeFileSync('./mobs', JSON.stringify(mobs), 'utf8');
   
   
   
 }


     }
  
  

  // This is the best way to define args. Trust me.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  /* var users=fs.readFileSync('./userdata',"utf8")



users=JSON.parse(users)



var locations=fs.readFileSync('./locations','utf8')

locations=JSON.parse(locations)


var items=fs.readFileSync('./items',"utf8")



items=JSON.parse(items)


var mobs=fs.readFileSync('./mobs',"utf8")



mobs=JSON.parse(mobs)

var moblist=fs.readFileSync('./moblist',"utf8")



moblist=JSON.parse(moblist)

  
  
  users=searchid(message.guild.id,users).data
  items=searchid(message.guild.id,items).data
  locations=searchid(message.guild.id,locations).data
  mobs=searchid(message.guild.id,mobs).data*/
//console.log(ticks)
  // The list of if/else is replaced with those simple 2 lines:
  
  var server=fs.readFileSync('./userserver',"utf8")



server=JSON.parse(server)
  
 // message.channel.send("hello")
  
  
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args, prefix,ticks,users,items,locations,mobs,moblist,cooldown,server,vehicles);
   
    if(searchid(message.author.id,server)!==undefined){
    
    var usrserver=searchid(message.author.id,server).server
    
    if(searchid(message.author.id,searchid(usrserver,users).data)!==undefined || searchid(message.author.id,searchid(usrserver,users).data)!==null){
     
     searchid(message.author.id,searchid(usrserver,users).data).inactive=ticks
      
    }
    
 fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
      
    }
  } catch (err) {
    console.error(err);
  
  
  }
  
    
  
});

client.login(discord_token);