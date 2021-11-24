module.exports = async function iphone(message, args, client){
    const axios = require('axios');
      const url = 'https://shot-on-iphone.studio/api/video';
      let response, data;
      try {
          response = await axios.get(url);
          data = response.data;
      } catch (e) {
          return message.reply(`An error occured!`)
      }


      await message.reply({content : `${data.url}`})
    }