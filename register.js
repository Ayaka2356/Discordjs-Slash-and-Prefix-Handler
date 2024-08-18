const { REST, Routes } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, APP_ID, GUILD_ID, MODE } = require("./config.json");

const commands = [];
readdirSync(join(__dirname, "commands"))
.filter((file) => file.endsWith(".js"))
.forEach((file) => {
  const command = require(`./commands/${file}`);

  commands.push(command.data.toJSON());
});

const rest = new REST().setToken(TOKEN);

rest.put(Routes.applicationCommands(APP_ID, MODE == "DEBUG" ? GUILD_ID : "746090798935834844"), { body: commands })
.then(() => console.log(`Commands registered ${MODE == "DEBUG" ? `for guild with ID: ${GUILD_ID}` : "globally"}`))
.catch((err) => console.error(err));
