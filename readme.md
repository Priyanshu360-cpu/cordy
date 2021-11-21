# Get-Started
Install Cordy
 ```
npm i cordy
```
Cordy Version - 1.0.3
# what is Cordy?
Cordy is a npm package which eases your discord bot making
# To Start your bot easily 
```
const cordy = require('cordy')
cordy.starter(require('"token",{
    status:"Cordy Goes Broom , Testing",
    statusType:"PLAYING",
    statusVisibility:"DND"
})
```

# How to use Cordy in your Bot?
read readme folders to get detailed usage of each command
heres Some example: 

•
```
const cordy = require('cordy')
cordy.chatbot(message,args,client,{
    owner:"Priyanshu"
})
```
<img src = "https://media.discordapp.net/attachments/750089917501014036/911951276672188426/Screenshot_20211121-173816.jpg"></img>
•
```
const cordy = require('cordy')
 cordy.automeme(message,args,client,{
 timer:args[0]})
 ```
<img src = "https://media.discordapp.net/attachments/750089917501014036/911952142531719188/Screenshot_20211121-174103.jpg"></img>
**Make sure this codes are in you message create event**
