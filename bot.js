const Discord = require("discord.js");
const db = require("quick.db");
const { Canvas } = require("canvas-constructor");
const { get } = require("node-superfetch");


const bot = new Discord.Client();
const Prefix = ".";

Canvas.registerFont(`${process.cwd()}/assets/font/TheNextFont.ttf`, "Font2") 
Canvas.registerFont(`${process.cwd()}/assets/font/Malvie.otf`, "Font3") 
Canvas.registerFont(`${process.cwd()}/assets/font/MonsterMech.ttf`, "Font4") 

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
            .setTextFont("75px Font3")
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
      let Channelz = member.guild.channels.get("");
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
            .setTextFont("40px Font3")
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText(`${member.user.tag}`, 512, 408)
            .setTextFont("35px Font2")
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText(`${MSG}`, 512, 450)
            .toBuffer();
      }
      let Channelz = member.guild.channels.get("");
      Channelz.send(`jangan lupa datang lagi ${member.user}`,{
        
    files: [{
      
      attachment: await createCanvas(),
      name:'Welcome.png'
      
    }]
        
        
      })

});

//-------------------------------------------------------------------------------------------------------------- jowonese

bot.on("guildMemberAdd", async member => {

      let BG = db.get(`${member.guild.id}.Config.Welcome.Background`);
      if (!BG) BG = "https://cdn.discordapp.com/attachments/682534052779393026/734674941315776602/MUp6wn.jpg";

      let MSG = db.get(`${member.guild.id}.Config.Welcome.Message`);
      if (!MSG) MSG = "selamat datang bro";

      var imageUrlRegex = /\?size=1048$/g;
      var { body: avatar } = await get(
        member.user.displayAvatarURL.replace(imageUrlRegex, "?size1048")
      );
      var { body: background } = await get(`${BG}`);
      async function createCanvas() {
          return new Canvas(1024, 500)
           .addImage(background, 0, 0, 1024, 500)
           .setColor("#ADA98D")
           .addRect(-774, 0, 1024, 500)
           .setColor("#ADA98D")
           .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
           .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
           .setShadowBlur(10) 
           .addRect(500, 80, 1024, 120)
           .addRect(630, 290, 1024, 120)
           .setTextFont("30pt Font3")
           .setTextAlign("center")
           .setColor("#ffffff")
           .addText(`#${member.user.discriminator}`, 825, 365)          
           .setTextFont("30pt Font3")
           .setTextAlign("center")
           .setColor("#ffffff")
           .addText(`${member.guild.memberCount}`, 125, 480)
           .addText(`${member.displayName}`, 760, 155)
           .setColor("#ADA98D")
           .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
           .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
           .setShadowBlur(10) 
           .addCircle(250, 250, 177)
           .addCircularImage(avatar, 250, 250, 170)
           .toBuffer();
      }
      let Channelz = member.guild.channels.get("734683523704815737");
      Channelz.send(`***Wilujeng Rawuh Ngeh*** **${member.user}
> Take role <#667009218380824594>
> Kenalken <#666954959593668608>
> Mading <#681117738629988389>
> Kamus <#700850650581303366>
Matur suwun, enjoy ya disini
**`,{
        
    files: [{
      
      attachment: await createCanvas(),
      name:'Welcome.png'
      
    }]
        
        
      })

});


bot.on("guildMemberRemove", async member => {

      let BG = db.get(`${member.guild.id}.Config.Welcome.Background`);
      if (!BG) BG = "https://cdn.discordapp.com/attachments/682534052779393026/734674941315776602/MUp6wn.jpg";

      let MSG = db.get(`${member.guild.id}.Config.Welcome.Message`);
      if (!MSG) MSG = "jangan lupa datang lagi";

      var imageUrlRegex = /\?size=1048$/g;
      var { body: avatar } = await get(
        member.user.displayAvatarURL.replace(imageUrlRegex, "?size1048")
      );
      var { body: background } = await get(`${BG}`);
      async function createCanvas() {
        return new Canvas(1024, 500)
           .addImage(background, 0, 0, 1024, 500)
           .setColor("#ADA98D")
           .addRect(-774, 0, 1024, 500)
           .setColor("#ADA98D")
           .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
           .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
           .setShadowBlur(10) 
           .addRect(500, 80, 1024, 120)
           .addRect(630, 290, 1024, 120)
           .setTextFont("30pt Font3")
           .setTextAlign("center")
           .setColor("#ffffff")
           .addText(`#${member.user.discriminator}`, 825, 365)          
           .setTextFont("30pt Font3")
           .setTextAlign("center")
           .setColor("#ffffff")
           .addText(`${member.guild.memberCount}`, 125, 480)
           .addText(`${member.displayName}`, 760, 155)
           .setColor("#ADA98D")
           .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
           .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
           .setShadowBlur(10) 
           .addCircle(250, 250, 177)
           .addCircularImage(avatar, 250, 250, 170)
           .toBuffer();
      }
      let Channelz = member.guild.channels.get("734683523704815737");
      Channelz.send(`${member.user}`,{
        
    files: [{
      
      attachment: await createCanvas(),
      name:'Welcome.png'
      
    }]
        
        
      })

});

//----------------------------------------------------------------------------------------------------------- scifi

bot.on("guildMemberAdd", async member => {

      let BG = db.get(`${member.guild.id}.Config.Welcome.Background`);
      if (!BG) BG = "https://cdn.discordapp.com/attachments/733961963771527169/734672045652181102/122323423423424.jpg";

      let MSG = db.get(`${member.guild.id}.Config.Welcome.Message`);
      if (!MSG) MSG = "selamat datang bro";

      var imageUrlRegex = /\?size=1048$/g;
      var { body: avatar } = await get(
        member.user.displayAvatarURL.replace(imageUrlRegex, "?size1048")
      );
      var { body: background } = await get(`${BG}`);
      async function createCanvas() {
          return new Canvas(1024, 500)
           .addImage(background, 0, 0, 1024, 500)
           .setColor("#1F97CB")
           .addRect(-774, 0, 1024, 500)
           .setColor("#1F97CB")
           .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
           .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
           .setShadowBlur(10) 
           .addRect(500, 80, 1024, 120)
           .addRect(630, 290, 1024, 120)
           .setTextFont("30pt Font4")
           .setTextAlign("center")
           .setColor("#ffffff")
           .addText(`#${member.user.discriminator}`, 825, 365)          
           .setTextFont("30pt Font4")
           .setTextAlign("center")
           .setColor("#ffffff")
           .addText(`${member.guild.memberCount}`, 125, 480)
           .addText(`${member.displayName}`, 760, 155)
           .setColor("#1A86CD")
           .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
           .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
           .setShadowBlur(10) 
           .addCircle(250, 250, 177)
           .addCircularImage(avatar, 250, 250, 170)
           .toBuffer();
      }
      let Channelz = member.guild.channels.get("733961673194340415");
      Channelz.send(`**\`Welcome\`** ${member.user}`,{
        
    files: [{
      
      attachment: await createCanvas(),
      name:'Welcome.png'
      
    }]
        
        
      })

});

//-----------------------------------------------------------------------------------------------------------------------------  eraser

bot.on("guildMemberAdd", async member => {

      let BG = db.get(`${member.guild.id}.Config.Welcome.Background`);
      if (!BG) BG = "https://cdn.discordapp.com/attachments/733961963771527169/734672045652181102/122323423423424.jpg";

      let MSG = db.get(`${member.guild.id}.Config.Welcome.Message`);
      if (!MSG) MSG = "selamat datang bro";

      var imageUrlRegex = /\?size=1048$/g;
      var { body: avatar } = await get(
        member.user.displayAvatarURL.replace(imageUrlRegex, "?size1048")
      );
      var { body: background } = await get(`${BG}`);
      async function createCanvas() {
          return new Canvas(1024, 500)
           .addImage(background, 0, 0, 1024, 500)
           .setColor("#1F97CB")
           .addRect(-774, 0, 1024, 500)
           .setColor("#1F97CB")
           .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
           .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
           .setShadowBlur(10) 
           .addRect(500, 80, 1024, 120)
           .addRect(630, 290, 1024, 120)
           .setTextFont("30pt Font4")
           .setTextAlign("center")
           .setColor("#ffffff")
           .addText(`#${member.user.discriminator}`, 825, 365)          
           .setTextFont("30pt Font4")
           .setTextAlign("center")
           .setColor("#ffffff")
           .addText(`${member.guild.memberCount}`, 125, 480)
           .addText(`${member.displayName}`, 760, 155)
           .setColor("#1A86CD")
           .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
           .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
           .setShadowBlur(10) 
           .addCircle(250, 250, 177)
           .addCircularImage(avatar, 250, 250, 170)
           .toBuffer();
      }
      let Channelz = member.guild.channels.get("707783639781343383");
      Channelz.send(`**\`Welcome\`** ${member.user}`,{
        
    files: [{
      
      attachment: await createCanvas(),
      name:'Welcome.png'
      
    }]
        
        
      })

});

bot.on("guildMemberRemove", async member => {

      let BG = db.get(`${member.guild.id}.Config.Welcome.Background`);
      if (!BG) BG = "https://cdn.discordapp.com/attachments/733961963771527169/734672045652181102/122323423423424.jpg";

      let MSG = db.get(`${member.guild.id}.Config.Welcome.Message`);
      if (!MSG) MSG = "selamat datang bro";

      var imageUrlRegex = /\?size=1048$/g;
      var { body: avatar } = await get(
        member.user.displayAvatarURL.replace(imageUrlRegex, "?size1048")
      );
      var { body: background } = await get(`${BG}`);
      async function createCanvas() {
          return new Canvas(1024, 500)
           .addImage(background, 0, 0, 1024, 500)
           .setColor("#1F97CB")
           .addRect(-774, 0, 1024, 500)
           .setColor("#1F97CB")
           .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
           .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
           .setShadowBlur(10) 
           .addRect(500, 80, 1024, 120)
           .addRect(630, 290, 1024, 120)
           .setTextFont("30pt Font4")
           .setTextAlign("center")
           .setColor("#ffffff")
           .addText(`#${member.user.discriminator}`, 825, 365)          
           .setTextFont("30pt Font4")
           .setTextAlign("center")
           .setColor("#ffffff")
           .addText(`${member.guild.memberCount}`, 125, 480)
           .addText(`${member.displayName}`, 760, 155)
           .setColor("#1A86CD")
           .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
           .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
           .setShadowBlur(10) 
           .addCircle(250, 250, 177)
           .addCircularImage(avatar, 250, 250, 170)
           .toBuffer();
      }
      let Channelz = member.guild.channels.get("707783639781343383");
      Channelz.send(`**\`Jangan lupa datang lagi\`** ${member.user}`,{
        
    files: [{
      
      attachment: await createCanvas(),
      name:'Welcome.png'
      
    }]
        
        
      })

});


bot.login("NjY5NjE2Mjk2OTMyOTMzNjUy.XtOYag.zyorp3fYNNv4zsVbKZUqAl3ycbE");
