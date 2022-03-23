const { default: axios } = require("axios");
const { not } = require("cheerio/lib/api/traversing");
const test = require("./getData");
const cheerio = require("cheerio");

var Hitomi = test.Hitomi
// data = {
//   protocal: 'https:',
//   url : 'ltn.hitomi.la'
// }

let hitomi = new Hitomi();
// let makeURL = Hitomi.bind(data);
// let url = makeURL("index-all",".nozomi")

function full_path_from_hash(hash) {
  return gg.b+gg.s(hash)+'/'+hash;
}

async function processArray(array) {
  // map array to promises
  const promises = array.map(delayedLog);
  // wait until all promises are resolved
  await Promise.all(promises);
  console.log('Done!');
}

function real_full_path_from_hash(hash) {
  return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}
note = []
const testing = async () => {

  let index = await hitomi.getIndex(1,5)

  await Promise.all(index.nozomi.map(async (element) => {
    const response  = await hitomi.getGalleryInfo(element)
    let temp = JSON.parse(response.replace("var galleryinfo = ",""))
    note.push(temp)
    // console.log(temp)
    // const $ = cheerio.load(response)
    // $('')
    // const response = await axios.get('https://www.naver.com/');


    // console.log(response)
    // note.push(response.data)
  }));

  // let testing = await hitomi.getGalleryInfo(2174334)
  // console.log(testing.data)
  // let data = await hitomi.getGalleryInfo(2172192)
  note.forEach(element => {
    console.log(element)
  });

}

//67f366f6a6973c1eb6e3220f232be003e99fc4f5a42693c7635789e3eaa11879
testing();
// console.log(real_full_path_from_hash('67f366f6a6973c1eb6e3220f232be003e99fc4f5a42693c7635789e3eaa11879'))