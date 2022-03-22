const test = require("./getData");
var Hitomi = test.Hitomi
// data = {
//   protocal: 'https:',
//   url : 'ltn.hitomi.la'
// }

let hitomi = new Hitomi();
// let makeURL = Hitomi.bind(data);
// let url = makeURL("index-all",".nozomi")

const testing = async () => {

  let index = await hitomi.getIndex(1,5)

  await Promise.all(index.nozomi.map(async (element) => {
    const response  = await hitomi.getGalleryInfo(element)
    console.log("testing:" +response)
  }));
  // index.nozomi.foreach(async (e) => {
  //   let data = await hitomi.getGalleryInfo(e)
  //   console.log(data)
  // })
  // let data = await hitomi.getGalleryInfo(2172192)
  // console.log(data)
}


testing();