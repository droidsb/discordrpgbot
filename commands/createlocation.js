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
  
 if(message.author.id==='214366501686214656' || searchid(message.author.id,searchid(usrserver,users).data).rank==="Admin"){
   
    var cl=message.content.replace(prefix+"createLocation ","")
    
    //console.log(cl)
    
    cl=JSON.parse(cl);
    
    
    
   /*var cname=cl.split(' ')
    
    //console.log(cl)
    
    var lname=cname[0];
    
    var ldescription=cl.replace(lname,"");
    
    locations.push({name: lname, description: ldescription})*/
    
    searchid(usrserver,locations).data.push(cl)
    
    //console.log(locations)
      
/*      searchid(14,searchid(usrserver,locations).data).travel=[];
  
  for(var i=0; i<searchid(usrserver,locations).data.length; i++){
  
  searchid(14,searchid,locations).data.travel.push(searchid(i,searchid(usrserver,locations).data).id)
    
  }*/
    
    fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
      
    }
    
    else{message.channel.send("You do not have access to this command!")}
   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}