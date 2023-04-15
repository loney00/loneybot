const fs = require('fs')
const chalk = require('chalk'); 

//*╔═══❖•ೋ° °ೋ•❖═══╗*
//    DEFINIÇÕES  DS NUMEROS E NOMES
//*╚═══❖•ೋ° °ೋ•❖═══╝*
global.V = ['4.0']//<--versão do bot
//-------------------------------------
global.bot = ['LoneyBot']//<--nome do bot
//-------------------------------------
global.name = ['Mano_Loney']//<--nome do dono
//-------------------------------------
global.nami = ['Loneyzin du mau']//<--nome fofo do dono
//-------------------------------------
global.prefa = ['','!','.','×','/','?']//<--prefix
//-------------------------------------
global.owner = ['5538999063625']//<--numedo do dono
//-------------------------------------
global.sessionName = 'Qrcode'//<--nome da sessão
global.api = 'key-do-Loney_bot-md-1'
//-------------------------------------
//-------------------------------------
//-------------------------------------
//*╔═══❖•ೋ° °ೋ•❖═══╗*
//           NOME DAS FIG
//*╚═══❖•ೋ° °ೋ•❖═══╝*
global.author = '@Loney.ly'
//-------------------------------------
global.packname = `tamoar`
//-------------------------------------
//-------------------------------------
//-------------------------------------

global.sp = '⭔'
//*╔═══❖•ೋ° °ೋ•❖═══╗*
//            PALAVRAS E FALAS
//*╚═══❖•ೋ° °ೋ•❖═══╝*
global.mess = {
    success: '✓ Success',
    admin: 'n',
    botAdmin: 'n',
    owner: 'n',
    group: 'n',
    private: 'n',
    bot: 'n',
    wait: 'Aguarde...',
}
global.thumb = fs.readFileSync('./lib/loneybot.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file) 
	console.log(chalk.yellowBright(`┌────────────────────────────────────────────────❮●
└atualizou'${__filename}' com sucesso`))
	delete require.cache[file]
	require(file)
})
