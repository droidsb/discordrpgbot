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
  
    if(searchid(message.author.id,searchid(usrserver,users).data).status==="Awake"){
    
    var loc=searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location]
    
    //searchid(message.author.id,users).location=loc.name
    
    var mobsh="";
      
      for(var i=0; i<searchid(usrserver,mobs).data.length; i++){
        
       
      
        if(searchid(usrserver,mobs).data[i].location===loc.id){
         
          mobsh=mobsh+searchid(usrserver,mobs).data[i].name+"\n"
          
        }
        
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
    
    /*for(var i=0; i<spliced.length; i++){
     
      itemp.splice(spliced[i],1)
      itemp=[];
      
      
      
    }*/
      
      itemp=[];
    
    for(var i=0; i<ram.length; i++){
     if(ram[i].amount>0){
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
      
      if(searchid(usrserver,locations).data[loc.travel[i]].name.includes(".hidden")===false || searchid(message.author.id,searchid(usrserver,users).data).rank==="Admin" ){
      
        if(searchid(usrserver,locations).data[loc.travel[i]].name.includes(".hidden")){
          
          if(searchid(message.author.id,searchid(usrserver,users).data).rank==="Admin" ){
            
            tloc=tloc+searchid(usrserver,locations).data[loc.travel[i]].travelname+".hidden ("+searchid(usrserver,locations).data[loc.travel[i]].id+")\n"
         
         }
          else{
          
          tloc=tloc+locations[loc.travel[i]].travelname+".hidden\n"
            
          }
          
        }
        
        else{
          if(searchid(message.author.id,searchid(usrserver,users).data).rank==="Admin" /*&& searchid(message.author.id,searchid(usrserver,users).data).items.includes(searchname("Wizard Hat",searchid(message.author.id,searchid(usrserver,users).data).items))!==false*/){
          
            tloc=tloc+searchid(usrserver,locations).data[loc.travel[i]].travelname+" ("+searchid(usrserver,locations).data[loc.travel[i]].id+")\n"
          }
          else{
      tloc=tloc+searchid(usrserver,locations).data[loc.travel[i]].travelname+"\n"
          }
          
        }
          
          
        
      }
      
      
      
    }
      
    }
  
    //var inroom=users[i].location.filter(word => word===loc);;
    
   
    var locationids=[];
    
     if(searchid(message.author.id,searchid(usrserver,users).data).vehicleid!==false){
        
        
        
        
        
        //for(var p=0; p<loc.length; p++){
        
       // var init=loc[p];
        
        //console.log(loc)
        var tvloc=[]
        
    for(var i=0; i<searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location].travel.length; i++){
      
      tvloc.push(searchid(usrserver,locations).data[searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location].travel[i]])
      
      
    }
       
       //console.log(tvloc)
        
       //loc.push(searchid(usrserver,locations).data[searchid(usrserver,locations).data[searchid(message.author.id,searchid(usrserver,users).data).location].travel[i]])
    //searchid(usrserver,vehicles).data[0].reach
       
       if(searchid(searchid(message.author.id, searchid(usrserver,users).data).location,searchid(usrserver,locations).data).travel.length>0){
         
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
       
      // console.log(locationids)
       
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
       
      
       
       if(searchid(message.author.id,searchid(usrserver,users).data).rank!=="Admin"){
       
       for(var i=0; i<tvloc.length; i++){
         
         if(tvloc[i].name.includes(".hidden")){
         
              tvloc.splice(i,1)
          
          }
         
         
         
       }
         
       }
       
       
       
       for(var i=0; i<tvloc.length; i++){
         
         
         
       
         
         if(tvloc[i].name.includes(".hidden")){
           
            if(searchid(message.author.id,searchid(usrserver,users).data).rank==="Admin"){
         
         
              tloc=tloc+tvloc[i].travelname+".hidden\n"
              
            }
          
          }
         
         
         
         
       
         
         if(tvloc[i].name.includes(".hidden")===false){
        
       tloc=tloc+tvloc[i].travelname+"\n" 
           
         }
        
      }
       
      } 
      
      else{tvloc=tloc}
      
      
     }
      
      
      /*
    
    if(searchid(message.author.id,searchid(usrserver,users).data).vehicleid!==false){
      
     
      var usr=searchid(message.author.id,searchid(usrserver,users).data);
      
      console.log(usr)
      
      var initloc=searchid(usr.location, searchid(usrserver,locations).data)
      
      for(var i=0; i<initloc.travel.length; i++){
        
      var locs=searchid(usrserver,locations).data[initloc.travel[i]]
        
      // var ldata=searchid(usrserver,locations).data
        
       //var locs=searchid(lid,ldata)
       
       
       console.log(locs)
       
       for(var p=0; p<locs.travel.length; p++){
         
         //searchid(usrserver,locations).data[loc.travel[i]].travelname
         if(searchid(usrserver,locations).data[locs.travel[p]].id!==usr.location){
         
      tloc=tloc+searchid(usrserver,locations).data[locs.travel[p]].travelname+"\n"
           
         }
       
// tloc=tloc+searchid(locs.travel[p], searchid(usrserver, locations).data).name+"\n"
                
                }
        
      }
      
      
    }*/
      
      var shop="**Shop:**\n";
      
      if(loc.name.includes(".shop")){
        
        for(var i=0; i<loc.shop.length; i++){
          
          shop=shop+"**_Item:_ **"+loc.shop[i].name+"\n**_Price:_ **"+loc.shop[i].price+"\n";
          
        }
        
      }
      
       var inroom=""
    
    
    
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
    
    message.channel.send("Arrived at **"+loc.name.replace(".hidden","")+":**\n"+loc.description+"\n\n**Mobs: **\n"+mobsh+"\n**Vehicles: **\n"+vehiclesh+"\n**Items: **\n"+iteml+"\n\n"+shop+"\n**Travel Locations:**\n"+tloc+"\n"+inroom)
    
    }
    
    if(searchid(message.author.id,searchid(usrserver,users).data).status==="Asleep"){
     
      message.channel.send("Your eyes shift around under your eyelids. You can't look around while you are asleep! Do `"+prefix+"wake` to wake up!")
    }
    
  

   
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}