const Discord = require("discord.js");
const music = new Discord.Client({disableEveryone: true});
music.commands = new Discord.Collection();
const queue = new Map();
const timezone = require('moment-timezone')
const moment = require ('moment')
const Canvas = require ("canvas")
 
Canvas.registerFont(`${process.cwd()}/assets/font/TheNextFont.ttf`, "Tes") 
 
music.on("guildMemberAdd", async member => {
  const channel = member.guild.channels.find(
    ch => ch.id === "724374962592415806"
  );
  if (!channel) return;
   const canvas = Canvas.createCanvas(1000, 500);
  const ctx = canvas.getContext("2d");

  console.log(member);
 
  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/675700541468311553/697453529060737034/1231243143143434.jpg"
  );
       
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      
 ctx.beginPath();
 ctx.arc(495, 165, 132, 0, 2 * Math.PI);
 ctx.strokeStyle = "#fff"
 ctx.lineWidth = 10;
 ctx.stroke();

 
  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0);
      
      
  ctx.font = "50pt tes"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`WELCOME`, 500,370)
      
  ctx.font = "30pt sans serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`${member.displayName} #${member.user.discriminator}`, 500,410)

 ctx.font = "30pt sans serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`Selamat datang bro`, 500,450)

 
 

  ctx.beginPath();
	ctx.arc(495, 165, 130, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
 
  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(avatar, 365, 35, 260, 260);
    
 
  const att = new Discord.Attachment(canvas.toBuffer(), `${member.displayName}.png`);
  channel.send(`**Selamat datang** ${member.user}
> <a:notic:721825688260444251> Silahkan ambil role di <#707797778226479106> 
> <a:notic:721825688260444251> Buat room kamu sendiri di **:heavy_plus_sign: ・Create Room**
> <a:notic:721825688260444251> Baca <#707788442570063933>
> <a:notic:721825688260444251> Setting di <#707788479341527091>
> <a:notic:721825688260444251> Play music di <#707789201076256799>`, att);
  
  
});

music.on("guildMemberRemove", async member => {
  const channel = member.guild.channels.find(
    ch => ch.id === "724374962592415806"
  );
  if (!channel) return;
   const canvas = Canvas.createCanvas(1000, 500);
  const ctx = canvas.getContext("2d");

  console.log(member);
 
  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/675700541468311553/697453529060737034/1231243143143434.jpg"
  );
       
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      
 ctx.beginPath();
 ctx.arc(495, 165, 132, 0, 2 * Math.PI);
 ctx.strokeStyle = "#fff"
 ctx.lineWidth = 10;
 ctx.stroke();

 
  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0);
      
      
  ctx.font = "50pt sans serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`GOODBYE`, 500,370)
      
  ctx.font = "30pt sans serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`${member.displayName} #${member.user.discriminator}`, 500,410)

 ctx.font = "30pt sans serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`Jangan lupa mampir lagi`, 500,450)

 
 

  ctx.beginPath();
	ctx.arc(495, 165, 130, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
 
  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(avatar, 365, 35, 260, 260);
    
 
  const att = new Discord.Attachment(canvas.toBuffer(), `${member.displayName}.png`);
  channel.send(`**Bye** ${member.user}`, att);

});
                                                   
music.login("NzAzMzg5NzU0NjIzOTE4MDkx.XxDyIw.CawSU_bHs0uXy2omxjOkzVASeVQ");
