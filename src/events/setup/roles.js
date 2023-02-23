const { ButtonBuilder } = require("@discordjs/builders");
const { EmbedBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
const client = require("../../index.js")
const server = require("../../config/server.json")

module.exports = {
    name: "rolesLoaded"
};

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    const member = await interaction.message.guild.members.fetch({
        user: interaction.user.id,
        force: true
    })

    if (interaction.customId == 'role') {
        const row = new ActionRowBuilder()
            .addComponents(
               /*
               
               **BURASI ROL YERİ SEDEFLE BİZİM SUNUCUDA KULLANİODUM BU PROJEYİ**
               */
               
               new ButtonBuilder()
                    .setLabel('Yönetici Rolü')
                    .setCustomId('announcements')
                    .setStyle(ButtonStyle.Success),
              
new ButtonBuilder() .setLabel('İtalyan')

              
              .setCustomId('italyan') 
              .setStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setLabel('🧡')
                    .setCustomId('status')
                    .setStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setLabel('Cips')
                    .setCustomId('polls')
                    .setStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setLabel('Sedef')
                    .setCustomId('giveaways')
                    .setStyle(ButtonStyle.Success)
            )
        const embed = new EmbedBuilder()
            .setAuthor({ name: `${interaction.guild.name} Sunucusunun Rolleri`})
            .setImage(`${server.images.rolesimage}`)
            .setColor(`#2f3136`)
        interaction.reply({
            embeds: [embed],
            components: [row],
            ephemeral: true
        })
    }

    if (interaction.customId == 'announcements') {
        if (!member.roles.cache.has(`${server.roles.announcementrole}`)) {
            await member.roles.add(`${server.roles.announcementrole}`)
            return interaction.reply({ content: `Yönetici Rolü Verildi.`, ephemeral: true })
        } else if (member.roles.cache.has(`${server.roles.announcementrole}`)) {
            await member.roles.remove(`${server.roles.announcementrole}`)
            return interaction.reply({ content: `Yönetici Rolü kaldırıldı Za`, ephemeral: true })
        }
    }
    else if (interaction.customId == 'status') {
        if (!member.roles.cache.has(`${server.roles.statusrole}`)) {
            await member.roles.add(`${server.roles.statusrole}`)
            return interaction.reply({ content: `🧡 rolü eklendi`, ephemeral: true })
        } else if (member.roles.cache.has(`${server.roles.statusrole}`)) {
            await member.roles.remove(`${server.roles.statusrole}`)
            return interaction.reply({ content: `🧡 Rolü kaldırıldı ZAA.`, ephemeral: true })
        }
    }
    else if (interaction.customId == 'polls') {
        if (!member.roles.cache.has(`${server.roles.pollrole}`)) {
            await member.roles.add(`${server.roles.pollrole}`)
            return interaction.reply({ content: `**Cips** Rolü verildi`, ephemeral: true })
        } else if (member.roles.cache.has(`${server.roles.pollrole}`)) {
            await member.roles.remove(`${server.roles.pollrole}`)
            return interaction.reply({ content: `Cips Rolü Kaldırıldı ağla`, ephemeral: true })
        }
    }

else if (interaction.customId == 'italyan') {
        if (!member.roles.cache.has(`${server.roles.italyanrole}`)) {
            await member.roles.add(`${server.roles.italyanrole}`)
            return interaction.reply({ content: `**[Eklendi]** İtalyan Rolü`, ephemeral: true })
        } else if (member.roles.cache.has(`${server.roles.italyanrole}`)) {
            await member.roles.remove(`${server.roles.italyanrole}`)
            return interaction.reply({ content: `**[Kaldırıldı]** İtalyan Rolü`, ephemeral: true })
        }
}
      
    else if (interaction.customId == 'giveaways') {
        if (!member.roles.cache.has(`${server.roles.giveawayrole}`)) {
            await member.roles.add(`${server.roles.giveawayrole}`)
            return interaction.reply({ content: `*** bos`, ephemeral: true })
        } else if (member.roles.cache.has(`${server.roles.giveawayrole}`)) {
            await member.roles.remove(`${server.roles.giveawayrole}`)
            return interaction.reply({ content: `**dldl** Rolü kaldırıldı`, ephemeral: true })
        }
    }
    else if (interaction.customId == 'accept') {
        if (!member.roles.cache.has(`${server.roles.acceptrole}`)) {
            await member.roles.add(`${server.roles.acceptrole}`)
            return interaction.reply({ content: `${interaction.member}, <#922470420836401213> odasına erişimin açılmıştır.\nArtık kayıt olabilirsin.`, ephemeral: true })
        } else if (member.roles.cache.has(`${server.roles.acceptrole}`)) {
            return interaction.reply({ content: `Hey! ${interaction.member}, <#922470420836401213> odasına erişimin zaten açılmış!\nSorun yaşadığını düşünüyorsan **Sorun Bildir** butonuna tıkla. `, ephemeral: true })
        }
    }
})