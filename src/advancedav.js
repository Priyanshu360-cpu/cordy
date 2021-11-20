
module.exports = async (message, args, client) => {
    
    const { MessageActionRow,  MessageAttachment, MessageButton,  MessageSelectMenu } = require('discord.js');
            const {
                MessageEmbed,
                Message,
                Client
            } = require("discord.js");
            const Discord = require("discord.js");
            const embed = new MessageEmbed()
            embed.setColor("00ffc3")
            const column = new MessageActionRow()
            .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('avatar')
                    .setPlaceholder('Change Size')
                    .addOptions([
                        {
                            label: '16',
                                    description: 'Changes Size of Avatar to 16',
                                    value: '16',
                        },
                        {
                            label: '32',
                                    description: 'Changes Size of Avatar to 32',
                                    value: '32',
                        },
                        {
                            label: '64',
                                    description: 'Changes Size of Avatar to 64',
                                    value: "64",
                        },
                        {
                            label: '128',
                                    description: 'Changes Size of Avatar to 128',
                                    value: "128",
                        },
                        {
                            label: '256',
                                    description: 'Changes Size of Avatar to 256',
                                    value: "256",
                        },
                        {
                            label: '512',
                                    description: 'Changes Size of Avatar to 512',
                                    value: "512",
                        },
                        {
                            label: '1024',
                                    description: 'Changes Size of Avatar to 1024',
                                    value: "1024",
                        },
                        {
                            label: '2048',
                                    description: 'Changes Size of Avatar to 2048',
                                    value: "2048",
                        },
                        {
                            label: '4096',
                                    description: 'Changes Size of Avatar to 4096',
                                    value: "4096",
                        },
        
                    ]),
            );
            const row = new MessageActionRow()
            .addComponents(
            new MessageSelectMenu()
                    .setCustomId('Format')
                    .setPlaceholder('Change Format')
                    .addOptions([
                        {
                            label: 'Webp',
                                    description: 'Changes Size Format to webp',
                                    value: 'webp',
                        },
                        {
                            label: 'Png',
                            description:"Changes Size Format to Png",
                            value: 'png',
                        },
                        {
                            label: 'Jpeg',
                            description:"Changes Fromat to Jpeg",
                            value:"jpeg",
                        },
                        {
                            label:'Gif',
                            description:"Changes Format to Gif",
                            value:'gif',
                        },
                    ])
                    ); 
    if(message.mentions.users.first()) d = message.mentions.users.first()
    else{if(!args[0]){d = message.author.id;}
        else{
        let userResolver = args[0]
    d = client.users.cache.find( x => x.username.toLowerCase() === userResolver.toLowerCase() ||  x.tag.toLowerCase() === userResolver.toLowerCase() ||  x.id === userResolver || x.toString() === userResolver )
    if(!d) d = await client.users.fetch(userResolver)
    }
    }
    e=d.id?d.username+"#"+d.discriminator:message.author.username+"#"+message.author.discriminator
    d=d.id?d.id:message.author.id;
    client.users.fetch(d).then(user => {embed.setTitle(`${e}\'s Avatar`);embed.setDescription(`\n[Jpeg](${user.displayAvatarURL({size:2048,format:"jpeg",dynamic:false})}) | [Webp](${user.displayAvatarURL({size:2048,format:"webp",dynamic:false})}) | [Gif](${user.displayAvatarURL({size:2048,dynamic:true})})`);embed.setImage(user.displayAvatarURL({size:2048,dynamic: true}));
    setTimeout(()=>catcher(),300)
    async function catcher(){
        o = await message.channel.send({embeds:[embed],components:[column,row]})
    function edito(a,i){
        const newa = new MessageEmbed()
        newa.setTitle(embed.title||a.title)
        newa.setDescription(embed.description||a.description)
        newa.setColor("00ffc3")
        newa.setImage(`${embed.image.url.split("=")[0]||a.image.url.split("=")[0]}=${i}`)
        o.edit({embeds:[newa],components:[column,row]})
    }
    const filter = (p) => p.user.id === message.author.id
    const collector = message.channel.createMessageComponentCollector({filter,time: 15000});
    collector.on('collect', async i => 
    {
    i.deferUpdate()
        if(i.customId === 'avatar'){
            
            if(i.values[0] == "16"){edito(o,16)}
            else if(i.values[0] == "32"){edito(o,32)}
            else if(i.values[0] == "64"){edito(o,64)}
            else if(i.values[0] == "128"){edito(o,128)}
            else if(i.values[0] == "256"){edito(o,256)}
            else if(i.values[0] == "512"){edito(o,512)}
            else if(i.values[0] == "1024"){edito(o,1024)}
            else if(i.values[0] == "2048"){edito(o,2048)}
            else if(i.values[0] == "4096"){edito(o,4096)}
        }
        else if(i.customId === 'Format'){
            if(i.values[0] == "webp"){
                let a = new MessageEmbed();
                a.setTitle(embed.title||newa.title)
                a.setDescription(embed.description||newa.description)
                a.setImage(user.displayAvatarURL({size:2048,format:"webp"}))
                a.setColor("00ffc3")
                o.edit({embeds:[a]})
            }
            if(i.values[0] == "png"){
                let a = new MessageEmbed();
                a.setTitle(embed.title||newa.title)
                a.setDescription(embed.description||newa.description)
                a.setImage(user.displayAvatarURL({size:2048,format:"png"}))
                a.setColor("00ffc3")
                o.edit({embeds:[a]})
            }
            if(i.values[0] == "jpeg"){
                let a = new MessageEmbed();
                a.setTitle(embed.title||newa.title)
                a.setDescription(embed.description||newa.description)
                a.setImage(user.displayAvatarURL({size:2048,format:"jpeg"}))
                a.setColor("00ffc3")
                o.edit({embeds:[a]})
            }
            if(i.values[0] == "gif"){
    
                if(user.displayAvatarURL({dynamic:true}).includes("a_") == false){
                    o.reply({content:"Unable to fetch Gif data for that user"})
                }
                else{
                let a = new MessageEmbed();
                a.setTitle(embed.title||newa.title)
                a.setDescription(embed.description||newa.descroption)
                a.setColor("00ffc3")
                a.setImage(user.displayAvatarURL({size:2048,dynamic:true}))
                o.edit({embeds:[a]})
            }}
        }
    })
        collector.on("end", () => {
            column.components[0].setDisabled(true)
            row.components[0].setDisabled(true)
            o.edit({components:[column,row]})
        })
    }
    })
    }