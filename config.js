const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349014930216";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_19_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMixcbiAgICAgICAgMTMxLFxuICAgICAgICAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQyLFxuICAgICAgICA2NixcbiAgICAgICAgODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIxLFxuICAgICAgICA2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDgxLFxuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNixcbiAgICAgICAgMTQzLFxuICAgICAgICA4LFxuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDIzLFxuICAgICAgICA0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkwLFxuICAgICAgICA4MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpbkNmY01jeCtpNkRVRWhXWG9hQWU1VHl4WGsyRkFNM3djemFuVVdaUWNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOb0RNUFl3SVFmR29ucndEMGY1NGh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhMTc0NzNhLTdlYTEtNDRmYS04NGRiLTJiN2M4YTc1MjZlM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OSxcbiAgICAgIDMxLFxuICAgICAgMjMsXG4gICAgICAxMzIsXG4gICAgICAxMzUsXG4gICAgICAxMSxcbiAgICAgIDEwMCxcbiAgICAgIDI0OSxcbiAgICAgIDQ4LFxuICAgICAgMTQwLFxuICAgICAgMjQxLFxuICAgICAgMTU2LFxuICAgICAgMTcsXG4gICAgICAyMixcbiAgICAgIDExMCxcbiAgICAgIDExNixcbiAgICAgIDcxLFxuICAgICAgNDQsXG4gICAgICAxMTEsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTc3LFxuICAgICAgNjUsXG4gICAgICAxNDksXG4gICAgICAxOTIsXG4gICAgICAxMjksXG4gICAgICAxNDUsXG4gICAgICAxNzgsXG4gICAgICA3MSxcbiAgICAgIDYwLFxuICAgICAgMjE1LFxuICAgICAgNDUsXG4gICAgICAxMzEsXG4gICAgICA1OSxcbiAgICAgIDE1LFxuICAgICAgMTcsXG4gICAgICAxOTUsXG4gICAgICAxMCxcbiAgICAgIDEzNyxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWRjhFSDNWQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxNDkzMDIxNjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjY5ODQ4Nzc2Mjk0ODY6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNR1d6ODhCRUs2TDFMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNKSkUvc0tqYzFicUp2SHBBRDgvclRjd2RkTW9Nd3BqTndqNGxDVUJMM1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUWtpRktZK3J0ZEdMOGIremN3bU8zZWlVa0VHZFN6d3RiWHhJUVNUdnpuakpiVFVXSWwweVVkb3FzS3o2bFpTMnkxTTFlcFArR1Vvc2FtaVliSmZDQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUWxESEN1ejcrbDlmQXNpVEZSVk5rellVanJ1ZXphOURtc001MlV2cTR2UWhFeFVWV3c2bFFCZ29TOE00Z3NKeHZrK2FPT05nR0daRDdMT3NGaUYwaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNDkzMDIxNjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDQyMzU0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
