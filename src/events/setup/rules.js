const { ButtonBuilder } = require("@discordjs/builders");
const { stripIndent } = require("common-tags");
const { EmbedBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
const client = require("../../index.js");
const server = require("../../config/server.json");
const rules = require("../../config/rules");
module.exports = {
    name: "rulesLoaded"
};

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId == 'rule') {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Teyit Kurallarını Okudum')
                    .setStyle(ButtonStyle.Success)
                    .setCustomId('accept'),

                new ButtonBuilder()
                    .setLabel('Anlaşmazlık Şartlar ve Hizmet')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://discord.com/terms'),

                new ButtonBuilder()
                    .setLabel('Discord Topluluk Loncaları')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://discord.com/guidelines')
            )
        const embed = new EmbedBuilder()
            .setAuthor({ name: `${interaction.guild.name}`})
            .setDescription(stripIndent`${rules}`)
            .setImage(`${server.images.rulesimage}`)
            .setColor(`#2f3136`)
        interaction.reply({
            embeds: [embed],
            components: [row],
            ephemeral: true
        })
    }
})