const fs = require("fs")
const args = process.argv.slice(2);
const cmd = args[0]
const path = args[1]
const input = args[2]

if(cmd=="read")
{
    fs.readFile(path,{encoding:"utf-8"}, (err, data) => {
        if (err) throw err;
        console.log(data);
      })
}
else if (cmd=="append")

{
    fs.appendFile( input, path, (err) => {
        if (err) throw err;
        console.log(`The ${path} was appended to file!`);
      });
}
else if (cmd=="delete")
{
    fs.unlink(path, (err) => {
        if (err) throw err;
        console.log(`${path} was deleted`);
      });
}
else if (cmd=="rename")
{
    fs.rename(path, input, (err) => {
        if (err) throw err;
        console.log('renamed complete');
      })
}
else if (cmd=="create")
{
    fs.open(path, "w", (err) => {
        if (err) throw err;
        console.log('File Created');
      })
}
else if (cmd=="list")
{
    // console.log(cmd)
    fs.readdir(path, (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      });
}