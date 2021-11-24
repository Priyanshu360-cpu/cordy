module.exports = async function chatbot (message,args,client,options){
    const {Collection} = require('discord.js')
    const axios = require("axios")
    const {MessageEmbed} = require("discord.js");
    try{
        if(!options.owner)options.owner = "Priyanshu";
        if(options.color)options.color = "FFCBCB";
    if(!client.chatbot) client.chatbot = new Collection()
    let a = client.chatbot.get(`C_${message.guild.id}`)
    if(a == "true"){
        let a = new MessageEmbed()
        a.setDescription("Disabled Chatbot")
        a.setColor("RED")
        message.reply({embeds:[a]})
        client.chatbot.set(`C_${message.guild.id}`,"false")
    }
    else{
        let a = new MessageEmbed()
        a.setDescription("Enabled Chatbot")
        a.setColor("RED")
        message.reply({embeds:[a]})
        client.chatbot.set(`C_${message.guild.id}`,"true")
        client.chatbot.set(`I_${message.guild.id}`,`${message.channel.id}`)
    }
    if(client.chatbot.get("main")!="true"){
        client.chatbot.set("main","true")
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if(client.chatbot.get(`C_${message.guild.id}`) == "true"){
        if(message.channel.id == client.chatbot.get(`I_${message.guild.id}`)){
            const url = "https://api.affiliateplus.xyz/api/chatbot?message="+message.content+"&botname="+client.user.username+"&ownername="+options.owner||client.user.username;
            let response, data;
            try {
                response = await axios.get(url);
                data = response.data;
            } catch (e) {
                return message.reply(`An error occured!`)
            }
            let e = new MessageEmbed()
            e.setDescription(`${data.message}`)
            e.setColor(options.color||"FFCBCB")
            await message.reply({embeds:[e], allowedMentions: { parse: ["users", "roles"] } })
        }
    }
})
    }
}
catch(err){
    console.log(`eror${err.stack}`)
}
}