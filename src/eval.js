module.exports=async function eval(message,args){
    const { MessageEmbed } = require("discord.js");
    const { post } = require("node-superfetch");
    const embed = new MessageEmbed()
        .addField("Input", "```js\n" + args.join(" ") + "```");

    try {
        const code = args.join(" ");
        if (!code) return message.channel.send("Please include the code.");
        let evaled;

        if (code.includes(`SECRET`) || code.includes(`TOKEN`) || code.includes("process.env") || code.includes(`Token`) || code.includes(`token`) ) {
            evaled = "Never gonna give you up the token, Never gonna let you down";
        } else {
            evaled = await eval(code);
        }

        if (typeof evaled !== "string") evaled = await require("util").inspect(evaled, { depth: 0 });

        let output = clean(evaled);
        if (output.length > 1024) {
           
            const { body } = await post("https://hastebin.com/documents").send(output);
            embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor(message.client.embedColor);
          
        } else {
            embed.addField("Output", "```js\n" + output + "```").setColor(message.client.embedColor);
        }

        message.channel.send({embeds: [embed]});

    } catch (error) {
        let err = clean(error);
        if (err.length > 1024) {
           
            const { body } = await post("https://hastebin.com/documents").send(err);
            embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("RED");
        } else {
            embed.addField("Output", "```js\n" + err + "```").setColor("RED");
        }

        message.channel.send({embeds: [embed]});
    }
}

function clean(string) {
if (typeof Text === "string") {
    return string.replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203))
} else {
    return string;
}
}