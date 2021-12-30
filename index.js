class Fun{
    constructor (){
        this.emoji = require('./src/findtheemoji')
        this.starter = require('./src/starter');
        this.audit = require('./src/audit')
        this.createsticker = require('./src/sticker')
        this.avatar = require('./src/advancedav')
        this.starter = require('./src/starter')
        this.afk = require('./src/afk')
        this.loop = require('./src/loop')
        this.shotoniphone = require('./src/iphone')
        this.automeme = require('./src/automeme')
        this.chatbot = require('./src/chatbot')
        this.spotify = require('./src/spotify')
        this.snipe = require('./src/snipe')
}
} 
class lavalinkmusic extends Fun{
    constructor(){
        super();
        this.lavalink = require('./src/lavalink')
        this.play = require('./src/play')
        this.stop = require('./src/stop')
        this.autoplay = require('./src/autoplay')
    }
}
class Cordy extends lavalinkmusic{
    constructor(){
        super();
        this.eval = require("./src/eval")
    }
}
module.exports = Cordy;