//criado o nome do projeto 'tasklist' no adonis 5
//https://www.youtube.com/watch?v=VIvBeEj9QVg&list=PL9gT3zlT0C1Ngrii-NCPpuRvUO1mIGzwf&index=1
//https://github.com/mezielabs/taskist
- npx create-adonis-ts-app tasklist

// ir para a pasta do projeto
cd tasklist

//ir para o visual studio
code .
extensões para codar 
 -adonisjs 4.1 snippets 
 -standardjs 

node ace serve --watch (like nodemoon)

//considerações
//nesta versão do adonisjs não tem mais cli,,, é ACE directly
node ace --help
node ace serve --help (para info especificos de cada comando)
npm install @adonisjs/lucid@alpha // para bancos de dados ORM object data manager
npm install mysql //instalando os drivers ... 
node ace invoke @adonisjs/lucid //iniciando com lucid orm
node ace make:migration tasks
node ace migration:run

// L U C I D 
npm install @adonisjs/shield@alpha - instalando shield 
node ace invoke @adonisjs/shield

//A U T H
npm i @adonisjs/auth@alpha
node ace invoke @adonisjs/auth





alteração em kernel.jsdoc-message
acrescentar no register
'Adonis/Addons/ShieldMiddleware',
Route.get('/','TaskController.index')


//git
git init
git push -u origin master
git commit -m "first commit"
git remote add origi77n https://github.com/FabioDavi/adonisjs5-task-service.git
git push -u origi77n master


Foco
versatilidade no portifolio dentro da mesma stack 
(experiência e profundidade)