const fs = require("fs-extra");
if (fs.existsSync("set.env")) {
  require("dotenv").config({
    'path': __dirname + "/set.env"
  });
}
const path = require("path");
const databasePath = path.join(__dirname, "./database.db");
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
  'session': process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FoTklQb1Qxc3NDVnhObTE0d0dRU2tQR1dGM21ubGd4OVVPMlBabzlYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnl3VGNGOUw3Ri9zT2F4QXo0TjVkMkhTdGUvdW5ESFJqWWVQTnQ3Qldudz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTm9jRlQrTDNZWG9nNFZpNDdsdE8xY1dxMVhWNjZDa1A0TGxZNVVVUzI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqaWd6R1NUUGovVjBydkZTZnMrK0ZGQlc4RUVWR1k0VkdCdnBHR0FLd0VzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLd0lLQmZNcTlzclNQNnZvWTdXSnpuNUlYRURRbklrcGhsWjQ2SUlORkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii83Ynp5UVNlMit2UWlNeXdIS2ZsTGg0eUZ2WURxQStncitLcFAzWFoxU289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9sckxsN1NzUnFhL284MVNQU0gySnBvRnN5NkdFRlVLZHkyL0plcmZFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmtSQ0VVeG5VcExiSlcyMDRZSzJRK0p4VjBpTUxXbkZRK2krQ2V1d3ZXTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iit0MFJCSDRMb256bk5OV2FBTVc0QTEwUk13OVNOblJYaTgzaDBQQUpCckY3T1gybGhCWjdvdS9ncWhZMXU0SkhFUTIwZ096cCt5bTR4RENnUno0TEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiI3ek9VL0p5MVM2ZUU1UWFRaURnQTVJcVFSWjlKUFBobVR2Q2FacjNCaXQwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1bmsyazZUMlQ4SzBVcFRMU0VMemd3IiwicGhvbmVJZCI6ImQxOGM4NGQ4LTNiZDgtNGM3MS1hZDI1LTNmYTZkMjAyZjc4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIOU5EUWVDblNYdy9rWTBucEMvZlpzZFJqZXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieS9jbU1BNCtPSDlNQVpKTXZKeHgyUTBQTUxzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilo0TTRHM0EyIiwibWUiOnsiaWQiOiIxODc2MjMwMzMxNDo0NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmJwNnI0REVLemIvYjRHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUGU5NW92VFhJZDNPYTVueWc2RGNHOGFPWVJ5ajRNSERiVk9CQXhuQTJTQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTVozOUdHTm8rbXBJOFBqVkJGU1RGNmVCUFEzd0dQbHRtNlp5ZXZRdXlGeEtKSFpGeEJSMzV2aE0wTGZrZjBoTmExd2FDK3g5Lys2czNzdXAwTk5rQkE9PSIsImRldmljZVNpZ25hdHVyZSI6Ilg2aUxYNDNYSndWcXJjd1dlVzBBUnEyZ0did0N3Q3FnUHdRanNNaThjTm1WUmI0SjlDa0RoYWdOUTA1bHVSemtFNmZpWVRQd2RCbitoQUNNWkVJdURnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTg3NjIzMDMzMTQ6NDZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVDN2ZWFMMDF5SGR6bXVaOG9PZzNCdkdqbUVjbytEQncyMVRnUU1ad05rZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MjY5NTg2OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGZzQifQ==",
  'PREFIXE': process.env.PREFIX || '+',
  'OWNER_NAME': process.env.OWNER_NAME || "corrupt",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || "18762303314",
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "non",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "non",
  'BOT': process.env.BOT_NAME || "Gααɾαƙυɳ",
  'URL': process.env.BOT_MENU_LINKS || "https://files.catbox.moe/s326s2.jpg",
  'MODE': process.env.PUBLIC_MODE || 'yes',
  'PM_PERMIT': process.env.PM_PERMIT || 'no',
  'HEROKU_APP_NAME': process.env.HEROKU_APP_NAME,
  'HEROKU_APY_KEY': process.env.HEROKU_APY_KEY,
  'WARN_COUNT': process.env.WARN_COUNT || '3',
  'ETAT': process.env.PRESENCE || '',
  'CHATBOT': process.env.PM_CHATBOT || 'no',
  'ANTICALL': process.env.ANTICALL || "non",
  'AUTO_REACT_STATUS': process.env.AUTO_REACT_STATUS || "yes",
  'DP': process.env.STARTING_BOT_MESSAGE || "yes",
  'ADM': process.env.ANTI_DELETE_MESSAGE || "yes",
  'DATABASE_URL': DATABASE_URL,
  'DATABASE': DATABASE_URL === databasePath ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
  fs.unwatchFile(fichier);
  console.log("mise à jour " + __filename);
  delete require.cache[fichier];
  require(fichier);
});
