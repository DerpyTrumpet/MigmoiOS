const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!help') {
    msg.reply('HELP YOURSELF NOOB JSJSJSJSJSJSJSJ');

  }  else if (msg.content === '!vindiesel') {
      msg.reply('stan vin diesel yes https://cdnph.upi.com/svc/sv/upi/6051491833438/2017/1/5c19d870dee1e2ecf03fc1f985ce05f2/Vin-Diesel-on-Dwayne-Johnson-feud-We-still-love-each-other.jpg');

  }    else if (msg.content === 'owo') {
        msg.reply('GET OUT OF MY SERVER YOU DUMB ASS WEEB I AM GOING TO BAN YOUR ASS SO HARD GET READY TO DIE');
  }

  else if (msg.content === 'uwu') {
        msg.reply('GET OUT OF MY SERVER YOU DUMB ASS WEEB I AM GOING TO BAN YOUR ASS SO HARD GET READY TO DIE');
  }

  else if (msg.content === '!es') {
        msg.reply('here you go you lazy ass dickhead https://www.roblox.com/games/2262441883/Electric-State-DarkRP-Beta');
  }

  else if (msg.content === 'did i stutter?') {
        msg.reply('http://s2.quickmeme.com/img/ac/ac35d13f2e71cb381965f556f28d38681e19449a13a3cce0561f418d6103eec1.jpg');
  }

  else if (msg.content === 'yes') {
        msg.reply('no');

}        else if (msg.content === 'no') {
              msg.reply('yes');




            }        else if (msg.content === 'everyone') {
                          msg.reply('as you wish sir @everyone');


                        }        else if (msg.content === 'mr worldwide') {
                                      msg.reply('https://i.kym-cdn.com/entries/icons/facebook/000/023/098/Screen_Shot_2017-05-30_at_2.23.51_PM.jpg');


                                    }        else if (msg.content === 'casual') {
                                                  msg.reply('parry this you filthy casual https://i.kym-cdn.com/photos/images/newsfeed/001/721/586/194.png');





                                            }        else if (msg.content === 'vectored') {
                                                msg.reply('you just got vectored https://stayhipp.com/wp-content/uploads/2019/12/Webp.net-resizeimage-27.jpg');

}});

client.login('Njc1MjAwODczMTQ3OTI0NDgx.Xj0pzw.VOwV0HVFWwr9GXXH2Bx7SAt_IJg');
