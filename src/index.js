require('dotenv').config();

const { REST } = require('@discordjs/rest');
const { default: axios } = require('axios');
const { Routes } = require('discord-api-types/v9');

const commands = [
  {
    name: 'areyouhere',
    description: 'Позвать бота'
  },
  {
    name: 'lessons',
    description: 'Расписание'
  }
]; 

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT, process.env.GUILD),
      { body: commands }
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
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
})

const cb = require('cleverbot-free');

const db = require('./lessons.json');
const stringDb = `
${db.tuesday.day}\n1. ${db.tuesday[1].name}\n2. ${db.tuesday[2].name}\n3. ${db.tuesday[3].name}\n4. ${db.tuesday[4].name}\n5. ${db.tuesday[5].name}\n6. ${db.tuesday[6].name}\n7. ${db.tuesday[7].name}\n
${db.wednesday.day}\n1. ${db.wednesday[1].name}\n2. ${db.wednesday[2].name}\n3. ${db.wednesday[3].name}\n4. ${db.wednesday[4].name}\n5. ${db.wednesday[5].name}\n6. ${db.wednesday[6].name}\n7. ${db.wednesday[7].name}\n8. ${db.wednesday[8].name}\n
${db.thursday.day}\n1. ${db.thursday[1].name}\n2. ${db.thursday[2].name}\n3. ${db.thursday[3].name}\n4. ${db.thursday[4].name}\n5. ${db.thursday[5].name}\n6. ${db.thursday[6].name}\n7. ${db.thursday[7].name}\n
${db.friday.day}\n1. ${db.friday[1].name}\n2. ${db.friday[2].name}\n3. ${db.friday[3].name}\n4. ${db.friday[4].name}\n5. ${db.friday[5].name}\n6. ${db.friday[6].name}\n7. ${db.friday[7].name}\n
${db.saturday.day}\n1. ${db.saturday[1].name}\n2. ${db.saturday[2].name}\n3. ${db.saturday[3].name}\n4. ${db.saturday[4].name}\n5. ${db.saturday[5].name}\n6. ${db.saturday[6].name}\n7. ${db.saturday[7].name}
`;

const time = [
  db.time[1], db.time[2], db.time[3], db.time[4], db.time[5], db.time[6], db.time[7], db.time[8]
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  setInterval(async () => {
    clearInterval()
    const response = await axios.get('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Kiev');

    console.log(response.data.time);

    ///////////////////// ВТОРНИК /////////////////////

    if (response.data.time === time[0] && response.data.dayOfWeek === 'Tuesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[1].name} ${db.tuesday[1].conf}`);
        })
    }

    if (response.data.time === time[1] && response.data.dayOfWeek === 'Tuesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[2].name} ${db.tuesday[2].conf}`);
        })
    }

    if (response.data.time === time[2] && response.data.dayOfWeek === 'Tuesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[3].name} ${db.tuesday[3].conf}`);
        })
    }

    if (response.data.time === time[3] && response.data.dayOfWeek === 'Tuesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[4].name} ${db.tuesday[4].conf}`);
        })
    }

    if (response.data.time === time[4] && response.data.dayOfWeek === 'Tuesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[5].name} ${db.tuesday[5].conf}`);
        })
    }

    if (response.data.time === time[5] && response.data.dayOfWeek === 'Tuesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[6].name} ${db.tuesday[6].conf}`);
        })
    }

    if (response.data.time === time[6] && response.data.dayOfWeek === 'Tuesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.tuesday[7].name} ${db.tuesday[7].conf}`);
        })
    }

    ///////////////////// СРЕДА /////////////////////

    if (response.data.time === time[0] && response.data.dayOfWeek === 'Wednesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[1].name} ${db.wednesday[1].conf}`);
        })
    }

    if (response.data.time === time[1] && response.data.dayOfWeek === 'Wednesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[2].name} ${db.wednesday[2].conf}`);
        })
    }

    if (response.data.time === time[2] && response.data.dayOfWeek === 'Wednesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[3].name} ${db.wednesday[3].conf}`);
        })
    }

    if (response.data.time === time[3] && response.data.dayOfWeek === 'Wednesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[4].name} ${db.wednesday[4].conf}`);
        })
    }

    if (response.data.time === time[4] && response.data.dayOfWeek === 'Wednesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[5].name} ${db.wednesday[5].conf}`);
        })
    }

    if (response.data.time === time[5] && response.data.dayOfWeek === 'Wednesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[6].name} ${db.wednesday[6].conf}`);
        })
    }

    if (response.data.time === time[6] && response.data.dayOfWeek === 'Wednesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[7].name} ${db.wednesday[7].conf}`);
        })
    }

    if (response.data.time === time[7] && response.data.dayOfWeek === 'Wednesday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.wednesday[8].name} ${db.wednesday[8].conf}`);
        })
    }

    ///////////////////// ЧЕТВЕРГ /////////////////////

    if (response.data.time === time[0] && response.data.dayOfWeek === 'Thursday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[1].name} ${db.thursday[1].conf}`);
        })
    }

    if (response.data.time === time[1] && response.data.dayOfWeek === 'Thursday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[2].name} ${db.thursday[2].conf}`);
        })
    }

    if (response.data.time === time[2] && response.data.dayOfWeek === 'Thursday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[3].name} ${db.thursday[3].conf}`);
        })
    }

    if (response.data.time === time[3] && response.data.dayOfWeek === 'Thursday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[4].name} ${db.thursday[4].conf}`);
        })
    }

    if (response.data.time === time[4] && response.data.dayOfWeek === 'Thursday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[5].name} ${db.thursday[5].conf}`);
        })
    }

    if (response.data.time === time[5] && response.data.dayOfWeek === 'Thursday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[6].name} ${db.thursday[6].conf}`);
        })
    }

    if (response.data.time === time[6] && response.data.dayOfWeek === 'Thursday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.thursday[7].name} ${db.thursday[7].conf}`);
        })
    }

    ///////////////////// ПЯТНИЦА /////////////////////

    if (response.data.time === time[0] && response.data.dayOfWeek === 'Friday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[1].name} ${db.friday[1].conf}`);
        })
    }

    if (response.data.time === time[1] && response.data.dayOfWeek === 'Friday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[2].name} ${db.friday[2].conf}`);
        })
    }

    if (response.data.time === time[2] && response.data.dayOfWeek === 'Friday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[3].name} ${db.friday[3].conf}`);
        })
    }

    if (response.data.time === time[3] && response.data.dayOfWeek === 'Friday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[4].name} ${db.friday[4].conf}`);
        })
    }

    if (response.data.time === time[4] && response.data.dayOfWeek === 'Friday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[5].name} ${db.friday[5].conf}`);
        })
    }

    if (response.data.time === time[5] && response.data.dayOfWeek === 'Friday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[6].name} ${db.friday[6].conf}`);
        })
    }

    if (response.data.time === time[6] && response.data.dayOfWeek === 'Friday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.friday[7].name} ${db.friday[7].conf}`);
        })
    }

    ///////////////////// СУББОТА /////////////////////

    if (response.data.time === time[0] && response.data.dayOfWeek === 'Saturday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[1].name} ${db.saturday[1].conf}`);
        })
    }

    if (response.data.time === time[1] && response.data.dayOfWeek === 'Saturday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[2].name} ${db.saturday[2].conf}`);
        })
    }

    if (response.data.time === time[2] && response.data.dayOfWeek === 'Saturday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[3].name} ${db.saturday[3].conf}`);
        })
    }

    if (response.data.time === time[3] && response.data.dayOfWeek === 'Saturday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[4].name} ${db.saturday[4].conf}`);
        })
    }

    if (response.data.time === time[4] && response.data.dayOfWeek === 'Saturday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[5].name} ${db.saturday[5].conf}`);
        })
    }

    if (response.data.time === time[5] && response.data.dayOfWeek === 'Saturday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[6].name} ${db.saturday[6].conf}`);
        })
    }

    if (response.data.time === time[6] && response.data.dayOfWeek === 'Saturday') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`@everyone ${db.saturday[7].name} ${db.saturday[7].conf}`);
        })
    }

    if (response.data.time === '00:00') {
      client.channels.fetch(process.env.CHANNEL)
        .then(channel => {
          channel.send(`*****что-то на ботовском*****`);
        })
    }
  }, 60000);
})

let conversation = [];

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.mentions.has(client.user.id)) {
    let text = message.content;
    text = text.substring(text.indexOf('>') + 2, text.length);

    cb(text, conversation).then(res => {
      conversation.push(text);
      conversation.push(res);
      message.channel.send(res);
    });
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