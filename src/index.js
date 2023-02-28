// MAİN Dosyası 

require('./console/watermark')
const { joinVoiceChannel } = require('@discordjs/voice');
const { Client, Partials, Collection } = require('discord.js');
const colors = require('colors');
const config = require('./config/config.json');
const path = require('path');
const client = new Client({
  intents: [
    "Guilds",
    "GuildMessages",
    "GuildPresences",
    "GuildMessageReactions",
    "DirectMessages",
    "MessageContent",
    "GuildVoiceStates",
    "GuildMembers",
    "DirectMessageTyping"
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ]
})


client.config = require('./config/config.json')
client.commands = new Collection()
client.events = new Collection()
client.aliases = new Collection()
module.exports = client;

["command", "event"].forEach(file => {
  require(`./handlers/${file}`)(client);
});

client.login(process.env.TOKEN)
  .catch((err) => {
    console.log("[CRUSH] Botunuza bağlanırken bir şeyler ters gitti" + "\n");
    console.log("[CRUSH] DiscordAPI'den Kaynaklanan Hata:" + err);
    process.exit();
  })

process.on("unhandledRejection", async (err) => {
  console.log(`[ANTI - CRUSH] İşlenmemiş Reddetme : ${err}`.red.bold)
  console.log(err)
})

// auto kill
const ms = require("ms");
setInterval(() => {
  if (!client || !client.user) {
    console.log("İstemci Giriş Yapmıyor, İşlem Sonlandırılıyor")
    process.kill(1);
  }
}, ms("1m"));


//_________________________________Uptime Web_____________________________________________//
const http = require("http");
http.createServer((_, res) => res.end("Made By İtalyan")).listen(8080)
//__________________________________________________________________________________//

//___________________________________kayıt-etiket___________________________________________//
client.on("guildMemberAdd", async member => {
if(member.user.bot) return;
member.guild.channels.cache.get("1079382505754472510").send(`${member}, Kayıt olmak için kurallarımızı kabul etmen gerek!\n<#1079382531289387068>`)
});
//__________________________________________________________________________________//

//____________________________________Botu-este-tutma ___________________________________________//

client.on('ready', () => {
  joinVoiceChannel({ 
channelId: "1078829008348786737", 
guildId: "1078829007644147722",  
adapterCreator: client.guilds.cache.get("1078829007644147722").voiceAdapterCreator
    }); 
}); 
//__________________________________________________________________________________//
