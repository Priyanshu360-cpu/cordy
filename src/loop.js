const {Collection, MessageEmbed} = require('discord.js')

module.exports = async function loop(message,args,client,options){
    if(!client.loop) client.loop = new Collection()
    let a = new MessageEmbed()
    a.setTitle(options.title||"Title")
    a.setDescription(options.description||"Description")
    a.setFooter(options.footer||"Footer")
    a.setColor(options.color||"FFCBCB")
    a.setThumbnail(options.thumbnail||client.user.displayAvatarURL())
    client.loop.set(`A${message.guild.id}`,a)
    if(!options.channel) return;
    else{
    const channel = client.channels.cache.get(options.channel)
    var main = await channel.send({embeds:[a]})
    client.loop.set(`M${message.guild.id}`,main)
    editmsg()
    function editmsg(){
        let i = 0;
        let b = new MessageEmbed()
    b.setTitle(options.title||"Title")
    b.setDescription(options.description||"Description")
    b.setFooter(options.footer||"npm i cordy")
    b.setColor(options.color||"FFCBCB")
    b.setThumbnail(options.thumbnail||client.user.displayAvatarURL())
    client.loop.set(`B${message.guild.id}`,b)
        client.loop.get(`M${message.guild.id}`).edit({embeds:[client.loop.get(`B${message.guild.id}`)]})
        i++
        setTimeout (() => editmsg(), 5000)
    }
    }
}