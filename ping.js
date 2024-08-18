const { SlashCommandBuilder, Client, EmbedBuilder } = require('discord.js')

module.exports = { 
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Checking the ping of the bot...'),

    execute: async (client, interaction) => {
        if (interaction.channel.type === 'DM') return interaction.reply({ content: 'This command can\'t be used in dm', ephemeral: true })
    
        const embed = new EmbedBuilder()
        .setDescription('Calculating...') 
        .setColor('#A020F0')

        interaction.reply({ embeds: [embed], fetchReply: true }).then(async (msg) => {
            const newEmbed = new EmbedBuilder()
            .setTitle('Pong!🏓')
            .setDescription(`Latency: \`${client.ws.ping}ms\` \n API: \`${msg.createdTimestamp - interaction.createdTimestamp}ms\``) 
            .setColor('#A020F0') 
            .setFooter({ text: `Requested by ${interaction.user.tag}` })
            .setTimestamp(new Date())

            await interaction.editReply({ embeds: [newEmbed] })
        }) 
    }
}
