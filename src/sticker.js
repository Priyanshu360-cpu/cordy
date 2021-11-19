module.exports = async (message, args, options = []) => {
    const Discord = require('discord.js')
    if (!message.member.permissions.has('MANAGE_EMOJIS_AND_STICKERS'))
    return message.channel.send(
        'Missing Permission'
    )
	try {
		message.channel.send('Send The Sticker')
        let clear = (m) => m.author.id === message.author.id
		let collector = message.channel.createMessageCollector({clear,time: 15000,max: 1})
		collector.on('collect', async (message) => {
                var id = message.stickers.first()
        })
        if(!id) return message.reply("Please provide a sticker")
        message.guild.stickers.create(id.url, args[0] ||'Cordy')
        message.reply({content: `Sticker created `})
        .catch((err) => {
            message.reply({ content: `Error found in ${err}` })
        })
    }
    catch(err){
        console.log(`error Caught`)
    }
}
