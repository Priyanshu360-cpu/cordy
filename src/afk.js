module.exports = async (message, args, client,db) =>{
    const {Collection, MessageEmbed} = require('discord.js')
    try{
    if(!client.afk) client.afk = new Collection()
    setTimeout(()=>testing(),500)
    function testing(){
    let a = client.afk.get(`AFK_${message.guild.id}#${message.author.id}`)
    if(!a)client.afk.set(`AFK_${message.guild.id}#${message.author.id}`,"true")
    else{
        if(a == "true"){
            let a = new MessageEmbed()
            a.setDescription("You are already afk")
            a.setColor("RED")
            message.reply({embeds:[a]})
        }
        else{
            let a = new MessageEmbed()
            a.setDescription(`You are afk now <@${message.author.id}>`)
            a.setColor("RED")
            message.channel.send({embeds:[a]})
            client.afk.set(`AFK_${message.guild.id}#${message.author.id}`,"true")
            client.afk.set(`AFKT_${message.guild.id}#${message.author.id}`,Date.now())
            client.afk.set(`AFKM_${message.guild.id}#${message.author.id}`,`${args}`)
        }
    }
    }
    if(client.afk.get("main")!="true"){
            client.afk.set("main","true")
    client.on('messageCreate', async (message) => {
        if (message.author.bot) return;
        if (!message.guild) return;
        let b = client.afk.get(`AFK_${message.guild.id}#${message.author.id}`)
        if(b == "true"){
            let c = new MessageEmbed()
            c.setTitle('Welcome Back')
            c.setDescription(`We removed Your Afk <@${message.author.id}>`)
            c.setColor("FFCBCB")
            let w = await message.reply({embeds:[c]})
            client.afk.set(`AFK_${message.guild.id}#${message.author.id}`,"false")
            setTimeout(()=>w.delete(),5000)
        }
        if(!message.mentions.users.first()) return;
        else{
        let d = client.afk.get(`AFK_${message.guild.id}#${message.mentions.users.first().id}`)
        if(d == "true"){
            let e = new MessageEmbed()
            e.setTitle('Afk User')
            e.setDescription(`User afk since <t:${Math.trunc(Number((client.afk.get(`AFKT_${message.guild.id}#${message.mentions.users.first().id}`)/1000)))}:R>\nMessage-${client.afk.get(`AFKM_${message.guild.id}#${message.mentions.users.first().id}`)}`)
            e.setFooter("npm i cordy")
            e.setColor("FFCBCB")
            message.reply({embeds:[e]})
        }
    }
    })
    }
    }
    catch(err){
        console.log("Error Caught")
    }
    }