# Discord Bot v14.15.3 Slash and Prefix Handler

A discord bot for Slash and Prefix Handler to start up!

## Features
- Basic Slash Handler.
- Basic Prefix Handler.
- Both can be used.
- Slash ping command.
- Prefix ping command.

## Prerequisites

- Node.js

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Ayaka2356/Discordjsv14-Slash-and-Prefix-Handler.git
cd Discordjsv14-Slash-and-Prefix-Handler
```
Install dependencies:

```bash
npm install
```

Run the bot:
```
node index.js
```
# Commands Table


| Command                         | Description                                         | Options                                                                                                         |
|---------------------------------|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| `/ping`         | Shows you ping in Slash                       | Startup Command, required) |
| `!ping`         | Shows you ping in prefix                        | Startup Command, required) |

# Do you want it only for Slash Commands ?

Delete this part from your `index.js` file.
```
client.prefixCommands = new Collection();
const prefixCommands = readdirSync(join(__dirname, "prefixCommands"))
  .filter((file) => file.endsWith(".js"))
  .forEach((file) => {
    const command = require(`./prefixCommands/${file}`);
    console.log(`Prefix command loaded - ${file}`);

    client.prefixCommands.set(command.name, command);
  });
```
## Message Event 
```
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const prefix = '.'; // Your prefix here
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.prefixCommands.get(commandName);
  if (!command) return;

  try {
    await command.executeMessage(message, args);
  } catch (error) {
    console.error(error);
    await message.reply({ content: 'There was an error while executing this command!' });
  }
})
```
Delete these all and it can be only used for Prefix commands and also don't forget to delete files related to it.

# Do you want it only for Prefix Commands ?

Delete this part from your `index.js` file.
```
readdirSync(join(__dirname, "commands"))
  .filter((file) => file.endsWith(".js"))
  .forEach((file) => {
    const command = require(`./commands/${file}`);
    console.log(`Command loaded - ${file}`);

    client.commands.set(command.data.name, command);
  });
```
## Interaction Event 
```
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const commands = client.commands.get(interaction.commandName);
  if (!commands) return;

  try {
    await commands.execute(client, interaction);
  } catch (err) {
    console.error(err);
  }
});
```
Delete these all and it can be only used for Prefix commands and also don't forget to delete files related to it.

# Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
# Errors ?
In case of any error, [join this server]() and ping me @ayaka068198, https://discord.gg/FCGn8B58jh
# License
This project is licensed under the Apache-2.0 License. See the LICENSE file for details.
