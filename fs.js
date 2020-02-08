const fs = require("fs");

//fs.writeFile("name of file", "value", callback())

fs.writeFile("message.text", "hello there node", err => {
  if (err) throw err;

  console.log("file has been written");
});

//fs.readFile("filepath","encoding", callback() )

fs.readFile("./message.text", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
