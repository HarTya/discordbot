require('dotenv').config();

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
  {
    name: 'areyouhere',
    description: 'Позвать бота'
  },
  {
    name: 'lessons',
    description: 'Расписание'
  },
]; 

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT, process.env.GUILD),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

const Discord = require('discord.js');

const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS, 
    Discord.Intents.FLAGS.GUILD_MESSAGES, 
  ]
})

const db = require('./lessons.json');
const stringDb = `
ВТОРНИК\n1. ${db.tuesday['1']}\n2. ${db.tuesday['2']}\n3. ${db.tuesday['3']}\n4. ${db.tuesday['4']}\n5. ${db.tuesday['5']}\n6. ${db.tuesday['6']}\n7. ${db.tuesday['7']}\n
СРЕДА\n1. ${db.wednesday['1']}\n2. ${db.wednesday['2']}\n3. ${db.wednesday['3']}\n4. ${db.wednesday['4']}\n5. ${db.wednesday['5']}\n6. ${db.wednesday['6']}\n7. ${db.wednesday['7']}\n8. ${db.wednesday['8']}\n
ЧЕТВЕРГ\n1. ${db.thursday['1']}\n2. ${db.thursday['2']}\n3. ${db.thursday['3']}\n4. ${db.thursday['4']}\n5. ${db.thursday['5']}\n6. ${db.thursday['6']}\n7. ${db.thursday['7']}\n
ПЯТНИЦА\n1. ${db.friday['1']}\n2. ${db.friday['2']}\n3. ${db.friday['3']}\n4. ${db.friday['4']}\n5. ${db.friday['5']}\n6. ${db.friday['6']}\n7. ${db.friday['7']}\n
СУББОТА\n1. ${db.saturday['1']}\n2. ${db.saturday['2']}\n3. ${db.saturday['3']}\n4. ${db.saturday['4']}\n5. ${db.saturday['5']}\n6. ${db.saturday['6']}\n7. ${db.saturday['7']}
`;

const time = [
  `${db.time[1]}`, `${db.time[2]}`, `${db.time[3]}`, `${db.time[4]}`, `${db.time[5]}`, `${db.time[6]}`, `${db.time[7]}`, `${db.time[8]}`
]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  setInterval(() => {
    ///////////////////// ВТОРНИК /////////////////////

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[0] && new Date().getUTCDay() === 2) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[1]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[1] && new Date().getUTCDay() === 2) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[2]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[2] && new Date().getUTCDay() === 2) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[3]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[3] && new Date().getUTCDay() === 2) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[4]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[4] && new Date().getUTCDay() === 2) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[5]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[5] && new Date().getUTCDay() === 2) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[6]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[6] && new Date().getUTCDay() === 2) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[7]}`);
        })
    }

    ///////////////////// СРЕДА /////////////////////

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[0] && new Date().getUTCDay() === 3) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[1]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[1] && new Date().getUTCDay() === 3) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[2]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[2] && new Date().getUTCDay() === 3) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[3]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[3] && new Date().getUTCDay() === 3) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[4]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[4] && new Date().getUTCDay() === 3) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[5]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[5] && new Date().getUTCDay() === 3) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[6]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[6] && new Date().getUTCDay() === 3) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[7]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[6] && new Date().getUTCDay() === 3) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[8]}`);
        })
    }

    ///////////////////// ЧЕТВЕРГ /////////////////////

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[0] && new Date().getUTCDay() === 4) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[1]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[1] && new Date().getUTCDay() === 4) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[2]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[2] && new Date().getUTCDay() === 4) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[3]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[3] && new Date().getUTCDay() === 4) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[4]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[4] && new Date().getUTCDay() === 4) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[5]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[5] && new Date().getUTCDay() === 4) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[6]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[6] && new Date().getUTCDay() === 4) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[7]}`);
        })
    }

    ///////////////////// ПЯТНИЦА /////////////////////

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[0] && new Date().getUTCDay() === 5) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[1]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[1] && new Date().getUTCDay() === 5) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[2]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[2] && new Date().getUTCDay() === 5) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[3]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[3] && new Date().getUTCDay() === 5) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[4]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[4] && new Date().getUTCDay() === 5) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[5]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[5] && new Date().getUTCDay() === 5) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[6]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[6] && new Date().getUTCDay() === 5) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[7]}`);
        })
    }

    ///////////////////// СУББОТА /////////////////////

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[0] && new Date().getUTCDay() === 6) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[1]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[1] && new Date().getUTCDay() === 6) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[2]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[2] && new Date().getUTCDay() === 6) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[3]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[3] && new Date().getUTCDay() === 6) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[4]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[4] && new Date().getUTCDay() === 6) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[5]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[5] && new Date().getUTCDay() === 6) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[6]}`);
        })
    }

    if (`${new Date().getHours()}:${new Date().getMinutes()}` === time[6] && new Date().getUTCDay() === 6) {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[7]}`);
        })
    }
  }, 5000);
})

client.on('messageCreate', message => {
  if (message.content.toLocaleLowerCase().includes('бля') === true || message.content.toLocaleLowerCase().includes('сука') === true || message.content.toLocaleLowerCase().includes('пиздец') === true || message.content.toLocaleLowerCase().includes('нахуй') === true || message.content.toLocaleLowerCase().includes('пизда') === true || message.content.toLocaleLowerCase().includes('уебан') === true || message.content.toLocaleLowerCase().includes('ебать') === true || message.content.toLocaleLowerCase().includes('хуй') === true) {
    if (message.author.tag === 'Робот Долбоёб#9882') {
      return
    }
    if (message.author.tag === 'XarTya#9355') {
      return message.reply(`Тебе можно, пупсик`);
    }
    message.reply(`Общайся без мата, ${message.author.tag}, или выебу своим 50+ бит железным хуем`);
  }

  if (message.content.toLocaleLowerCase().includes('артя') === true || message.content.toLocaleLowerCase().includes('artya') === true) {
    if (message.author.tag === 'Робот Долбоёб#9882') {
      return
    }
    message.reply('Фу такой хуёвый код пишет это пиздец а ой');
  }

  if (message.content.toLocaleLowerCase().includes('https://') === true) {
    if (message.author.tag === 'Робот Долбоёб#9882') {
      return
    }
    message.reply('Неинтересная хуйня лучше зайди сюда https://github.com/HarTya');
  }

  if (message.content.toLocaleLowerCase().includes('я робот') === true) {
    if (message.author.tag === 'Робот Долбоёб#9882') {
      return
    }
    message.reply('Я должен танцевать');
  }

  if (message.content.toLocaleLowerCase().includes('bambino') === true) {
    if (message.author.tag === 'Робот Долбоёб#9882') {
      return
    }
    message.reply('I understand but пошел нахуй черномазый');
  }
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'areyouhere') {
    await interaction.reply('Иди нахуй');
  }

  if (interaction.commandName === 'lessons') {
    await interaction.reply(stringDb);
  }
});

client.login(process.env.TOKEN);