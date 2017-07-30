exports.run = (client, message) => {
	let autoResponse = {
  "hej": "hej",
  "ayy": "lmao",
  "ayyy": "lmao",
  "ayyyy": "lmao"
}
  
  if(autoResponse[message.content]) {
    message.channel.send(autoResponse[message.content]);
    console.log('hola')
  };


}