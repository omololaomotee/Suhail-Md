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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_06_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyLFxuICAgICAgICA2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODMsXG4gICAgICAgIDExLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgODksXG4gICAgICAgIDg1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjksXG4gICAgICAgIDkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDY3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDgwLFxuICAgICAgICA2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MyxcbiAgICAgICAgMixcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibTdvUDdrbDMydkRDL3lXUDMxNmlIcVoyc3RsTXFvMWRKdkhjN0pDWE15UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaGtNclhmSkZSRUthQm1nX19rTUhkZ1wiLFxuICBcInBob25lSWRcIjogXCIyNTI5OTQ3Mi03NGFhLTRmYmEtOTkwNi01YjA1MGE4MDgyMDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxMDAsXG4gICAgICAyMzEsXG4gICAgICAxMzcsXG4gICAgICA5NyxcbiAgICAgIDIxMixcbiAgICAgIDM2LFxuICAgICAgMjIsXG4gICAgICAxMTksXG4gICAgICAxODEsXG4gICAgICAzMCxcbiAgICAgIDkwLFxuICAgICAgMjI3LFxuICAgICAgMTUzLFxuICAgICAgMjM0LFxuICAgICAgMTIxLFxuICAgICAgOTgsXG4gICAgICAzMCxcbiAgICAgIDE5OCxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICAxMDMsXG4gICAgICAyMTAsXG4gICAgICAxODgsXG4gICAgICAxMDQsXG4gICAgICAxMTgsXG4gICAgICAzNCxcbiAgICAgIDIyMixcbiAgICAgIDQxLFxuICAgICAgMjAsXG4gICAgICAyMTUsXG4gICAgICAxMDksXG4gICAgICAxNDksXG4gICAgICA4NyxcbiAgICAgIDY1LFxuICAgICAgMTEzLFxuICAgICAgMTMxLFxuICAgICAgMTMyLFxuICAgICAgNjMsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0VORjFXN1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTQ5MzAyMTY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI2OTg0ODc3NjI5NDg2OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUdXejg4QkVMVGUrTFFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTSkpFL3NLamMxYnFKdkhwQUQ4L3JUY3dkZE1vTXdwak53ajRsQ1VCTDNRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJNOXk4VEhML3YrY2NpRDFSVE1KOHhHSnBkeXhmT1MrUlhOc0VSaXJFZ01pRW80OHNMVE8vVUJlY1M4Z2lpM1dpY1g5TUJVRUM5TVlNMWIrTHYyZURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlV4cmxLNWF4TC85QkZyMG5tM0I5Mjk1ektJeXhHaGt0TEZFU01mOGlqWHlTd3c3cVAvRVdNaXJ5MDZPRUdJZjJKWCszOUFKVG5lRm9Va2t0ZHZlVUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTQ5MzAyMTY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY0MjgwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFYM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQVgzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSzdlbTZIL0c4eWNWeGxOd0R1Z3I5eGlqMWRIWTNPdGdyeWtrYy9wRlIvWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MzU0MDc2ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTA0MjM3MjcyNVwifSIKfQ=="  // PUT your SESSION_ID 


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
