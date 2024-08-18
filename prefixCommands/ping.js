const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ChannelType, PermissionsBitField, Events, WebhookClient } = require('discord.js');

module.exports = {
  name: 'pin',
  description: 'Replies with Pong!',
  executeMessage: async (message, args) => {
    message.reply('Pong!');
  },
};
