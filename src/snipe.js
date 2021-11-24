const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const Discord = require("discord.js");
const math = require("mathjs");
const {Collection} = require('discord.js')
const { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require('discord.js');
 module.exports = async function snipe (message, args, client){
     if(!client.snipes)client.snipes = new Collection();
    if(!client.snipes.get(message.guild.id)){
    var e = new MessageEmbed()
    e.setTitle("Nothing to Snipe")
    e.setColor("RED")
    }
    else{
    var f = new MessageEmbed()
    f.setTitle("Snipe")
    f.setColor("RED")
    client.snipes.get(message.guild.id).content?f.setDescription(`Author - ${client.snipes.get(message.guild.id).author.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]}\nContent - ${client.snipes.get(message.guild.id).content.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]}\nChannel - <#${client.snipes.get(message.guild.id).channel.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]}>`):f.setDescription(`Author - ${client.snipes.get(message.guild.id).author.id.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]}\nChannel - <#${client.snipes.get(message.guild.id).channel.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]}>`)
    client.snipes.get(message.guild.id).vrel.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]?f.setImage(client.snipes.get(message.guild.id).vrel.split(",")[client.snipes.get(message.guild.id).channel.split(",").length-1]):"A"
    }
    var DeletionButton = new MessageButton()
    .setCustomId(`deletee_embed`)
    .setEmoji("🗑️")
    .setStyle("DANGER");
    var SnipeButttons3 = new MessageActionRow().addComponents([
        DeletionButton
      ]);
    var SnipeButttons1 = new MessageButton()
    .setCustomId(`forwardd_buttton_embed`)

    .setEmoji("<:DoubleArrowRight:908994604878163979>")
    .setStyle("SUCCESS");

  var deleteBtn = new MessageButton()
    .setCustomId(`deletee_embed`)

    .setEmoji("🗑️")
    .setStyle("DANGER");

  var SnipeButttons2 = new MessageButton()
    .setCustomId(`backk_buttton_embed`)

    .setEmoji("<:DoubleArrowLeft:908994579133509662>")
    .setStyle("SUCCESS");
    var SnipeButttons = new MessageActionRow().addComponents([
      SnipeButttons2,
      deleteBtn,
      SnipeButttons1
    ]);
    var i = 0;
    let a = await message.channel.send({embeds: [client.snipes.get(message.guild.id)?f:e], components:[client.snipes.get(message.guild.id)?SnipeButttons:SnipeButttons3]})
    const collector = message.channel.createMessageComponentCollector({time: 30000});
    collector.on('collect', async (b) => {
        
      if (b.message.id == a.id && b.user.id == message.author.id) {
        if (b.user.id !== message.author.id)
        return b.reply({
          content: "This Page wasnt created by you",
          ephemeral: true
        });
        b.deferUpdate();
        if (b.customId == "backk_buttton_embed") {
            if(i<=0){
                i = client.snipes.get(message.guild.id).channel.split(",").length;
            }
            i = i-1;
            var g = new MessageEmbed()
            g.setTitle("Snipe")
            g.setColor("RED")
            client.snipes.get(message.guild.id).content?g.setDescription(`Author - ${client.snipes.get(message.guild.id).author.split(",")[i]}\nContent - ${client.snipes.get(message.guild.id).content.split(",")[i]}\nChannel - <#${client.snipes.get(message.guild.id).channel.split(",")[i]}>`):g.setDescription(`Author - ${client.snipes.get(message.guild.id).author.id.split(",")[i]}\nChannel - <#${client.snipes.get(message.guild.id).channel.split(",")[i]}>`)
            client.snipes.get(message.guild.id).vrel.split(",")[i]?g.setImage(client.snipes.get(message.guild.id).vrel.split(",")[i]):"A"
            
            a.edit({embeds: [g], components:[SnipeButttons]})
        }
        if (b.customId == "forwardd_buttton_embed") {
            if(i>client.snipes.get(message.guild.id).channel.split(",").length-1){
                i=0;
            }
            var w = new MessageEmbed()
            w.setTitle("Snipe")
            w.setColor("RED")
            client.snipes.get(message.guild.id).content?w.setDescription(`Author - ${client.snipes.get(message.guild.id).author.split(",")[i]}\nContent - ${client.snipes.get(message.guild.id).content.split(",")[i]}\nChannel - <#${client.snipes.get(message.guild.id).channel.split(",")[i]}>`):w.setDescription(`Author - ${client.snipes.get(message.guild.id).author.id.split(",")[i]}\nChannel - <#${client.snipes.get(message.guild.id).channel.split(",")[i]}>`)
            client.snipes.get(message.guild.id).vrel.split(",")[i]?w.setImage(client.snipes.get(message.guild.id).vrel.split(",")[i]):"A"
            a.edit({embeds: [w], components:[SnipeButttons]})
            i = i+1;
        }
        if(b.customId == "deletee_embed"){
          a.delete()
    }
}
    })
    collector.on("end", () => {
        SnipeButttons.components[0].setDisabled(true)
        SnipeButttons.components[1].setDisabled(true)
        SnipeButttons.components[2].setDisabled(true)
        a.edit({embeds:[f],components:[SnipeButttons]})
    })
    if(client.snipes.get("main")!="true"){
        client.snipes.set("main","true")
client.on('messageDelete', async (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    let a = {
        author: client.snipes.get(message.guild.id)?client.snipes.get(message.guild.id).author+","+message.author.username+"#"+message.author.discriminator:message.author.username+"#"+message.author.discriminator,
        content: client.snipes.get(message.guild.id)?client.snipes.get(message.guild.id).content?client.snipes.get(message.guild.id).content+","+(message.content?message.content:"null"):message.content?message.content:"null":message.content?message.content:"null",
        channel: client.snipes.get(message.guild.id)?client.snipes.get(message.guild.id).channel+","+message.channel.id:message.channel.id,
        createdAt: client.snipes.get(message.guild.id)?client.snipes.get(message.guild.id).createdAt+","+message.createdTimestamp:message.createdTimestamp,
        vrel: client.snipes.get(message.guild.id)?message.attachments.size?client.snipes.get(message.guild.id).vrel+","+message.attachments.map(x=>x)[0].url:client.snipes.get(message.guild.id).vrel+","+"https://media.discordapp.net/attachments/742245061613453343/909004855136382986/mp4.mp4":message.attachments.size?message.attachments.map(x=>x)[0].url:"https://media.discordapp.net/attachments/742245061613453343/909004855136382986/mp4.mp4",
      };
    client.snipes.set(message.guild.id, a)
    })}
}