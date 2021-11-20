module.exports = async(token,option) => {
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
        if(!option.status){statuses.push["Made with Cody"]}
        else{
        for (let I = 0;I<option.status.split(",").length;I++)
        {
            statuses.push(option.status.split(",")[I])
        }
    }
        setInterval(function() {
              let status = statuses[Math.floor(Math.random()*statuses.length)];
              client.user.setActivity(status, {type: option.statusType});
          }, 10000)
         console.log(`Ready on ${client.user.username} with Statuses ${option.status}, types ${option.statusType} and Visibility ${option.statusVisibility}`)
    })
     client.login(token);
     module.exports = client;
     
}