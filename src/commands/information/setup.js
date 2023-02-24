const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Client, Message } = require('discord.js');
const server = require("../../config/server.json")

module.exports = {
  name: "setup",
  aliases: ["s"],
  ownerOnly: true,
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   */
  run: async (client, message, args) => {
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('rule')
          .setLabel('Teyit Kuralları')
     
          .setStyle(ButtonStyle.Success)
          .setEmoji("📖"),

       /* new ButtonBuilder()
          .setCustomId('role')
          .setLabel('Rol Seç')
          .setStyle(ButtonStyle.Primary)
          .setEmoji("1057782656567345232"),
*/
        new ButtonBuilder()
          .setCustomId("feedback")
          .setLabel('Sorun Bildir')
          .setStyle(ButtonStyle.Danger)
          .setEmoji("1057782656567345232"),

        new ButtonBuilder()

          .setLabel('YouTube')
          .setStyle(ButtonStyle.Link)
          .setURL("https://www.youtube.com/@GizemKurt"),
      )



    const embed = new EmbedBuilder()
      .setAuthor({ name: `${message.guild.name}` })
      .setDescription("<a:merhaba:1053271931903803393> **Sunucumuza Hoş Geldin,**\n`Kayıt olmadan önce bilmeni istediğimiz birkaç kural var.`\n<a:mmm:1057739088431681537> **Kayıt odasını görüntülemeden önce **__Teyit Kuralları__** butonuna tıklayınız.**")     .setImage(server.images.welcomeimage)
      .setColor(`#0CF2FF`)
    message.channel.send({
      embeds: [embed],
      components: [row]
    })
  }
}
