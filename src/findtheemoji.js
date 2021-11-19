const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const Discord = require("discord.js");
const math = require("mathjs");
const { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require('discord.js');
const { replaceResultTransformer } = require("common-tags");
module.exports = async (message, args, client, prefix) => {
        let a =  client.emojis.cache.get(client.emojis.cache.map(x=>x.id)[Math.floor(Math.random() * client.emojis.cache.map(x=>x.id).length)]);
     let b = math.floor(math.random() * 3)+","+math.floor(math.random() * 3)
     
        var butt0_0 = new MessageButton()
        if(b == "0,0"){
            butt0_0.setCustomId("true")
            butt0_0.setStyle('SUCCESS')
            butt0_0.setEmoji(a.id)
        }
        else{
            butt0_0.setCustomId("0,0")
            butt0_0.setStyle('SUCCESS')
            var c = client.emojis.cache.get(client.emojis.cache.map(x=>x.id)[Math.floor(Math.random() * client.emojis.cache.map(x=>x.id).length)]).id;
            math.floor(math.random() * 2)==1?butt0_0.setLabel(" "):butt0_0.setEmoji(b.id==c?repfunc(b.id):c)
        }
            var butt0_1 = new MessageButton()
            if(b == "0,1"){
                butt0_1.setCustomId("true")
                butt0_1.setStyle('SUCCESS')
                butt0_1.setEmoji(a.id)
            }
            else{
                butt0_1.setCustomId("0,1")
                butt0_1.setStyle('SUCCESS')
                var c = client.emojis.cache.get(client.emojis.cache.map(x=>x.id)[Math.floor(Math.random() * client.emojis.cache.map(x=>x.id).length)]).id;
                math.floor(math.random() * 2)==1?butt0_1.setLabel(" "):butt0_1.setEmoji(b.id==c?repfunc(b.id):c)
            }
            var butt0_2 = new MessageButton()
            if(b == "0,2"){
                butt0_2.setCustomId("true")
                butt0_2.setStyle('SUCCESS')
                butt0_2.setEmoji(a.id)
            }
            else{
                butt0_2.setCustomId("0,2")
                butt0_2.setStyle('SUCCESS')
                var c = client.emojis.cache.get(client.emojis.cache.map(x=>x.id)[Math.floor(Math.random() * client.emojis.cache.map(x=>x.id).length)]).id;
                math.floor(math.random() * 2)==1?butt0_2.setLabel(" "):butt0_2.setEmoji(b.id==c?repfunc(b.id):c)
            }
            var butt1_0 = new MessageButton()
            if(b == "1,0"){
                butt1_0.setCustomId("true")
                butt1_0.setStyle('SUCCESS')
                butt1_0.setEmoji(a.id)
            }
            else{
                butt1_0.setCustomId("1,0")
                butt1_0.setStyle('SUCCESS')
                var c = client.emojis.cache.get(client.emojis.cache.map(x=>x.id)[Math.floor(Math.random() * client.emojis.cache.map(x=>x.id).length)]).id;
                math.floor(math.random() * 2)==1?butt1_0.setLabel(" "):butt1_0.setEmoji(b.id==c?repfunc(b.id):c)
            }
            var butt1_1 = new MessageButton()
            if(b == "1,1"){
                butt1_1.setCustomId("true")
                butt1_1.setStyle('SUCCESS')
                butt1_1.setEmoji(a.id)
            }
            else{
                butt1_1.setCustomId("1,1")
                butt1_1.setStyle('SUCCESS')
                var c = client.emojis.cache.get(client.emojis.cache.map(x=>x.id)[Math.floor(Math.random() * client.emojis.cache.map(x=>x.id).length)]).id;
                math.floor(math.random() * 2)==1?butt1_1.setLabel(" "):butt1_1.setEmoji(b.id==c?repfunc(b.id):c)
            }
            var butt1_2 = new MessageButton()
            if(b == "1,2"){
                butt1_2.setCustomId("true")
                butt1_2.setStyle('SUCCESS')
                butt1_2.setEmoji(a.id)
            }
            else{
                butt1_2.setCustomId("1,2")
                butt1_2.setStyle('SUCCESS')
                var c = client.emojis.cache.get(client.emojis.cache.map(x=>x.id)[Math.floor(Math.random() * client.emojis.cache.map(x=>x.id).length)]).id;
                math.floor(math.random() * 2)==1?butt1_2.setLabel(" "):butt1_2.setEmoji(b.id==c?repfunc(b.id):c)
            }
            var butt2_0 = new MessageButton()
            if(b == "2,0"){
                butt2_0.setCustomId("true")
                butt2_0.setStyle('SUCCESS')
                butt2_0.setEmoji(a.id)
            }
            else{
                butt2_0.setCustomId("2,0")
                butt2_0.setStyle('SUCCESS')
                var c = client.emojis.cache.get(client.emojis.cache.map(x=>x.id)[Math.floor(Math.random() * client.emojis.cache.map(x=>x.id).length)]).id;
                math.floor(math.random() * 2)==1?butt2_0.setLabel(" "):butt2_0.setEmoji(b.id==c?repfunc(b.id):c)
            }
            var butt2_1 = new MessageButton()
            if(b == "2,1"){
                butt2_1.setCustomId("true")
                butt2_1.setStyle('SUCCESS')
                butt2_1.setEmoji(a.id)
            }
            else{
                butt2_1.setCustomId("2,1")
                butt2_1.setStyle('SUCCESS')
                var c = client.emojis.cache.get(client.emojis.cache.map(x=>x.id)[Math.floor(Math.random() * client.emojis.cache.map(x=>x.id).length)]).id;
                math.floor(math.random() * 2)==1?butt2_1.setLabel(" "):butt2_1.setEmoji(b.id==c?repfunc(b.id):c)
            }
            var butt2_2 = new MessageButton()
            if(b == "2,2"){
                butt2_2.setCustomId("true")
                butt2_2.setStyle('SUCCESS')
                butt2_2.setEmoji(a.id)
            }
            else{
                butt2_2.setCustomId("2,2")
                butt2_2.setStyle('SUCCESS')
                var c = client.emojis.cache.get(client.emojis.cache.map(x=>x.id)[Math.floor(Math.random() * client.emojis.cache.map(x=>x.id).length)]).id;
                math.floor(math.random() * 2)==1?butt2_2.setLabel(" "):butt2_2.setEmoji(b.id==c?repfunc(b.id):c)
            }
            var row0 = new MessageActionRow()
            .addComponents([butt0_0,butt0_1,butt0_2]);
            var row1 = new MessageActionRow()
            .addComponents([butt1_0,butt1_1,butt1_2]);
            var row2 = new MessageActionRow()
            .addComponents([butt2_0,butt2_1,butt2_2]);
            var game = 1;
let m = await message.channel.send({content:a.animated?"Find the emote <a:"+a.name+":"+a.id+"> In the Given Buttons":"Find the emote <:"+a.name+":"+a.id+"> In the Given Buttons", components:[row0,row1,row2]})
const collector = message.channel.createMessageComponentCollector({time: 30000});
collector.on('collect', async (b) => {
  if (b.message.id == m.id && b.user.id == message.author.id) {
    if (b.user.id !== message.author.id)
    return b.reply({
      content: "This Page wasnt created by you",
      ephemeral: true
    });
    if(b.customId == "true"){
        butt0_0.setDisabled()
        butt0_1.setDisabled()
        butt0_2.setDisabled()
        butt1_0.setDisabled()
        butt1_1.setDisabled()
        butt1_2.setDisabled()
        butt2_0.setDisabled()
        butt2_1.setDisabled()
        butt2_2.setDisabled()
        var row0 = new MessageActionRow()
        .addComponents([butt0_0,butt0_1,butt0_2]);
        var row1 = new MessageActionRow()
        .addComponents([butt1_0,butt1_1,butt1_2]);
        var row2 = new MessageActionRow()
        .addComponents([butt2_0,butt2_1,butt2_2]);
        m.edit({content:"You Won the Game"+"<@"+b.user.id+">",components:[row0,row1,row2]})
        m.reply({
            content:"You guessed the emoji succefully"
        })
        game = game-1;
    }
    else{
        m.reply({
            content:"Wrong Guess",
            ephemeral: true
        })
    }
    b.deferUpdate();
    }})
    collector.on("end", () => {
        if(game == 1){
        butt0_0.setDisabled()
        butt0_1.setDisabled()
        butt0_2.setDisabled()
        butt1_0.setDisabled()
        butt1_1.setDisabled()
        butt1_2.setDisabled()
        butt2_0.setDisabled()
        butt2_1.setDisabled()
        butt2_2.setDisabled()
        var row0 = new MessageActionRow()
        .addComponents([butt0_0,butt0_1,butt0_2]);
        var row1 = new MessageActionRow()
        .addComponents([butt1_0,butt1_1,butt1_2]);
        var row2 = new MessageActionRow()
        .addComponents([butt2_0,butt2_1,butt2_2]);
        m.edit({content:"Time Up!",components:[row0,row1,row2]})
        }
})
function repfunc(r){
    let c = client.emojis.cache.get(client.emojis.cache.map(x=>x.id)[Math.floor(Math.random() * client.emojis.cache.map(x=>x.id).length)]).id;
    let a = c==r?repfunc(r):c.id;
    return a;
}
}