exports.run = (client, message, guild) => {
	let autoResponse = {
  "hej": "hej",
  "ayy": "lmao",
  "ayyy": "lmao"
}
  
  if(autoResponse[message.content]) {
    message.channel.send(autoResponse[message.content]);
    console.log('hola')
  };


}