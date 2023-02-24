const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");
const client = require("../../index.js");

module.exports = {
    name: "feedbackLoaded"
};

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId == 'feedback') {
        const modal = new ModalBuilder()
            .setCustomId('feedbackmodal')
            .setTitle('Kısa ve anlaşılır bir şekilde yazınız')

        const feedback = new TextInputBuilder()
            .setCustomId('feedback')
            .setLabel("Sorunu yaz")
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
            .setMinLength(5)
            .setMaxLength(1024);

        const firstActionRow = new ActionRowBuilder().addComponents(feedback);

        modal.addComponents(firstActionRow);

        await interaction.showModal(modal);
    }
})
