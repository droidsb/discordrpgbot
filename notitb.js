const Discord = require("discord.js");
const client = new Discord.Client();

var readline = require('readline-sync')

var fs = require('fs');

const discord_token = process.env.TOKEN;

var numS=100000;
var MyRN = "Solved";
var answercode = "NAHFAMYOUAINTRIGHT";

var gotnum=false;

var theWord;
var reacted=false;

var express = require('express');
var app = express();


  
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
 
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setPresence({ game: { name: `Serving ${client.guilds.size} servers`, type: 0 } });
});

client.on("guildDelete", guild => {
  
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setPresence({ game: { name: `Serving ${client.guilds.size} servers`, type: 0 } });
    //client.user.setPresence({ game: { name: 'nameGoesHere', type: 0 } })
    

  console.log(client.guilds.keyArray());
    
    //const guildc = client.guilds.map(g => g.name).join("\n")
    //client.guilds.get().channels.find("topic", "testpass");
    
    
  startup=true;
  
});



//console.log(locations[0])


  
 console.log("check2");
		
var stopics=["crosswtma","public chat"];

client.on("message", async message => {
  
  
 
 
  if(message.author.bot) return;
    
  
  if(message.channel.id==='553794424212160523'){
    
    //console.log(message.author.username+":"+message.content);
    
    var num=message.content.slice(0,4);
    
    
    
    
    num=Number(num);
    
    //console.log(num/1000);
    
    num=num/1000;
    
     if(Number.isInteger(num)===false && gotnum===true){
      
       
       gotnum=false;
       
     }
    
    if(Number.isInteger(num) && gotnum===false){
      
      message.channel.send("You got "+(message.content.slice(0,4))+" "+message.author.toString()+"!");
      
      gotnum=true;
      
      
    }
    
    /*if(message.content.startsWith("3000") && gotnum===false){
     
      message.channel.send("You got 3000 "+message.author.toString()+"!");
      
      gotnum=true;
      
      
    }*/
    
          var num=message.content.slice(0,3)
          //console.log(num);
          if(isNaN(num)){
            
            message.delete();
            
            console.log("Deleted");
            
          }
          
          
        }
   
    
    if(message.channel.topic==="crosswtma"){
        var dt = new Date();
        //if(channel.topic==="testpass"){mode
        
        var chatColor=9079434;
        
        let myRole = message.guild.roles.find(x => x.name=== "Moderator");

     //console.log(`Found the role ${myRole.name}`);


if(message.member.roles.has(myRole.id)){
 chatColor=16766720;   
}
        var Attachment = (message.attachments).array();
        
        var embed = {
  "description": message.content,
  "color": chatColor,
           "timestamp":dt.toISOString(),
  "author": {
    "name": message.author.username,
    "icon_url": message.author.avatarURL
  },
            "footer": {
    "icon_url": message.guild.iconURL,
    "text": message.guild.name,
                
  }
           
};
        //console.log(Attachment.length);
        if(Attachment.length>0){
            
         embed = {
  "description": message.content,
  "color": chatColor,
           "timestamp": dt.toISOString(),
  "author": {
    "name": message.author.username,
    "icon_url": message.author.avatarURL
  },
            "footer": {
    "icon_url": message.guild.iconURL,
    "text": message.guild.name,
                
  },
            "image": {
      "url":Attachment[0].url
    },
           
};
            
        }
        
       
        
       
        
        
        
        //message.guild.iconURL
//channel.send({ embed });
        for(var i=0; i<client.guilds.size; i++){
        
        var guild2=client.guilds.keyArray()[i];
            
            if(client.guilds.get(guild2).channels.find(x => x.topic==="crosswtma")!==null){
            
        if(message.channel.id!==client.guilds.get(guild2).channels.find(x => x.topic==="crosswtma").id){
            
    client.guilds.get(guild2).channels.find(x => x.topic==="crosswtma").send({embed}); 
        }
        
    }
        
        }
    


    
    }





if (startup==true){
console.log("Systems booted up!");

//message.channel.send("Systems booted up!");
startup=false;

}



if(message.content.startsWith(prefix+"numbers")){

var number = message.content;

message.delete(1000);
number=number.toLowerCase();
number=number.replace(prefix+"numbers ","");
numS=number;

	MyRN = Math.ceil(Math.random() * numS);
	
	client.channels.get("490531513113378817").send("New challenge started. 0 to "+numS);


}

if(message.content != "!rank"){

if (Number(message.content) < MyRN) {

	client.channels.get("490531513113378817").send("Higher");
	
	//console.log(MyRN-Number(message.content)+" away");
}

if (Number(message.content) > MyRN) {

	client.channels.get("490531513113378817").send("Lower");
	
	//console.log(Number(message.content)-MyRN+" away");
}

if (Number(message.content) === MyRN) {

	client.channels.get("490531513113378817").send("YOU GOT THE NUMBER "+message.author.toString());
	
	MyRN="Solved";
	
	
}
}

if(message.content.startsWith(prefix+"code")){




var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","?",".",",","!"];
var morsecode = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....','..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.','--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-','-.--', '--..'," ","?",".",",","!"];

var coded = message.content;

message.delete(1000);
var word=[];
coded=coded.toLowerCase();
coded=coded.replace(prefix+"code ","");
answercode=coded;
console.log(answercode);
var finalm="";
for (var i = 0, len = coded.length; i < len; i++) {
  word.push(coded[i]);
}

//console.log(word);

	for(var i = 0; i < word.length; i++){
		
		var keycode=alpha.indexOf(word[i]);
		//console.log(keycode)
		finalm += morsecode[keycode]+" ";
		
		


	}
	
	client.channels.get("490531513113378817").send(finalm)
	
	


}

if(message.content===answercode){
	
	
		client.channels.get("490531513113378817").send("You got the message "+message.author.toString())
		answercode = "NAHFAMYOUAImoNTRIGHT";
	
	
	}
    
    
    
if(message.channel.type!=="dm"){
  
let myRole2 = message.guild.roles.find(x => x.name=== "Moderator");

     //console.log(`Found the role ${myRole.name}`);


if(message.content.startsWith(prefix+"purge") && message.member.roles.has(myRole2.id)){



	var purge = message.content;

	
	
	purge=purge.replace(prefix+"purge ","");
	purge=Number(purge)+1;
	if(purge>100){
		purge=100;
	}
	console.log("Purged "+purge);
	
	
	
		message.channel.bulkDelete(purge).then(() => {
  message.channel.send("Deleted "+(purge-1)+" messages.").then(msg => msg.delete(3000));
});
	



}

else if(message.content.startsWith(prefix+"purge")){
	message.delete(1000);

	 message.channel.send("Sorry you do not have access to this command").then(msg => msg.delete(3000));

}
  
}


if (message.content.startsWith(prefix+"no")) {
      message.delete(1000); //Supposed to delete message
      message.channel.send("https://media2.giphy.com/media/12XMGIWtrHBl5e/200.gif");
   }
   
   if (message.content.startsWith(prefix+"stop")) {
      message.delete(1000); //Supposed to delete message
      message.channel.send("http://gifimage.net/wp-content/uploads/2017/06/stop-gif-9.gif");
   }
   
   if (message.content.startsWith(prefix+"yes")) {
      message.delete(1000); //Supposed to delete message
      message.channel.send("https://media1.giphy.com/media/nXxOjZrbnbRxS/giphy.gif");
   }
   
   var heart = client.emojis.find(x => x.name=== "heart");
   
 // var reactionwords=["jarvis"]; 
   
   var check=message.content.toLowerCase();
   if(check.includes("friday")){
 		 if (check.includes("love") || check.includes("like") || check.includes("cool") || check.includes("awesome") || check.includes("best")) {
 		 
 		if(check.includes("not")){
		 message.react("💔")
	
		}
		else{
 			 message.react("❤")
 		
 		 }
  
  
  
}





if (check.includes("hate") || check.includes("bad") || check.includes("sucks")) {

	if(check.includes("not")){
	message.react("❤")
	
	}
	else{
 		 
 		 message.react("💔")
 		 }
    
    
  }
   
  
  }
  
  
  if (check.includes("cookie")) {

	message.react("🍪")
   
  
  }

if (check.includes("cake")){

	message.react("🍰")

}


if (check.includes("know the way")){


	message.react('401845797953732618');

}
  
  
  



	
	
	  
  if(message.content===prefix+"help"){
   
    
  
  
    
  
  message.channel.send({embed:{
    
    "color": 4886754,
   
    "title": "Commands",
    
    
   
    "fields": [
      {
        "name": "Bot",
        "value": ";Ping\n;Help"
        
      },
      {
        "name": "Fun",
        "value": ";Numbers (highest number)\n;Code\n;No\n;Yes\n;Stop\n;Yeet"
        
      },
      {
        "name": "Admin",
        "value": ";Purge (amount)"
        
      },
      {
        "name": "RPG",
        "value": ";join (name)\n;go (location)\n;inv\n;look\n;get (number) (item)\n;drop (number) (item)\n;say (message)\n;me (action)\n;money\n;pay (username) (amount)\n;forge (amount) (material)\n;status\n;rank\n;sleep\n;wake"
        
      }
    ]
  }});
    //message.channel.send("ya yeet");
}
	
	






      if(message.content === prefix+"yeet") {
        
        message.channel.send("Yeet");
      }
 
	  


    
     if(message.content === prefix+"ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  
  
  
  
  //console.log(server);
  /*var FQ = readline.question("You: ");
  
  message.channel.send(FQ);*/
    

    var name=`${message.author.username}`;
var channel=`${message.channel}`;


if(channel==="<#357596957625155601>"){

channel="welcome"

}
if(channel==="<#357596886162735105>"){

channel="announcements"

}

if(channel==="<#365032532678541312>"){

channel="mod-team-introductions"

}

if(channel==="<#357662992168648724>"){

channel="join-a-class"

}

if(channel==="<#357949844515586059>"){

channel="club-sign-ups"

}

if(channel==="<#357595506744098816>"){

channel="commonroom"

}

if(channel==="<#360459115778015232>"){

channel="memes"

}

if(channel==="<#370408280721195008>"){

channel="memorable-quotes"

}

if(channel==="<#358265017197395968>"){

channel="apply-for-mod"

}

if(channel==="<#360465890048737290>"){

channel="suggestions"

}

if(channel==="<#445730124239732736>"){

channel="questions-and-advice"

}

if(channel==="<#377607331934109696>"){

channel="fallout-shelter"

}

if(channel==="<#395626978411151360>"){

channel="commonroom-vc-only"

}

if(channel==="<#402571727474917376>"){

channel="voj-training-channel"

}

if(channel==="<#376130355800965130>"){

channel="super-secret-channel"

}

if(channel==="<#357893076900904960>"){

channel="moderating"

}

if(channel==="<#358129555124387850>"){

channel="dyno-log"

}

if(channel==="<#362328500893384717>"){

channel="high-mods"

}

if(channel==="<#379866878027497492>"){

channel="bot-randomness"

}

if(channel==="<#377185843045072899>"){

channel="fish"

}

if(channel==="<#377185894119243805>"){

channel="slot"

}

if(channel==="<#357595659106254850>"){

channel="study-hall"

}

if(channel==="<#411776012213551107>"){

channel="meednigbt-typeos"

}
if(channel==="<#412490932118749184>"){

channel="tahi-pose"

}

if(channel==="<#412491636619083777>"){

channel="midnite-typoses"

}
  
if(channel==="<#553794424212160523>"){

channel="counting"

}



var read = "#"+channel+":"+"<"+name+">"+":"+`${message.cleanContent}`;
  
  //var logs = fs.readFileSync('./logs.js', "utf8");
  
  //fs.writeFileSync('./logs.js', (logs+"\n\n"+read));
  
  //Attachment[0].url
  
  var Attachment2 = (message.attachments).array();
  
   if(Attachment2.length>0){
  
console.log(read+"\n"+Attachment2[0].url);
     
   }
  
  else{
  
console.log(read);
     
   }

//console.log("--------------------------------------------------");
  
    
     fs.writeFileSync('./locations', JSON.stringify(locations), 'utf8');
    
    fs.writeFileSync('./userdata', JSON.stringify(users), 'utf8');
  

  
});
  
client.login(discord_token);


