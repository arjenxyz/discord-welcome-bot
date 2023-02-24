const fs = require('fs');
const colors = require('colors');

module.exports = (client) => {
    console.log("----------------------------------------".yellow);

    fs.readdirSync('./src/commands/').forEach(dir => {
        const commands = fs.readdirSync(`./src/commands/${dir}`).filter(file => file.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            if (pull.name) {
                client.commands.set(pull.name, pull);
                console.log(`İTALYAN bir dosya yüklendi: ${pull.name}`.green)
            } else {
                console.log("\n" + "----------------------------------------".red)
                console.log(`[Hey Hataaaa alıyoruzz] ${file} dosyası yüklenemedi, modül adı değeri eksik.`.red.bold)
                console.log("----------------------------------------".red)
                continue;
            };

            if (pull.aliases && Array.isArray(pull.aliases)) {
                pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
            }
        }
    })
}
