import requests
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes
from dotenv import load_dotenv
import os

load_dotenv()

BOT_TOKEN = os.getenv("TELEGRAM_BOT_API")
WEB_APP = os.getenv("WEBAPP")
SESSION_API = os.getenv("SESSION_API")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id

    # Bug: Always allowed to start a new session. have to implement this in the back end.
    # response = requests.post(SESSION_API, json={"user_id": user_id})
    # allowed = response.json().get("allowed")
    response = requests.post(SESSION_API, json={"user_id": user_id})

    print("Status code:", response.status_code)
    print("Response text:", response.text)  # <-- check this!
    try:
        allowed = response.json().get("allowed")
    except Exception as e:
        print("Failed to parse JSON:", e)
        allowed = False

    if response.status_code == 200:
        try:
            data = response.json()
            allowed = data.get("allowed", False)
        except Exception as e:
            print("JSON error:", e)
            allowed = False
    else:
        print(f"Request failed: {response.status_code}")
        allowed = False


    # Prevent multiple sessions
    if not allowed:
        await update.message.reply_text("🚫 The app is currently in use by another user.")
        return
    
    if update.message.chat.type != "private":
        await update.message.reply_text("❌ Web App can only be launched in a private chat. Please DM me!")
        return

    keyboard = [
        [InlineKeyboardButton(text="Open CoolApp 🚀", web_app=WebAppInfo(url=WEB_APP))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text("Click below to launch the web app!", reply_markup=reply_markup)

app = Application.builder().token(BOT_TOKEN).build()
app.add_handler(CommandHandler("start", start))
app.run_polling()
