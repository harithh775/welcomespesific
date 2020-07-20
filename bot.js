const Discord = require("discord.js");
const db = require("quick.db");
const { Canvas } = require("canvas-constructor");
const { get } = require("node-superfetch");


const bot = new Discord.Client();
const Prefix = ".";

Canvas.registerFont(`${process.cwd()}/assets/font/TheNextFont.ttf`, "Font2") 
Canvas.registerFont(`${process.cwd()}/assets/font/Royalacid_o.ttf`, "Font3") 

bot.on("ready", () => {
  console.log("Ready!");
});


bot.on("guildMemberAdd", async member => {

      let BG = db.get(`${member.guild.id}.Config.Welcome.Background`);
      if (!BG) BG = "https://cdn.discordapp.com/attachments/675700541468311553/723507497356361738/1212432324234.jpg";

      let MSG = db.get(`${member.guild.id}.Config.Welcome.Message`);
      if (!MSG) MSG = "selamat datang bro";

      var imageUrlRegex = /\?size=2048$/g;
      var { body: avatar } = await get(
        member.user.displayAvatarURL.replace(imageUrlRegex, "?size512")
      );
      var { body: background } = await get(`${BG}`);
      async function createCanvas() {
          return new Canvas(1024, 500)
            .addImage(background, 0, 0, 1024, 500)
            .setColor("#ffffff")
            .addCircle(512, 157, 127)
            .addCircularImage(avatar, 512, 157, 120)
            .setTextFont("75px Font2")
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText("WELCOME", 512, 361)
            .setTextFont("40px Font2")
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText(`${member.user.tag}`, 512, 408)
            .setTextFont("35px Font2")
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText(`${MSG}`, 512, 450)
            .toBuffer();
      }
      let Channelz = member.guild.channels.get("707783639781343383");
      Channelz.send(`<a:020:700659081907535883> **Selamat datang** ${member.user}
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> <a:notic:721825688260444251> Play music di <#728405934824751215>
> <a:notic:721825688260444251> Silahkan ambil role di <#728307645143842889> `,{
        
    files: [{
      
      attachment: await createCanvas(),
      name:'Welcome.png'
      
    }]
        
        
      })

});


bot.on("guildMemberRemove", async member => {

      let BG = db.get(`${member.guild.id}.Config.Welcome.Background`);
      if (!BG) BG = "https://cdn.discordapp.com/attachments/675700541468311553/723516952525406268/1231231231313213.jpg";

      let MSG = db.get(`${member.guild.id}.Config.Welcome.Message`);
      if (!MSG) MSG = "jangan lupa datang lagi";

      var imageUrlRegex = /\?size=2048$/g;
      var { body: avatar } = await get(
        member.user.displayAvatarURL.replace(imageUrlRegex, "?size512")
      );
      var { body: background } = await get(`${BG}`);
      async function createCanvas() {
        return new Canvas(1024, 500)
            .addImage(background, 0, 0, 1024, 500)
            .setColor("#ffffff")
            .addCircle(512, 157, 127)
            .addCircularImage(avatar, 512, 157, 120)
            .setTextFont("75px Font2")
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText("GOOD BYE", 512, 361)
            .setTextFont("40px Font2")
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText(`${member.user.tag}`, 512, 408)
            .setTextFont("35px Font2")
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText(`${MSG}`, 512, 450)
            .toBuffer();
      }
      let Channelz = member.guild.channels.get("707783639781343383");
      Channelz.send(`jangan lupa datang lagi ${member.user}`,{
        
    files: [{
      
      attachment: await createCanvas(),
      name:'Welcome.png'
      
    }]
        
        
      })

});


bot.login("NjY5NjE2Mjk2OTMyOTMzNjUy.XtOYag.zyorp3fYNNv4zsVbKZUqAl3ycbE");
