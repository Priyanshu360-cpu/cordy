module.exports = async (message, args, client,db) =>{
    const {Collection, MessageEmbed} = require('discord.js')
    if(!db) return;
    let a = db.get(`AFK_${message.guild.id}#${message.author.id}`)
    if(!a)db.set(`AFK_${message.guild.id}#${message.author.id}`,"true")
    else{
        if(a == "true"){
            let a = new MessageEmbed()
            a.setDescription("You are already afk")
            a.setColor("RED")
            message.reply({embeds:[a]})
        }
        else{
            let a = new MessageEmbed()
            a.setDescription("You are afk now")
            a.setColor("RED")
            message.channel.send({embeds:[a]})
            db.set(`AFK_${message.guild.id}#${message.author.id}`,"true")
            db.set(`AFKT_${message.guild.id}#${message.author.id}`,`${Date.now()}`)
        }
    }
    }
    if(db.get("main")!="true"){
            db.set("main","true")
    client.on('messageCreate', async (message,db) => {
        if(!db) return;
        let b = db.get(`AFK_${message.guild.id}#${message.author.id}`)
        if(b == "true"){
            let c = new MessageEmbed()
            c.setTitle('Welcome Back')
            c.setDescription(`We removed Your Afk <@${message.author.id}>`)
            c.setColor("FFCBCB")
            let w = await message.reply({embeds:[c]})
            db.set(`AFK_${message.guild.id}#${message.author.id}`,"false")
            setTimeout(()=>w.delete(),5000)
        }
        if(!message.mentions.users.first()) return;
        else{
        let d = db.get(`AFK_${message.guild.id}#${message.mentions.users.first().id}`)
        if(d == "true"){
            let e = new MessageEmbed()
            e.setTitle('Afk User')
            e.setDescription(`User afk since <t:${db.get(`AFKT_${message.guild.id}#${message.mentions.users.first().id}:F>`)}`)
            e.setFooter("npm i cordy")
            e.setColor("FFCBCB")
            message.reply({embeds:[e]})
        }
    }
    })
    }