const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder().setName("embed").setDescription("show an embed"),
    async execute(client, interaction) {
        const embed = new EmbedBuilder().setTitle("I'm an Embed")
                                        .setURL('https://www.youtube.com/watch?v=IbkEzIRR4pY')
                                        .setDescription('test')
                                        .setAuthor({ name: 'hi', iconURL: '放URL', url: '放URL' });
        interaction.reply({ embeds: [embed] });
    },
};
/*
.setURL('放URL')
.setAuthor({ name: '', iconURL: '放URL', url: '放URL' })
.setDescription('')
.setThumbnail('放URL')
.addFields({ name: '', value: '', inline: true or false })
.setImage('放URL')
.setTimestamp()
.setFooter({ text: '', iconURL: '放URL' });
*/
