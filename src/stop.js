module.exports=async function stop(message){
    const { MessageEmbed } = require("discord.js");
        const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription("There is no music playing.");
            return message.channel.send({embeds: [thing]});
        }

        const autoplay = player.get("autoplay")
        if (autoplay === true) {
            player.set("autoplay", false);
        }

        player.stop();
        player.queue.clear();
		const c = new MessageEmbed()
	.setTitle('Stopped the queue')
    .setColor(RED)
		message.channel.send({embeds: [c]});
}