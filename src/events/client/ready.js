const client = require('../../index');
const colors = require('colors');
const { ActivityType } = require('discord.js');

module.exports = {
    name: "ready"
};

client.once('ready', async () => {
    const users = client.users.cache.size

    console.log(`Ben ${client.user.tag},\n
İtalyan#0142 Tarafından oluşturuldum.\n
Gizem Kurt'un Yan Çarları sunucusunda aktif olarak hizmet veriyorum.`.bold)
    console.log("----------------------------------------".white);

    setInterval(() => {
        const statuses = [`Made By İtalyan`];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: ActivityType.Watching });
    }, 60000);
})
