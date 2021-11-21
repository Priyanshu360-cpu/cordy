# Code
```
const cordy = require('cordy')
cordy.loop(message,args,client,
{
    title:"A title",
    description: "A description",
    footer: "A footer",
    color:"FFCBCB",
    channel:message.channel.id,
    timer:5000
})
```
# Usage
```
prefix commandname args
```
**Used to Loop Edit A message based on the timer**