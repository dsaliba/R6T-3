const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var args = msg.content.split(" ");
  if (args[0].substring(0, 1) == prefix){
    switch (args[0].substring(1).toLowerCase()){
      case("start"):
          msg.channel.send("Reply with 👍 to join the TTT lobby...").then(message =>
            setTimeout(function(){
              console.log("stage 2");
              if (message.reactions.array().length > 0){

              var res = message.reactions.array()[0].users;
              console.log(res.length);
              var ind = [];
              var last = -1;
              for (i = 0; i < (res.length/5); i++){
                ind.push(res[Math.floor(Math.random() * res.length)]);
                console.log(ind[i]);
                console.log("test");
              }
            }else{console.log("No users found")}
            }, (parseInt(args[1])*1000))
          ).catch(console.error);

        break;
      }
    }
});

client.login('MzY3NTE5ODQwMjgzNjU2MjA0.Dd4RCA.jrjoPafgUUrzMfwlsmjDY9kgBjI');
