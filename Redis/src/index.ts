import * as redis from 'redis'

const redisUrl = 'redis://127.0.0.1:6379'
const client   = redis.createClient(redisUrl)

// Tipos básicos
client.set('nome', 'Thalita Medeiros', redis.print)
client.get('senha', redis.print) // ou client.get('senha', (err, value) => console.log('Reply: ', value))


// Tipo hash
client.hset('german', 'red', 'rot', redis.print)
client.hget('german', 'red', redis.print) // client.hget('german', 'red', console.log) 
client.hset('german', 'blue', 'blau', redis.print)
client.hget('german', 'blue', redis.print)

// Object2json
const usuario = {
  nome: 'Angelo Medeiros',
  email: 'angelomedeiros3@gmail.com'
}

const usuarioJson = JSON.stringify(usuario)
client.set('usuario', usuarioJson)

client.get('usuario', (err, value) => {
  console.log(JSON.parse(value))
})

client.quit()