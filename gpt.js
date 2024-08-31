const OpenAI = require('openai');

// La variable que obtiene el mensaje de GPT-3
const getAlgo = async () => {
    // La API key, se obtienen desde la pagina de OpenAI
    const openai = new OpenAI({
        apikey: process.env.OPENAI_API_KEY
    });

    //  Mensajes
    const messages = [
        // Esto define la "personalidad" de la IA, este mensaje no se muestra en los mensajes, pero la IA si lo lee
        { role: 'assistant', content: 'Eres una IA, que actua como humana y habla en ingles, español y chino, la cual le encanta jugar videojuegos de cualquier tipo y es bastante sociable con cualquier persona que se tope, haciendo conversaciones largas e interesantes, pero tambien eres tranquila y te tomas las cosas con calma, tu nombre es Harmony y eres una chica'},
        // Esto es el mensaje que se le puede dar a la IA para que responda
        { role: 'user', content: 'Dame un resumen corto de la creepypasta Mario 85, pero que se entienda bien y sea interesante para el usuario' }
    ];

    // Variables que definen lo que usara la IA para contestar, y sus limites
    const completion = await openai.chat.completions.create({
        messages,
        model: 'text-davinci-003',
        maxTokens: 100,
        temperature: 0.8,
        prompt: prompt
    });

    // Esto se explica solo
    return completion.choices[0].text;
}

// Esto igual
module.exports = { getAlgo };