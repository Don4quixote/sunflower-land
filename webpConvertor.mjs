import fs from "fs";
import path from "path"
import imagemin from 'imagemin-overwrite';
import imageminWebp from 'imagemin-webp';

let Files  = [];

//Get all png,jpg and webp fils from all dir and subdir of assets and put them in "Files"
function ThroughDirectory(Directory) {
    fs.readdirSync(Directory).forEach(File => {
        const Absolute = path.join(Directory, File);
        if (fs.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
        else {
          if(Absolute.includes('.png') || Absolute.includes('.jpg') || Absolute.includes('.webp')) {
            return Files.push(Absolute);
          }
        }
    });
}
ThroughDirectory("src/assets/");

//Get all the files that does not have a WEBP version
let FilesWithoutWebp = Files.filter(image => !Files.includes(path.parse(image).dir +"\\"+ path.parse(image).name + '.webp'));
let n = FilesWithoutWebp.length;

//Create a WEBP version for each file that doesn't have one
FilesWithoutWebp.forEach(image => {
  let imgPath = path.parse(image).dir.replaceAll('\\','/')+'/*.{jpg,png}';
  (async () => {
    await imagemin([imgPath], {
      plugins: [
        imageminWebp({lossless: true})
      ]
    });
    console.log('Webp version created for '+n+' files');
  })();
})