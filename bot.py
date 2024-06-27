from discord_easy_commands import EasyBot
from discord import Intents
import pyjokes
import discord
import random


token = 'TU_TOKEN_AQUI_XD'


joke = pyjokes.get_jokes(language='es', category='all')
intents = discord.Intents.all()
bot = EasyBot(intents = intents)

# bot.setCommand('^', '')

# esto esta para despues añadir comandos sin tener que copiar y pegar XD   (soy un pinchi flojo -n4c)
bot.setCommand('^youtube', 'Lo siento, aun no tengo este comando programado, pero estan en el proceso.')
bot.setCommand('^random', random.randint(-2147483647, 2147483647))
bot.setCommand('^joke', joke)
bot.setCommand('^', '')
bot.setCommand('^', '')
bot.setCommand('^', '')
bot.setCommand('^', '')
bot.setCommand('^', '')
bot.setCommand('^', '')
bot.setCommand('^', '')
bot.setCommand('^', '')
bot.setCommand('^', '')
bot.setCommand('^', '')
bot.setCommand('^', '')

bot.run(token)
