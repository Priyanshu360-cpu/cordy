
module.exports = async function lavalink(client,option){
    const { Manager } = require("erela.js");
    client.manager = new Manager({
        nodes: option,
        send: (id, payload) => {
            const guild = client.guilds.cache.get(id);
            if (guild) guild.shard.send(payload);
        },
        autoPlay: true,
        plugins: [new Spotify({
            clientID: option.spotifyid,
            clientSecret: option.spotifysecret,
        }),
                new Deezer(),
                new FaceBook()
            ],
       });
}