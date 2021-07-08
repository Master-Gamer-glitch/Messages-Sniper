const Discord = require('discord.js')
const Client = new Discord.Client
const prefix = " "                                                         // ENTER ANY PREFIX

Client.on('ready', () => {
    console.log('Sniper Ready 😒');
    client.user.setActivity("Code By HelloDiscord", {type: "WATCHING"});
})

Client.on('messageDelete', async (message) => {
    content = message.content;
    sender = message.author;
    console.log('"' + content + '"', 'by' ,sender.tag, 'was deleted')
});

Client.on('message', message => {
    if(message.content === prefix + 'snipe'){
        const embed = new Discord.MessageEmbed()
        .setAuthor(sender.tag, sender.avatarURL({dynamic: true}))
        .setDescription(content)
        .setFooter("Sniped The Message Lol ☠🔥")
        .setTimestamp();
        message.channel.send(embed);
        console.log('"'+ content +'"', 'was sniped')
    }
})

Client.login('token')                                                  // ENTER YOUR BOT TOKEN
                                                                       // BOT WILL NOT SNIPE MESSAGES SENT/DELETED BEFORE THE BOT WAS ONLINE!
                                                                       // HOPE YOU LIKE IT
