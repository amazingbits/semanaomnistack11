//separei a continuação do arquivo app.js para cá, deixando só
//o momento onde ele sobe a aplicação na porta 3333, porque não
//quero que durante os meus testes a aplicação esteja aberta
//então, quando eu der npm test ele subirá apenas o app.js sem
//subir o servidor
const app = require('./app');

app.listen(3333);