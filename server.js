const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.login(config.BOT_TOKEN);

client.on('voiceStateUpdate', (oldMember, newMember) => {
    let channel = newMember.guild.channels.cache.get(newMember.channelID);

    if(channel && channel.name.includes('➕') && channel.name.includes('Session')){
        if(channel.parentID == '750798247429275718');
    }
})

console.log("Hello there");