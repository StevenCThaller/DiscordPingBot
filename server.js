const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.login(config.BOT_TOKEN);

client.on('voiceStateUpdate', (oldMember, newMember) => {
    let channel = newMember.guild.channels.cache.get(newMember.channelID);

    if(channel && channel.name.includes('➕') && channel.name.includes('help')){
        let user =channel.guild.members.cache.get(newMember.id);
        if(!user.displayName.includes('TA_') && !user.displayName.includes('Instructor_')){
            client.channels.cache.get('738524948431241217').send(`@here ${user.displayName} needs help!`);
        }
    }
})
// client.on('voiceStateUpdate', (oldMember, newMember) => {
//     let channel = newMember.guild.channels.cache.get(newMember.channelID);

//     if(channel && channel.name.includes('➕') && channel.name.includes('help')){
//         let user =channel.guild.members.cache.get(newMember.id);
//         client.channels.cache.get('750792764844802048').send(`@here ${user.displayName} needs help!`);
//     }
// })