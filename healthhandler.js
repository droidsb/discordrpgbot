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




module.exports.run = async (client,users,items,locations,mobs,moblist,cooldown,server,sid) => {
  
  var healthcheck=fs.readFileSync('./healthcheck',"utf8")

//console.log(

healthcheck=JSON.parse(healthcheck)
  
  if(searchid(sid,server)!==null || searchid(sid,server)!==undefined){
  
  //console.log(healthcheck)
  
var usrserver=searchid(sid,server).server;
    
    //console.log(searchid(usrserver,users).data)
    
   // console.log(searchid(usrserver,users).data.length)
    
     for(var i=0; i<searchid(usrserver,users).data.length; i++){
      
     
        
      //console.log(searchid(usrserver,users).data[i].hp)
       //console.log(searchid(usrserver,healthcheck).data[i].hp)
        
 //console.log((searchid(usrserver,users).data[i].hp)-(searchid(usrserver,healthcheck).data[i].hp))
        
        
      //console.log((searchid(usrserver,users).data[i].hp)-(searchid(users[i].id,healthcheck).data[i].hp))
      
    //if(searchid(usrserver,users).data[i].hp!==searchid(usrserver,healthcheck).data[i].hp){
      
   // }
     
    }
    
    
    
    if(true){
    
    //console.log(usrserver)
  
  //if(searchid(usrserver,healthcheck).data.length===0){
  
  //console.log(searchid(usrserver,users).data.length)
    
/*for(var i=0; i<searchid(usrserver,users).data.length; i++){
  
   
   searchid(usrserver,healthcheck).data[i]={id: searchid(usrserver,users).data[i].id, hp: searchid(usrserver,users).data[i].hp}
     
  
    
     
     
   }
  
  fs.writeFileSync('./healthcheck', JSON.stringify(healthcheck), 'utf8');*/
    
  //}
  
  
//  console.log(searchid(usrserver,users.data))
  

    for(var i=0; i<searchid(usrserver,users).data.length; i++){
      
      if(searchid(usrserver,users).data[i].hp!==undefined || searchid(usrserver,users).data[i].hp!==null){
        
      //console.log(searchid(usrserver,users).data[i].hp)
        
 //console.log((searchid(usrserver,users).data[i].hp)-(searchid(usrserver,healthcheck).data[i].hp))
        
        
      //console.log((searchid(usrserver,users).data[i].hp)-(searchid(users[i].id,healthcheck).data[i].hp))
        
       // console.log(searchid(usrserver,users).data)
      
    if(searchid(usrserver,users).data[i].hp!==searchid(usrserver,healthcheck).data[i].hp){
       //if(false){
        //console.log("check yee")
        
        var hlog=(searchid(usrserver,users).data[i].hp)-(searchid(usrserver,healthcheck).data[i].hp);
        
       hlog=Math.round(hlog * 10) / 10
        
       if(hlog>0){
       client.users.get(searchid(usrserver,users).data[i].id).send("**+"+hlog+" health**")
       }
        
        if(hlog<0){
       client.users.get(searchid(usrserver,users).data[i].id).send("**"+hlog+" health**")
       }
      
        
        searchid(usrserver,healthcheck).data[i].hp=searchid(usrserver,users).data[i].hp;
        
      fs.writeFileSync('./healthcheck', JSON.stringify(healthcheck), 'utf8');
        
      }
      }
    
    if(searchid(searchid(usrserver,users).data[i].id, searchid(usrserver,users).data).hp>40){
      
      searchid(searchid(usrserver,users).data[i].id, searchid(usrserver,users).data).hp=40;
    }
   
    if(searchid(searchid(usrserver,users).data[i].id, searchid(usrserver,users).data).hp<=0){
      
      for(var p=0; p<searchid(searchid(usrserver,users).data[i].id, searchid(usrserver,users).data).items.length; p++){
        
      searchid(searchid(searchid(usrserver,users).data[i].id, searchid(usrserver,users).data).location,searchid(usrserver,locations).data).items.push(searchid(searchid(usrserver,users).data[i].id, searchid(usrserver,users).data).items[p])
        
        
      }
      
      //.push(searchid(users[i].id, users).items)
      
      searchid(searchid(usrserver,users).data[i].id, searchid(usrserver,users).data).items=[]
     
      searchid(searchid(usrserver,users).data[i].id, searchid(usrserver,users).data).location=0;
      
       searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).equip=false 
  searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).armor[0]=false
    searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).armor[1]=false
    searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).armor[2]=false
    searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).armor[3]=false
   searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).armor[4]=false
      
      //users[i].send("You died!");
      
      client.users.get(searchid(usrserver,users).data[i].id).send("**You died!**")
      
      for(var p=0; p<searchid(usrserver,users).data.length; p++){
        
        if(searchid(searchid(usrserver,users).data[p].id,searchid(usrserver,users).data).status==="Awake"){
        
        client.users.get(searchid(usrserver,users).data[p].id).send("**"+searchid(usrserver,users).data[i].name+"** died!")
          
        }
      }
      
      searchid(usrserver,users).data[i].hp=40;
      
      fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
    
    fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
      
      fs.writeFileSync('./healthcheck', JSON.stringify(healthcheck), 'utf8');
      
      
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