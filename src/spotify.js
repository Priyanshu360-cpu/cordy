module.exports = async function spotify(message,args,client){
  const {MessageEmbed} = require("discord.js");
  const axios = require("axios")
  switch(args[0].includes("spotify.com/track")){
    case true:
      let p = args[0].split('track/')[1];
      let c = p.split('?')[0];
      let d = 'https://embed.spotify.com/oembed/?url=spotify:track:'+c
      axios.get(d)
      .then((response) => {
      const cu = response.data.thumbnail_url;
      var thing = new MessageEmbed()
                      .setColor(client.embedColor)
                              .setTimestamp()
                              .setTitle(`${response.data.title}`)
                      .setImage(cu)
      return message.channel.send({embeds: [thing]})})
      break;
    case false:
        switch(args[0].includes("spotify.com/playlist")){
            case true:
              let p = args[0].split('playlist/')[1];
              let c = p.split('?')[0];
              let d = 'https://embed.spotify.com/oembed/?url=spotify:playlist:'+c
              axios.get(d)
              .then((response) => {
              const cu = response.data.thumbnail_url;
              var thing = new MessageEmbed()
                              .setColor(client.embedColor)
                              .setTimestamp()
                              .setTitle(`${response.data.title}`)
                              .setImage(cu)
              return message.channel.send({embeds: [thing]})})
              break;
           case false:
               switch(args[0].includes("spotify.com/album")){
                   case true:
                      let p = args[0].split('album/')[1];
                      let c = p.split('?')[0];
                      let d = 'https://embed.spotify.com/oembed/?url=spotify:album:'+c
                      
                      axios.get(d)
                      .then((response) => {
                      const cu = response.data.thumbnail_url;
                      var thing = new MessageEmbed()
                                      .setColor(client.embedColor)
                                      .setTitle(`${response.data.title}`)
                                      .setImage(cu)
                                      .setTimestamp()
                      return message.channel.send({embeds: [thing]})})
                      break;
                   case false:
                       return message.reply("Not a spotify Url")

               }

        }

                      
}}