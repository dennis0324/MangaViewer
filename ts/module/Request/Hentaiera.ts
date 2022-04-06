import cheerio from "cheerio";
// const cheerio = require("cheerio");
import axios from 'axios';
import randomUseragent from 'random-useragent';
const ua = randomUseragent.getRandom();

const Hentaiera = function(){
  
}

Hentaiera.prototype.getIndex = async function() {
  const ua = randomUseragent.getRandom();
  const data = await axios.request({
          url: "https://hentaiera.com/?page=4",
          method: 'POST',
          // responseType : 'arraybuffer',
          // responseEncoding : 'binary',
          headers : { //basic header for request
                  "User-Agent": ua,
                  // 'Referer': 'https://hitomi.la/',
          }
  })
  return data
}



exports.Hentaiera = Hentaiera;