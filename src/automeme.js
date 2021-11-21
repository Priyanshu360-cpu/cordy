const {Collection, MessageEmbed, MessageAttachment} = require('discord.js')
module.exports= async(message,args,client,options)=>{
    if(!client.memery) client.memery = new Collection()
    if(client.memery.get(`M_${message.guild.id}`) == "true"){
        message.channel.send("Deactivated Automeme command")
        client.memery.set(`M_${message.guild.id}`,"false") 
    }
    else{
        message.channel.send(`Turned on Meme command in <#${message.mentions.channels.first().id}>`)
        client.memery.set(`M_${message.guild.id}`,"true")
    }
    if(!message.mentions.channels) return message.channel.send("Please Enter a Channel ID")
    else{
    client.memery.set(`C_${message.guild}`,message.mentions.channels.first().id)

    timer()
    async function timer(){
        if(client.memery.get(`M_${message.guild.id}`) == "true"){
        const axios = require('axios');
        const url = 'https://bloxapi.soudblox.repl.co/meme';
    let response, data;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.reply(`An error occured!`)
    }
    let b = new MessageEmbed()
    b.setDescription(`**[${data.title}](${data.url})**`)
    b.setImage(`${data.link}`)
    b.setColor(Math.floor(Math.random() * 10000))
    b.setFooter(`${data.ups}⬆️ | ${data.comments}💬`)
    client.channels.cache.get(client.memery.get(`C_${message.guild}`)).send({embeds:[b]})
    setTimeout(()=>timer(),options.timer||5000)
    }
}
    }
}
