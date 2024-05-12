from discord_easy_commands import EasyBot
from discord import Intents
import pyjokes
import discord
import random


token = 'MTE1ODUxNzk1NjE1MDU1ODgxMQ.GtIzPw.yFkPMXho0nnLsZQ-uEtqgr6hV_0IW4eKAtsMZ0'


joke = pyjokes.get_jokes(language='es', category='all')
intents = discord.Intents.all()
bot = EasyBot(intents = intents)

# bot.setCommand('^', '')

bot.setCommand('^youtube', 'Lo siento, aun no tengo este comando programado, pero estan en el proceso.')
bot.setCommand('^random', random.randint(1, 2147483647))
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
