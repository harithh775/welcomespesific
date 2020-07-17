const Discord = require("discord.js");
const db = require("quick.db");
const { Canvas } = require("canvas-constructor");
const { get } = require("node-superfetch");


const bot = new Discord.Client();
const Prefix = ".";

Canvas.registerFont(`${process.cwd()}/assets/font/TheNextFont.ttf`, "Font2") 

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
            .addText(`${member.user.tag}`, 512, 409)
            .setTextFont("35px Font2")
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText(`${MSG}`, 512, 450)
            .toBuffer();
      }
      let Channelz = bot.channels.get("725610866791284858");
      Channelz.send(`selamat datang ${member.user}`,{
        
    files: [{
      
      attachment: await createCanvas(),
      name:'Fukuro.png'
      
    }]
        
        
      })

});


bot.on("guildMemberRemove", async member => {

      let BG = db.get(`${member.guild.id}.Config.Welcome.Background`);
      if (!BG) BG = "https://cdn.discordapp.com/attachments/675700541468311553/723507497356361738/1212432324234.jpg";

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
            .addText("WELCOME", 512, 361)
            .setTextFont("40px Font2")
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText(`${member.user.tag}`, 512, 409)
            .setTextFont("35px Font2")
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText(`${MSG}`, 512, 450)
            .toBuffer();
      }
      let Channelz = bot.channels.get("725610866791284858");
      Channelz.send(`selamat datang ${member.user}`,{
        
    files: [{
      
      attachment: await createCanvas(),
      name:'Fukuro.png'
      
    }]
        
        
      })

});

bot.login("NzAzMzg5NzU0NjIzOTE4MDkx.XxDyIw.CawSU_bHs0uXy2omxjOkzVASeVQ");
