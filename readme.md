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
•
```
const cordy = require('cordy')
 cordy.iphone(message,args,client)
 ```
**Make sure this codes are in you message create event**
