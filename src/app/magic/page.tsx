

const state = {

}

type Tool {
  name: string
  dedicated: bool
}

type Char {
  gnose: number
  vida: number
  tempo: number
  sorte: number
  morte: number
  espirito: number
  primordio: number
  materia: number
  espaco: number
  forcas: number
  ferramentas: Tool[]
}

const char = {
  gnose: 0,
  ferramentas: [ ]
}

const type = ['improvisada', 'praxis', 'rotina']

const practices = [
  ['compelir', 'conhecer', 'desvelar'],
  ['reger', 'proteger', 'velar'],
  ['desfiar', 'aperfeiçoar', 'fiar'],
  ['padronizar', 'desfazer'],
  ['fazer']
]

const pages = [
  'setup',
  'type',
  'practice',
  'arcana',
  'reaches',
  'yantras',
  'bonus'
]

const Setup = () => {
  return (
  <div>
    </div>
  )
}


const Magic = () => {
  return <h1>Test</h1>;
};

export default Magic;
