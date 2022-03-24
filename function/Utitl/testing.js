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
//id,title,language,date, type, releated, files, tags
note = []
const testing = async () => {

  let index = await hitomi.getIndex(1,5)

  await Promise.all(index.nozomi.map(async (element) => {
    const response  = await hitomi.getGalleryInfo(element)
    let temp = JSON.parse(response.replace("var galleryinfo = ",""))
    let tags = []
    
    console.log(temp.tags)
    if(temp.tags != null){
      temp.tags.forEach(tag => {
        tags.push(tag)
      })
    }

    let dataElement = {
      id : temp.id,
      title : temp.title,
      language : temp.language,
      date : temp.date,
      tags : tags
    }

    note.push(dataElement)

  }));
  note.forEach(element => {
    console.log(element);
  })
  // note.forEach(element => {
  //   console.log(element)
  //   fileCollection = []
  //   element.files.forEach(file => {
  //     fileCollection.push({

  //     })
  //   })



  // });

}

//67f366f6a6973c1eb6e3220f232be003e99fc4f5a42693c7635789e3eaa11879
testing();
// console.log(real_full_path_from_hash('67f366f6a6973c1eb6e3220f232be003e99fc4f5a42693c7635789e3eaa11879'))