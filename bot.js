// Las cosas que requieren de Discord.js
const { Client, Events, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
// Cosas que requieren de GPT
const { getAlgo } = require('./gpt');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

// Eventos para cuando el bot inicia
client.on(Events.ClientReady, c => {
    // Dice que el bot inicio correctamente
    console.log("Bot Conectado Exitosamente");

    // Esto es para el estado del bot
    c.user.setActivity('Cualquier cosa que se te ocurra');
    c.user.setStatus('dnd');

    // Comandos (Generadores)
    const pruebaDeComando = new SlashCommandBuilder()
        .setName('comandoprueba')
        .setDescription('Comando de testeo (usado en Harmony Alpha por n4c)');

    c.application.commands.create(pruebaDeComando);

    const comandoGPT = new SlashCommandBuilder()
        .setName('pruebagpt')
        .setDescription('Comando de testeo para GPT (usado en Harmony Alpha por n4c)')
        .addStringOption(option =>
            option.setName('prompt')
                .setDescription('que le preguntaras a Harmony'));
    c.application.commands.create(comandoGPT)
});

// Eventos para cuando interactuan con el bot
client.on(Events.InteractionCreate, interaction => {
    // Dice que el bot interactuo con el bot
    console.log('Interaccion con usuario creada')

    // Para que no responda a menos que se ejecute un comando
    if(!interaction.isChatInputCommand()) return;

    // Respuestas a comandos
    if(interaction.commandName == 'comandoprueba') {
        interaction.reply('Funciona! Que genial responder a un comando luego de tanto tiempo... -Harmony (06/07/2024)')
    };

    if(interaction.commandName == 'pruebagpt') {
        interaction.reply('[ERROR]: NullPointerException: NO VALUE/NULL VALUE FOUND ON ./gpt.js LINE 13-19, Please report this inmediatly to n4c._ on Discord')
    };
});

// Sin usar
client.on('messageCreate', (message) => {

})

client.login(process.env.DISCORD_BOT_TOKEN);
