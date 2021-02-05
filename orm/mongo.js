const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/mongo-orm', {useMongoClient:true}).then(()=>{
  const PessoasSchema = mongoose.Schema({
    nome:String,
    cargo:String
  })
  const Pessoa = mongoose.model('Pessoa', PessoasSchema)
  const marcos = new Pessoa({nome: 'Marcos Tulio', cargo:'CTO'})
  marcos.save(()=> console.log('salvo'))

})