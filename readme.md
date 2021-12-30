# Get-Started
Install Cordy
 ```
npm i cordy
```
Cordy Version - 1.0.5
# what is Cordy?
Cordy is an open soruce npm package which eases your discord bot making
# To Start your bot easily 
```
const Cordy = require("cordy")
new Cordy().starter("token",{activity:[{
    status:"Cordy Goes Broom",
    statusType:"PLAYING",
    statusVisibility:"DND"}
],timer:5000});

```
# Multiple Status 
```
const Cordy = require("cordy")
new Cordy().starter("token",{activity:[{
    status:"Cordy Goes Broom",
    statusType:"PLAYING",
    statusVisibility:"DND"},
    {
        status:"Multiple status Uwu",
        statusType:"LISTENING",
        statusVisibility:"IDLE"},
        {
            status:"I can create infinite status with this packages",
            statusType:"LISTENING",
            statusVisibility:"IDLE"}
],timer:5000});

```
<img src = "https://cdn.discordapp.com/attachments/921847291659305020/926114845420576798/unknown.png"></img>

# Lavalink Made Easy
```
 const Cordy = require("cordy")
new Cordy().lavalink(client,{
    host:"hosturl";
    port:port_number;
    password:"lavalinkpassword";
    identifier:"identifier for ur host";
    retryAmount:number;
    retryDelay:delay_number;
    secure:boolean;
    spotifyid:"spotifyid";
    spotifysecret:"spotifysecret";
})
```

# How to use Cordy in your Bot?
Read [Readme](https://github.com/Priyanshu360-cpu/cordy/tree/master/readme) folders to get detailed usage of each command
heres Some example: 

**Chatbot**
```
const cordy = require('cordy')
new cordy().chatbot(message,args,client,{
    color:"FFCBCB",
    owner:"Priyanshu"
})
```
<img src = "https://media.discordapp.net/attachments/750089917501014036/911955270530379796/unknown.png"></img>

**Automeme**
```
const cordy = require('cordy')
 new cordy().automeme(message,args,client,{
 timer:args[0]})
 ```
<img src = "https://media.discordapp.net/attachments/750089917501014036/911955587993042954/unknown.png"></img>

**FindTheEmoji**
```
const cordy = require('cordy')
new cordy().emoji(message,args,client)
```
<img src = "https://media.discordapp.net/attachments/750089917501014036/911956598669316136/unknown.png"></img>

**Make sure these codes are in your message create event**

*Made with ❤️ by Priyanshu*
