from aiogram.types import WebAppInfo
from aiogram import types

web_app = WebAppInfo(url='https://6l4me.github.io/tg-bot/')

keyboard = types.ReplyKeyboardMarkup(
    keyboard=[
        [types.KeyboardButton(text='Site', web_app=web_app)]
    ],
    resize_keyboard=True
)
