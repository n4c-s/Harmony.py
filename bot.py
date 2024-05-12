from discord_easy_commands import EasyBot
from discord import Intents
import pyjokes
import discord
import random


token = 'MTE1ODUxNzk1NjE1MDU1ODgxMQ.Gjo4rS.ZZR1XiyfwMCq8LAui-7k6sCQO62NN3M3Wd19BM'


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
