const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	console.log(message.body);
});

client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});

client.on('message', message => {
	if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
});

//Enviar mensajes a numeros 
client.on('ready', () => {
	console.log('Client is ready!');
   
	 // Number where you want to send the message.
	const numbers = ["+573506122944","+573027490686"];
   
	 // Your message.
	const text = "Mensaje de prueba";
   
	 // Getting chatId from the number.
	 // we have to delete "+" from the beginning and add "@c.us" at the end of the number.

	for(let i = 0; i < numbers.length; i++){

		console.log(i);

		const chatId = numbers[i].substring(1) + "@c.us";
   
		// Sending message.
		client.sendMessage(chatId, text);
	}

	
   });

client.initialize();