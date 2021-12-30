module.exports = async function play(message,client){
    const { MessageEmbed } = require("discord.js");
        const { channel } = message.member.voice;
        var player = message.client.manager.get(message.guild.id);
        if (player && message.member.voice.channel !== message.guild.me.voice.channel) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You must be in the same channel as ${message.client.user}`);
             message.channel.send({embeds: [thing]});
        } else if (!player) {
            var player = message.client.manager.create({
                guild: message.guild.id,
                voiceChannel: channel.id,
                textChannel: message.channel.id,
                volume: 50,
                selfDeafen: true,
            });
        }
        if (player.state !== "CONNECTED") player.connect();

        player.set("autoplay", false);

        const search = args.join(' ');
        let res;
        try {
            res = await player.search(search, message.author);
            if (res.loadType === 'LOAD_FAILED') {
                if (!player.queue.current) player.destroy();
                throw res.exception;
            }
        } catch (err) {
            return message.reply(`there was an error while searching: ${err.message}`);
        }
 
        switch (res.loadType) {
            case 'NO_MATCHES':
                if (!player.queue.current) player.destroy();
                return message.reply('there were no results found.');
            case 'TRACK_LOADED':
                var track = res.tracks[0];
                player.queue.add(track);
                if (!player.playing && !player.paused && !player.queue.size) { 
                    return player.play();
                } else {
                    let p = search.split('track/')[1];
let c = p.split('?')[0];
let d = 'https://embed.spotify.com/oembed/?url=spotify:track:'+c
const axios = require('axios');
axios.get(d)
.then((response) => {
const cu = response.data.thumbnail_url;
var thing = new MessageEmbed()
                .setColor(client.embedColor)
                        .setTimestamp()
                        .setDescription(`**Added Song to queue**\n${track.title} `)
                .setThumbnail(cu)
return message.channel.send({embeds: [thing]})})
                }
            case 'PLAYLIST_LOADED':
                player.queue.add(res.tracks);
                if (!player.playing && !player.paused && player.queue.totalSize === res.tracks.length) player.play();
                if (search.includes('spotify.com/playlist') === true) {
                    let p = search.split('playlist/')[1];
let c = p.split('?')[0];
let d = 'https://embed.spotify.com/oembed/?url=spotify:playlist:'+c
const axios = require('axios');
axios.get(d)
.then((response) => {
const cu = response.data.thumbnail_url;
var thing = new MessageEmbed()
                .setColor(client.embedColor)
                .setDescription(`**Added Playlist to queue**\n${res.tracks.length} Songs **${res.playlist.name}** `)
                .setImage(cu)
return message.channel.send({embeds: [thing]})})
                } else {
               if(search.includes('spotify.com/album') === true) {
                let p = search.split('album/')[1];
                let c = p.split('?')[0];
                let d = 'https://embed.spotify.com/oembed/?url=spotify:album:'+c
                const axios = require('axios');
                axios.get(d)
                .then((response) => {
                const cu = response.data.thumbnail_url;
                var thing = new MessageEmbed()
                                .setColor(client.embedColor)
                                .setDescription(` **Added Album to queue**\n${res.tracks.length} Songs **${res.playlist.name}** `)
                                .setImage(cu)
                return message.channel.send({embeds: [thing]})})
               }
               else{
                var thing = new MessageEmbed()
                    .setColor(client.embedColor)
                    .setTimestamp()
                    .setDescription(` **Added Playlist to queue**\n${res.tracks.length} Songs **${res.playlist.name}** `)
                return message.channel.send({embeds: [thing]});
                }
            }
            case 'SEARCH_RESULT':
                var track = res.tracks[0];
                player.queue.add(track);
                if (!player.playing && !player.paused && !player.queue.size) {
                    return player.play();
                } else {
                    
                    var thing = new MessageEmbed()
                        .setColor(client.embedColor)
                        .setTimestamp()
                        .setThumbnail(track.displayThumbnail("hqdefault"))
                        .setDescription(`**Added Song to queue**\n**[${track.title}](${track.uri})** [<@${track.requester.id}>]`)
                    return message.channel.send({embeds: [thing]});
                
            }
        }
}