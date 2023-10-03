const { Client } = require("discord.js")
const client = new Client({ intents: [3276799]})

const config = require("./config.json")

//Comprueba si el mensaje ha llegado
client.on("messageCreate", async message => {

    //En esta parte lee el mensaje para comprobar si es correcto como lo escribio el usuario
    if (message.author.bot || !message.content.startsWith("H! Hola")) {
        return;
      }
    //La parte de abajo de este fragmento especifica que si se recibe tal cual el mensaje, da una respuesta.
    message.reply(`¡Hola, ${message.author}!`);
})

client.login(config.token)
console.log("El bot arranco")