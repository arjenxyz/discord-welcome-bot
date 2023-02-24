const fs = require('fs');
const colors = require('colors');

module.exports = (client) => {
    console.log("----------------------------------------".yellow);

    fs.readdirSync('./src/events/').forEach(dir => {
        const commands = fs.readdirSync(`./src/events/${dir}`).filter(file => file.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../events/${dir}/${file}`);
            if (pull.name) {
                client.events.set(pull.name, pull);
                console.log(`[İtalyan] Bir dosya yüklendi: ${pull.name}`.green)
            } else {
                console.log("\n" + "----------------------------------------".red)
                console.log(`[Hey İtalyan Beklenmedik Bir Hata Aldık!] ${file} dosyası yüklenemedi `.red.bold)
                console.log("----------------------------------------".red)
                continue;
            }
        }
    })
    console.log("----------------------------------------".yellow);
}
