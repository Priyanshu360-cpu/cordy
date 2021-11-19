
module.exports = async (message, args, client) => {
       var u = 5;
       const a = message.guild.iconURL()+"?size=2048"
const y = a.replace("null?size=2048", "https://cdn.discordapp.com/avatars/741280410180386947/97ddc40395dfa5312cdbf02f4da07d7a.webp?size=2048")
    const fetchedLogs = await message.guild.fetchAuditLogs({
        limit: u,
        });
       var d = '';
       const c = fetchedLogs.entries.map(log => log.executor.username)
       var i = 0;
        const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js')
       while(i<c.length){
        var d = d+"Action_Type - "+fetchedLogs.entries.map(log => log.action)[i]+"\n"+"ActionedBy - "+fetchedLogs.entries.map(log => log.executor.username)[i]+"#"+fetchedLogs.entries.map(log => log.executor.discriminator)[i]+"\n"+"Target - "+fetchedLogs.entries.map(log => log.target)[i]+"\n"+"Reason-"+fetchedLogs.entries.map(log => log.reason)[i]+"\n\n"
       i=i+1
       }
       i=0;
        var ce= new MessageEmbed()
       .setTitle("Audit Logs")
       .setDescription(d)
       .setThumbnail(y)
       .setColor("FFCBCB");

     var pageMovingButttons1 = new MessageButton()
       .setCustomId(`forward_buttton_embed`)

       .setEmoji("▶️")
       .setStyle("SUCCESS");

     var deleteBtn = new MessageButton()
       .setCustomId(`delete_embed`)

       .setEmoji("🗑️")
       .setStyle("DANGER");

     var pageMovingButttons2 = new MessageButton()
       .setCustomId(`back_buttton_embed`)

       .setEmoji("◀️")
       .setStyle("SUCCESS");



       var pageMovingButttons = new MessageActionRow().addComponents([
         pageMovingButttons2,
         deleteBtn,
         pageMovingButttons1
       ]);
       var m = await message.channel.send({embeds: [ce], components: [pageMovingButttons]})
       const collector = message.channel.createMessageComponentCollector({time: 30000});
       collector.on('collect', async (b) => {
         if (b.message.id == m.id && b.user.id == message.author.id) {
           if (b.user.id !== message.author.id)
           return b.reply({
             content: "This Page wasnt created by you",
             ephemeral: true
           });
           b.deferUpdate();
           if (b.customId == "back_buttton_embed") {
             if(i != 0){
               if((i !=0)&(u!=0)){
                 i= i-5;
                 u=u-5;
                 var c = i;
                 const fetchedLogs = await message.guild.fetchAuditLogs({
                  limit: u,
                  });
                 var d = '';
                 const o = fetchedLogs.entries.map(log => log.executor.username)
                 while(i<o.length){
                  var d = d+"Action_Type - "+fetchedLogs.entries.map(log => log.action)[i]+"\n"+"ActionedBy - "+fetchedLogs.entries.map(log => log.executor.username)[i]+"#"+fetchedLogs.entries.map(log => log.executor.discriminator)[i]+"\n"+"Target - "+fetchedLogs.entries.map(log => log.target)[i]+"\n"+"Reason-"+fetchedLogs.entries.map(log => log.reason)[i]+"\n\n"
                 i=i++;
                 }
                 i = c;
                 
                 var ee = new MessageEmbed()
                 .setTitle("Audit Logs")
                 .setDescription(d)
                 .setThumbnail(y)
                 .setColor("FFCBCB");
               m.edit({
                 embeds: [ee],
                 components: [pageMovingButttons]
               });
              }
              else{
                b.reply({content: "You are at minimum limit already", ephermeral: true})
              }
             }
           } else if (b.customId == "forward_buttton_embed") {
             i = i+5;
             u = u + 5;
             var c = i;
            const fetchedLogs = await message.guild.fetchAuditLogs({
              limit: u,
              });
             var d = '';
             const o = fetchedLogs.entries.map(log => log.executor.username)
             while(i<o.length){
              var d = d+"Action_Type - "+fetchedLogs.entries.map(log => log.action)[i]+"\n"+"ActionedBy - "+fetchedLogs.entries.map(log => log.executor.username)[i]+"#"+fetchedLogs.entries.map(log => log.executor.discriminator)[i]+"\n"+"Target - "+fetchedLogs.entries.map(log => log.target)[i]+"\n"+"Reason-"+fetchedLogs.entries.map(log => log.reason)[i]+"\n\n"
             i=i+1;
             }
             i=c;
             var de = new MessageEmbed()
             .setTitle("Audit Logs")
             .setDescription(d)
             .setThumbnail(y)
             .setColor("FFCBCB");
           m.edit({
             embeds: [de],
             components: [pageMovingButttons]
           });
           } else if (b.customId == "delette_embed") {
             b.message.delete();
             b.reply({ content: "Message Deleted", ephemeral: true });
           }
       }
     })
   }

