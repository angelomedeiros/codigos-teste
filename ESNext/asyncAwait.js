const https =  require('https')

// GET /repos/:owner/:repo/languages

const getLanguages = (owner, repo) => {
  const options = {
    host: 'api.github.com',
    path: `/repos/${owner}/${repo}/languages`,
    method: 'GET',
    headers: {'user-agent': 'node.js'}
  }
  return new Promise((resolve, reject) => {
    https.get( options, res => {
      let resultado = ''

      res.on('data', dados => {
        resultado += dados
      })

      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado))          
        } catch (e) {
          reject(e)
        }
      })

    })
  })
}

// Abordagem usando Promises sem o async/await

// getLanguages('angelomedeiros', '2fa')
//   .then( res => (
//     console.log(res)
//   ))
//   .catch( e => (
//     console.log(e)
//   ))

// getLanguages('angelomedeiros', 'curso-quickstart-comparison')
//   .then( res => (
//     console.log(res)
//   ))
//   .catch( e => (
//     console.log(e)
//   ))

let obterLinguagens = async () => {
  const repo2fa        = await getLanguages('angelomedeiros', '2fa')
  const repoQuickstart = await getLanguages('angelomedeiros', 'curso-quickstart-comparison')
  console.log('repo2fa', repo2fa.JavaScript)
  return [].concat(repo2fa, repoQuickstart)
}

obterLinguagens()
    .then(linguagens => console.log(linguagens) )

