const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

MongoClient.connect('mongodb://localhost:27017/intro-mongo', (err, db)=> {
  const pessoas = db.collection('pessoas')
  pessoas.insert({
    nome: 'Emerson dos Santos',
    nascimento: '1998-04-22'
  }, (err, res)=>{
    console.log(err,res)
  })
  const cursorPessoas = pessoas.find({})
 cursorPessoas.forEach((doc) =>{
   console.log(doc)
 }, ()=> console.log('fim'))

pessoas.update({
  _id: mongodb.ObjectID('601d67bd536d051a460903d0')
},
{
  $set:{
    nome: 'Julio Almeida',
    nascimento:'1988-05-05'
  }
}, (err, res) => console.log(err))

pessoas.remove({
  _id:mongodb.ObjectID('601d67bd536d051a460903d0')
}, (err,res) => console.log(err))
})


