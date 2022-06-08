const path = require("path");
const fs = require("fs");

const jsonsDirPath = path.join(__dirname, '../public/locales');
const jsDirPath = path.join(__dirname, '../translations-temp');

const localesDir = fs.readdirSync(jsDirPath).filter(file => file.match(/\.js/));

for (let file of localesDir) {
    const content = require(`${jsDirPath}/${file}`).default;
    const jsonContent = JSON.stringify(content, undefined, '    ');
    fs.writeFileSync(`${jsonsDirPath}/${file.replace(".js", "")}/common.json`, jsonContent);
    console.log(`Wrote ${file} to json directory`);
}
