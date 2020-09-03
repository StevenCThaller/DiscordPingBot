const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.login(config.BOT_TOKEN);

client.on('voiceStateUpdate', (oldMember, newMember) => {
    let channel = newMember.guild.channels.cache.get(newMember.channelID);

    if(channel && channel.name.includes('➕') && channel.name.includes('help')){
        let user =channel.guild.members.cache.get(newMember.id);
        
        if(user.roles.highest.name == "Student"){
            client.channels.cache.get('751179744338509915').send(`@here ${user.displayName} needs help!`);
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