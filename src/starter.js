module.exports = async function starter(token,option){
    const { Client, Collection, Intents } = require("discord.js");
    const { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require('discord.js');
    const client = new Client({
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
         allowedMentions: {
             parse: ["everyone", "roles", "users"],
             repliedUser: true
         },
         partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]

     });
     client.on('ready',async => {
        let statuses = []
        if(!option.activity){statuses.push[{
            status:"Made with Cordy <3",
            statusType:"PLAYING",
            statusVisibility:"DND"}]}
        else{
        for (let I = 0;I<option.activity.length;I++)
        {
            statuses.push(option.activity[I])
        }
    }
    let statuso = statuses[Math.floor(Math.random()*statuses.length)];
        setInterval(function() {
            let status = statuses[Math.floor(Math.random()*statuses.length)];  
              client.user.setActivity(status.status, {type: status.statusType}, status.statusVisibility);
          }, option.timer)
         console.log(`Ready on ${client.user.username} with Statuses ${statuso.status}, types ${statuso.statusType} and Visibility ${statuso.statusVisibility}`)
    })
     client.login(token);
     module.exports = client;
     
     
}