const Discord = require('discord.js');
const config = require('./config.json');

require('./db/mongoose.config');

const client = new Discord.Client();
client.login(config.BOT_TOKEN);

client.on('voiceStateUpdate', (oldMember, newMember) => {
    let channel = newMember.guild.channels.cache.get(newMember.channelID);
    
    
    if(channel && channel.id == '758755349288452106'){
    // if(channel && channel.name.includes('➕') && channel.name.includes('help')){
        let user = channel.guild.members.cache.get(newMember.id);
        const roles = user.roles.cache.array()
        
        // user.roles.cache.array().forEach(role => console.log(role.name));
        if(roles.some(r => r.name === 'Student')){
            client.channels.cache.get('759212747505532929').send(`@here ${user.displayName} needs help!`);
        }
    } else if(channel && channel.id == '758755292359295016') {
        let user = channel.guild.members.cache.get(newMember.id);
        const roles = user.roles.cache.array()
        if(roles.some(r => r.name === 'Student')){
            client.channels.cache.get('759213210729185360').send(`@here ${user.displayName} needs help!`);
        }
    }
});

const request = require('request');

const verify = (message, stArr) => {
    let role = message.guild.roles.cache.find(r => r.name === "Grain");
    message.member.setNickname(`${stArr[1]}_${stArr[2]}`);
    message.member.roles.add(role);
}

// client.on('message', message => {
//     if(message.channel.name == "commands"){
//         let url = message.attachments.array()[0].url;
//         request.get(url, (err,res,bod)=>{
//             console.log(bod);
//         })
        
//     }
//     // if(message.content[0] == "!"){
//     //     let msg = message.content.split(" ");
//     //     if(msg[0].toLowerCase() == "!dojo"){
//     //         verify(message, msg);
//     //     }
//     // }
// });



// client.on('voiceStateUpdate', (oldMember, newMember) => {
//     let channel = newMember.guild.channels.cache.get(newMember.channelID);

//     if(channel && channel.name.includes('➕') && channel.name.includes('help')){
//         let user =channel.guild.members.cache.get(newMember.id);
//         client.channels.cache.get('750792764844802048').send(`@here ${user.displayName} needs help!`);
//     }
// })