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

module.exports.run = async (client, message, args, prefix,ticks,users,items,locations,mobs,moblist,cooldown,server,vehicles) => {
  
  var usrserver=searchid(message.author.id,server).server
  
  var locname=message.content.replace(prefix+"go ","")
    
    //searchid(message.author.id,users).location
    
    if(searchid(message.author.id,searchid(usrserver,users).data).status==="Awake"){
      
      
       
    
    var loc=[];
    
    for(var i=0; i<searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location].travel.length; i++){
      
      loc.push(searchid(usrserver,locations).data[searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location].travel[i]])
      
      
    }
      
      
      if(searchid(message.author.id,searchid(usrserver,users).data).vehicleid!==false){
        
        
        
        var locationids=[];
        
        //for(var p=0; p<loc.length; p++){
        
       // var init=loc[p];
        
        //console.log(loc)
        
        
       //loc.push(searchid(usrserver,locations).data[searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location].travel[i]])
      for(var x=0; x<searchid(usrserver,vehicles).data[0].reach; x++){
       
       var init=loc[x];
          
          for(var i=0; i<init.travel.length; i++){
        
       var rep=searchid(Number(init.travel[i]),searchid(usrserver,locations).data)
     
      //if(searchid(Number(init.travel[i]),searchid(usrserver,locations).data).name.includes(".hidden")===false){
        
        //console.log(locationids)
       
         if(searchid(searchid(message.author.id, searchid(usrserver,users).data).location, searchid(usrserver,locations).data)!==searchid(Number(init.travel[i]),searchid(usrserver,locations).data)){

           locationids.push(searchid(Number(init.travel[i]),searchid(usrserver,locations).data))
           
         }
         
      //}
          
        
         /* for(var x=0; x<searchid(Number(init.travel[i]),searchid(usrserver,locations).data).travel.length; x++){
           
            locationids.push(searchid(Number( searchid(Number(init.travel[i]),searchid(usrserver,locations).data).travel[x]),searchid(usrserver,locations).data))
            
           
         
          
        }*/
                                     
                                     
        
            }
         
         //console.log(tvloc)
       
       loc=loc.concat(locationids)
         
        // console.log(locationids)
       
     }
        
      }
    
      
      //loc=loc.concat(locationids)
    
    loc=searchtravelname(locname,loc)
      
      var saveloc=loc;
    
    if(loc!==undefined){
    
    //console.log(loc)
      
     
    
    
   
    var mobsh="";
      
      for(var i=0; i<searchid(usrserver,mobs).data.length; i++){
        
       
      
        if(searchid(usrserver,mobs).data[i].location===loc.id){
         
          mobsh=mobsh+searchid(usrserver,mobs).data[i].name+"\n"
          
        }
        
      }
   
     
   
    
    var from=searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location].travelname
      
    
     var from2=searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location]
      
    for(var i=0; i<searchid(usrserver,users).data.length; i++){
       
       if(searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).location===searchid(message.author.id,searchid(usrserver,users).data).location){
       
      if(searchid(usrserver,users).data[i].id!==message.author.id){
        
          //client.users.get(users[i].id).send("**You** leave to "+loc.name)
         
         
       //}
       
      // else{
        
        
         if(loc.name.includes(".hidden")===false && searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).status==="Awake"){
           
         client.users.get(searchid(usrserver,users).data[i].id).send("**"+searchid(message.author.id,searchid(usrserver,users).data).name+"** leaves to "+loc.travelname)
           
         }
       }
       }
     }
    
    
    searchid(message.author.id,searchid(usrserver,users).data).location=loc.id
      
      if(searchid(message.author.id,searchid(usrserver,users).data).vehicleid!==false){
        
        var vid=searchid(message.author.id,searchid(usrserver,users).data).vehicleid;
        
        searchid(vid,searchid(usrserver,vehicles).data).location=loc.id
        
        for(var i=0; i<searchid(usrserver,users).data.length; i++){
          
         var su= searchid(usrserver,users).data;
          
         if(su[i].vehicleid===vid && su[i].id!==message.author.id){
          
           su[i].location=searchid(vid,searchid(usrserver,vehicles).data).location;
           
           
           
          
           
         }
          
        }
        
      }
    
    
   var loc=searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location]
    
    //searchid(message.author.id,users).location=loc.name
    
    var iteml="";
    
    if(loc.items.length===0){
      
      
     
      iteml="_No visible items_";
      
    }
    
    
    if(loc.items.length>0){
      
      var itemp=[]
      
     
      for(var i=0; i<loc.items.length; i++){
    
      itemp.push(loc.items[i].name)
      
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
    
    for(var i=0; i<spliced.length; i++){
     
      itemp.splice(spliced[i],1)
      
      
      
    }
    
    for(var i=0; i<ram.length; i++){
     if(ram[i].amount>1){
      itemp.push(ram[i].name+" ("+ram[i].amount+")")
     }
      
    }
    
    
    
    
    for(var i=0; i<itemp.length; i++){
      
     iteml=iteml+itemp[i]+"\n" 
      
    }
      
    }
    
   // message.channel.send("**Items:**\n"+inv)
    
  
      
    
    
    var tloc="";
    
    if(loc.travel.length>0){
    
    for(var i=0; i<loc.travel.length; i++){
      //console.log(locations[loc.travel[i]])
      
      if(searchid(usrserver,locations).data[loc.travel[i]].name.includes(".hidden")===false || searchid(message.author.id,searchid(usrserver,users).data).rank==="Wizard" ){
      
        if(searchid(usrserver,locations).data[loc.travel[i]].name.includes(".hidden")){
          
          tloc=tloc+searchid(usrserver,locations).data[loc.travel[i]].travelname+".hidden\n"
          
        }
        
        else{
      tloc=tloc+searchid(usrserver,locations).data[loc.travel[i]].travelname+"\n"
          
        }
          
          
        
      }
      
      
      
    }
      
    }
  
    //var inroom=users[i].location.filter(word => word===loc);;
    
    var inroom=""
    
    if(searchid(message.author.id,searchid(usrserver,users).data).vehicleid!==false){
    
    var tvloc=[]
        
    for(var i=0; i<searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location].travel.length; i++){
      
      tvloc.push(searchid(usrserver,locations).data[searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location].travel[i]])
      
      
    }
       
       //console.log(tvloc)
        
       //loc.push(searchid(usrserver,locations).data[searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location].travel[i]])
    //searchid(usrserver,vehicles).data[0].reach
        for(var x=0; x<searchid(usrserver,vehicles).data[0].reach; x++){
       
       var init=tvloc[x];
          
          for(var i=0; i<init.travel.length; i++){
        
       var rep=searchid(Number(init.travel[i]),searchid(usrserver,locations).data)
     
      //if(searchid(Number(init.travel[i]),searchid(usrserver,locations).data).name.includes(".hidden")===false){
        
        //console.log(locationids)
       
         if(searchid(searchid(message.author.id, searchid(usrserver,users).data).location, searchid(usrserver,locations).data)!==searchid(Number(init.travel[i]),searchid(usrserver,locations).data)){

           locationids.push(searchid(Number(init.travel[i]),searchid(usrserver,locations).data))
           
         }
         
      //}
          
        
         /* for(var x=0; x<searchid(Number(init.travel[i]),searchid(usrserver,locations).data).travel.length; x++){
           
            locationids.push(searchid(Number( searchid(Number(init.travel[i]),searchid(usrserver,locations).data).travel[x]),searchid(usrserver,locations).data))
            
           
         
          
        }*/
                                     
                                     
        
            }
         
         //console.log(tvloc)
       
       tvloc=tvloc.concat(locationids)
         
        // console.log(locationids)
       
     }
                        //}
                    //    }
        
        //console.log(locationids)
       tloc="";
       
       //console.log(locationids)
       
       function uniq(a) {
    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return a.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}
       
       //console.log(tvloc)
       
       tvloc=uniq(tvloc)
      
      tvloc.splice(tvloc.indexOf(loc),1)
       
       for(var i=0; i<tvloc.length; i++){
        
       tloc=tloc+tvloc[i].travelname+"\n" 
        
      }
       
      } 
      
      else{tvloc=tloc}
    
    
    
     for(var i=0; i<searchid(usrserver,users).data.length; i++){
       
       if(searchid(usrserver,users).data[i].location===searchid(message.author.id,searchid(usrserver,users).data).location){
        
         if(searchid(usrserver,users).data[i].status==="Awake"){
         inroom=inroom+"**"+searchid(usrserver,users).data[i].name+"** is here\n"
         }
         if(searchid(usrserver,users).data[i].status==="Asleep"){
         inroom=inroom+"**"+searchid(usrserver,users).data[i].name+"** is sleeping here\n"
         }
         
       }
      
      // inroom=inroom+searchlocation(loc,users).name+" is here\n"
       
     }
      
       var vehiclesh="";
      
      for(var i=0; i<searchid(usrserver,vehicles).data.length; i++){
        
       
      
        if(searchid(usrserver,vehicles).data[i].location===loc.id){
          
          var invehicle=""
          
          if(searchid(usrserver,vehicles).data[i].id===searchid(message.author.id, searchid(usrserver, users).data).vehicleid){
          
           invehicle="**(You are in this vehicle)**"
          
          
        }
         
          vehiclesh=vehiclesh+searchid(usrserver,vehicles).data[i].name+" "+invehicle+"\n"
          
        }
        
      }
    
    message.channel.send("Arrived at **"+loc.name.replace(".hidden","")+":**\n"+loc.description+"\n\n**Mobs: **\n"+mobsh+"\n**Vehicles: **\n"+vehiclesh+"\n**Items: **\n"+iteml+"\n**Travel Locations:**\n"+tloc+"\n"+inroom)
    
      if(searchid(message.author.id,searchid(usrserver,users).data).vehicleid!==false){
      
     for(var i=0; i<searchid(usrserver,users).data.length; i++){
          
         var su= searchid(usrserver,users).data;
          
         if(su[i].vehicleid===vid && su[i].id!==message.author.id){
          
          
           
           client.users.get(su[i].id).send("Arrived at **"+loc.name.replace(".hidden","")+":**\n"+loc.description+"\n\n**Mobs: **\n"+mobsh+"\n**Vehicles: **\n"+vehiclesh+"\n**Items: **\n"+iteml+"\n**Travel Locations:**\n"+tloc+"\n"+inroom)
    
           
         }
          
        }
      }
    
    for(var i=0; i<searchid(usrserver,users).data.length; i++){
       
       if(searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).location===searchid(message.author.id,searchid(usrserver,users).data).location){
       
      if(searchid(usrserver,users).data[i].id!==message.author.id){
        
         
        if(from.includes(".hidden")===false && searchid(searchid(usrserver,users).data[i].id,searchid(usrserver,users).data).status==="Awake"){
         
         client.users.get(searchid(usrserver,users).data[i].id).send("**"+searchid(message.author.id,searchid(usrserver,users).data).name+"** arrives from "+from)
          
        }
       }
       }
     }
    
    
    
    
      
      fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
    
    fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
      
      if(message.member!==null){
        
        
        if(message.member.voiceChannel!==undefined){
      
      var voiceChannel = message.member.voiceChannel;
      
      if(message.member.voiceChannel!==undefined){
      
      voiceChannel.leave();
        
      }
      
      function loopaudio(connection, link){
        
        
    
    const dispatcher = connection.playStream(link);
        
    
    dispatcher.on("end", end => {
      
      if(link!==null){
        
      
      loopaudio(connection, link)
        //console.log("Looping Audio")
        
      }
      
      else{dispatcher.destroy()
           
           
    
    
    //loopaudio(connection, 'https://cdn.glitch.com/70b23baa-631d-4374-b149-4f6fc403b35d%2FCaverns.mp3?v=1572057435393')
    


    

           
           //await voiceChannel.leave();
          
}
      
      
      
    });
    
  }
      
      
  
  
  

  
   //console.log(loc.music)
      
      if(loc.music!==undefined){
    
  voiceChannel.join().then(connection =>{
    
    
    
    
    loopaudio(connection, loc.music)
      
    
    
  
    


    
  }).catch(err => console.log(err));
        
      }
        }
      
      
    //}
    
    //else{message.channel.send("It appears **"+locname+"** is not a location you can travel to!")}
    
   // console.log(users)
      
    }
      
    }
    
    else{message.channel.send("Could not find location **"+locname+"**")}
      
    }
    
    if(searchid(message.author.id,searchid(usrserver,users).data).status==="Asleep"){
      
      message.channel.send("You shift around in your sleep. You can't travel while asleep! Do `"+prefix+"wake` to wake up!") 
      
    }

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}