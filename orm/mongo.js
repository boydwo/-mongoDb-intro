const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/mongo-orm', {useMongoClient:true}).then(()=>{
  const PessoasSchema = mongoose.Schema({
    nome:String,
    cargo:String
  })
  const Pessoa = mongoose.model('Pessoa', PessoasSchema)
  // const marcos = new Pessoa({nome: 'Marcos Tulio', cargo:'CTO'})
  // marcos.save(()=> console.log('salvo'))

  Pessoa.find({}, (err, docs)=>{
    console.log(docs)
  })

  Pessoa.remove({
    _id:'601d6fe547a4be242ee93939'
  }, (err, res) => console.log('ok'))

})