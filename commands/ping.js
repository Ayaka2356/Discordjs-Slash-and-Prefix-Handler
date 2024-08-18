const { SlashCommandBuilder, Client, EmbedBuilder } = require('discord.js')

module.exports = { 
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
     .setDMPermission(false);
    execute: async (client, interaction) => {
            await interaction.reply({ content: Pong! })
        }) 
    }
}
