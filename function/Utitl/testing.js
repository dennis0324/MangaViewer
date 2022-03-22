const { default: axios } = require("axios");
const test = require("./getData");
var Hitomi = test.Hitomi
// data = {
//   protocal: 'https:',
//   url : 'ltn.hitomi.la'
// }

let hitomi = new Hitomi();
// let makeURL = Hitomi.bind(data);
// let url = makeURL("index-all",".nozomi")


async function processArray(array) {
  // map array to promises
  const promises = array.map(delayedLog);
  // wait until all promises are resolved
  await Promise.all(promises);
  console.log('Done!');
}


note = []
const testing = async () => {

  let index = await hitomi.getIndex(1,5)

  await Promise.all(index.nozomi.map(async (element) => {
    const response  = await hitomi.getGalleryInfo(element)
    // const response = await axios.get('https://www.naver.com/');
    note.push(response.data)
  }));

  console.log(note)




  // index.nozomi.foreach(async (e) => {
  //   let data = await hitomi.getGalleryInfo(e)
  //   console.log(data)
  // })
  // let data = await hitomi.getGalleryInfo(2172192)
  // console.log(data)
}


testing();