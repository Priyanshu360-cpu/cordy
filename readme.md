# Get-Started
Install Cordy
 ```
npm i cordy
```
Cordy Version - 1.0.3
# what is Cordy?
Cordy is an open soruce npm package which eases your discord bot making
# To Start your bot easily 
```
const cordy = require('cordy')
cordy.starter("token",{
    status:"Cordy Goes Broom , Testing",
    statusType:"PLAYING",
    statusVisibility:"DND"
})
```
<img src = "https://media.discordapp.net/attachments/750089917501014036/911954534862049280/unknown.png"></img>

# How to use Cordy in your Bot?
read readme folders to get detailed usage of each command
heres Some example: 

**Chatbot**
```
const cordy = require('cordy')
cordy.chatbot(message,args,client,{
    color:"FFCBCB"
    owner:"Priyanshu"
})
```
<img src = "https://media.discordapp.net/attachments/750089917501014036/911955270530379796/unknown.png"></img>

**Automeme**
```
const cordy = require('cordy')
 cordy.automeme(message,args,client,{
 timer:args[0]})
 ```
<img src = "https://media.discordapp.net/attachments/750089917501014036/911955587993042954/unknown.png"></img>

**FindTheEmoji**
```
const cordy = require('cordy')
cordy.emoji(message,args,client)
```
<img src = "https://media.discordapp.net/attachments/750089917501014036/911956598669316136/unknown.png"></img>

**Make sure this codes are in you message create event**

*Made with ❤️ by Priyanshu*
<<<<<<< HEAD


=======
>>>>>>> d753a4963c3921337d9175d7f3ec334d9ac8418e
