const testingJson = {
  language_url: '/index-korean.html',
  language: 'korean',
  characters: null,
  files: [
    {
      hasavif: 1,
      haswebp: 1,
      height: 2000,
      width: 1400,
      hash: '0686a453a465a4b71da5aacc531820a04e0c23d20842bab4a51981ac861b0328',
      name: '01.jpg'
    },
    {
      height: 2000,
      width: 1400,
      name: '02.jpg',
      hash: '3932f22afa2cabe9509ce3ef000984f82cb41b78a807cc0d87d2a4f2cd1a45a3',
      haswebp: 1,
      hasavif: 1
    },
    {
      hasavif: 1,
      haswebp: 1,
      height: 2000,
      width: 1400,
      name: '03.jpg',
      hash: 'a43d5813a9d37ba58b7b37801890b81f0ad93ca65a0d636a622741f05443e945'
    },
    {
      haswebp: 1,
      hasavif: 1,
      height: 2000,
      width: 1400,
      hash: '0160977dc2807cc92855aa3878daecb9edc510cb86d514595cf5fbeb3667f79d',
      name: '04.jpg'
    },
    {
      height: 2000,
      name: '05.jpg',
      width: 1400,
      hash: '2685f2a25bea9660e1ee3c9395fb15ee92c51410256fff690f884124f75d216d',
      haswebp: 1,
      hasavif: 1
    },
    {
      hasavif: 1,
      haswebp: 1,
      height: 2000,
      width: 1400,
      hash: '46a5e5f6ee1908f8c6772196383fbcf7c305d8e12e2b6c1d1cf6b9528380825e',
      name: '06.jpg'
    },
    {
      haswebp: 1,
      hasavif: 1,
      width: 1400,
      height: 2000,
      hash: '4bdb7997dc8fd100dfd9ae1da040e39f1e518a1c0981553e59fdcaf9c5faa49b',
      name: '07.jpg'
    },
    {
      hasavif: 1,
      haswebp: 1,
      height: 2000,
      width: 1400,
      name: '08.jpg',
      hash: 'e916eeb13a5c6368af7ff7dc62894aa2a6faebf37d601d6a487e71a87890e321'
    },
    {
      haswebp: 1,
      hasavif: 1,
      width: 1400,
      height: 2000,
      name: '09.jpg',
      hash: 'bd616bf272b72c23a303aecd361670cbba7a7a001b5558e65fcf1495fbeba420'
    },
    {
      height: 2000,
      width: 1400,
      hash: 'd8781e5fa074a5469e9cba2a2e389eaf243a8efb63e267354525b677ad43de29',
      name: '10.jpg',
      hasavif: 1,
      haswebp: 1
    },
    {
      haswebp: 1,
      hasavif: 1,
      height: 2000,
      name: '11.jpg',
      width: 1400,
      hash: '743cf7884ec6d9fc5b2c4fe6dee1f55c7c3b5bfab882a7e78c27274e0ea95ad2'
    },
    {
      height: 2047,
      width: 1447,
      hash: 'eff0e61fb08c72978b7c996398dd1b6c81d1aa7a986d0277fbc04867bd940b0f',
      name: '12.jpg',
      hasavif: 1,
      haswebp: 1
    },
    {
      hasavif: 1,
      haswebp: 1,
      name: '13.jpg',
      height: 2414,
      width: 2400,
      hash: '610b9ede2f58b195c107618961596113edf8ec76ea4ba4182d5f14ca068d9e4f'
    }
  ],
  language_localname: '한국어',
  languages: [],
  artists: null,
  tags: [
    {
      url: '/tag/female%3Abig%20breasts-all.html',
      tag: 'big breasts',
      male: '',
      female: 1
    },
    {
      url: '/tag/female%3Acatgirl-all.html',
      tag: 'catgirl',
      female: 1,
      male: ''
    },
    {
      url: '/tag/female%3Afurry-all.html',
      tag: 'furry',
      male: '',
      female: 1
    },
    {
      url: '/tag/female%3Atiger-all.html',
      tag: 'tiger',
      female: 1,
      male: ''
    },
    {
      female: '',
      male: 1,
      tag: 'furry',
      url: '/tag/male%3Afurry-all.html'
    },
    {
      url: '/tag/male%3Ahorse%20boy-all.html',
      female: '',
      male: 1,
      tag: 'horse boy'
    },
    {
      tag: 'human on furry',
      female: '',
      male: 1,
      url: '/tag/male%3Ahuman%20on%20furry-all.html'
    },
    {
      url: '/tag/male%3Apig%20man-all.html',
      male: 1,
      female: '',
      tag: 'pig man'
    }
  ],
  videofilename: null,
  video: null,
  title: 'イチャラブ催眠アプリ',
  related: [ 1915462, 1827841, 1523807, 1461063, 2157276 ],
  date: '2022-03-27 03:40:00-05',
  groups: null,
  id: '2177645',
  scene_indexes: [],
  type: 'doujinshi',
  parodys: [ { url: '/series/original-all.html', parody: 'original' } ],
  japanese_title: null
}


function wait(ms) {
  return new Promise( (resolve) => {setTimeout(resolve, ms)});
}


const { default: axios } = require("axios");
const { not } = require("cheerio/lib/api/traversing");
const test = require("./getData");
const cheerio = require("cheerio");
const vm = require('vm');
const {common} = require('./commonFunction')
const randomUseragent = require('random-useragent');
// const { wait } = require("nightmare/lib/actions");
const ua = randomUseragent.getRandom();


var Hitomi = test.Hitomi

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


function full_path_from_hash(hash) {
  return gg.b+gg.s(hash)+'/'+hash;
}

function url_from_hash(galleryid, image, dir, ext) {
  ext = ext || dir || image.name.split('.').pop();
  dir = dir || 'images';
  
  return 'https://a.hitomi.la/'+dir+'/'+full_path_from_hash(image.hash)+'.'+ext;
}


//id,title,language,date, type, releated, files, tags
note = []
const testing = async () => {

  let index = await hitomi.getIndex(1,5)
  await Promise.all(index.nozomi.map(async (element) => {
    const response  = await hitomi.getGalleryInfo(element)
    let temp = JSON.parse(response.replace("var galleryinfo = ",""))
    // console.log(temp)
    note.push(temp)
    // getImages(temp)
    // let image = await hitomi.getGalleryImg("https://aa.hitomi.la/webp/1648310402/45/3a233001e89f76599eb1e390366ef53336543b95c7d64ffecbd2b71985d192d0.webp")
    // console.log(image.data)
  }));
  return note

  // console.log(url_from_hash("",jsonTemp,'avif','avif'))

  // console.log(real_full_path_from_hash('9fe2fc3ad088b0af7a335a4a4d66cc379b705dac6ea3e94ff44b038cd68b7fc2'));
}



const getImages = async (listFiles) => {
  let listImage = []
  let data = await hitomi.getRequest("https://ltn.hitomi.la/gg.js");
  ggFunction = data.data.toString().replace("gg","const gg")
  vm.runInThisContext(ggFunction)

  // await Promise.all(listFiles.files.map(async (element,index) => {
  //   let decodeUrl;
  //   if(index > 5) {
  //     return;
  //   }
  //   decodeUrl = common.url_from_url_from_hash(listFiles.id, element, 'webp', undefined, 'a')
  //   console.log(decodeUrl)
  //   let image = await hitomi.getGalleryImg(decodeUrl)
  //   console.log(index);
  //   // console.log(image.data) 
  //   listImage.push(image.data.toString('base64'));
  // }));

  // getGalleryImgs(listFiles.files)

  getGalleryImgs(testingJson)

}

const testingImage = async (url) =>{
  //https://aa.hitomi.la/webp/1648310402/45/3a233001e89f76599eb1e390366ef53336543b95c7d64ffecbd2b71985d192d0.webp
  let image = await hitomi.getGalleryImg("https://aa.hitomi.la/webp/1648310402/45/3a233001e89f76599eb1e390366ef53336543b95c7d64ffecbd2b71985d192d0.webp")
  // listImage.push(image.data.toString('base64'));
  console.log(image.data.toString('base64'));
}

const getGalleryImgs = async (files) => {
  // 
  // for()
  count = 0
  for(var file in files){
    var radomDelay = parseInt(Math.random() * 3 + 1)
    decodeUrl = common.url_from_url_from_hash(file.id, file, 'webp', undefined, 'a')
    console.log(decodeUrl)
    hitomi.getGalleryImg(decodeUrl).then(await wait(3000))
  }
}
//67f366f6a6973c1eb6e3220f232be003e99fc4f5a42693c7635789e3eaa11879
// testing();
getImages(testingJson)
// testingImage();


// console.log(real_full_path_from_hash('67f366f6a6973c1eb6e3220f232be003e99fc4f5a42693c7635789e3eaa11879'))


exports.hub = {testing}