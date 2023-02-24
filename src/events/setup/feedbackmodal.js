const client = require("../../index")
const server = require("../../config/server.json");
const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "feedbackmodalLoaded"
};

client.on('interactionCreate', async interaction => {
    if (!interaction.isModalSubmit()) return;
    if (interaction.customId === 'feedbackmodal') {
        await interaction.reply({ content: 'Sorun iletildi', ephemeral: true });
    }
    const channel = interaction.guild.channels.cache.get(`${server.channel.feedback}`)
    const feedback = interaction.fields.getTextInputValue('feedback');

    const embed = new EmbedBuilder()
        .setAuthor({iconURL: interaction.user.displayAvatarURL() , name: `${interaction.user.username}`})
        .setDescription(`**Mesaj** :\n${feedback}`)
    
    try {
        channel.send({
            embeds: [embed]
        })
    } catch (err) {
        console.log(err)
    }
});
