var headers=[]
var separator='\n'
var trailing=false

export class Monster{
  constructor(data){this.data=data}

  save(){
    return this.data.map((object)=>String(object)).join('\t')
  }

  get(field){return this.data[headers.indexOf(field)]}

  set(string,value){
    let i=headers.indexOf(field)
    if(i>=0) this.data[i]=value
  }
}

export async function load(path){
  let text=await Deno.readTextFile(path)
  separator=text.includes('\r\n')?'\r\n':'\n'
  trailing=text.endsWith('\n')
  text=text.split(separator);
  if(trailing) text=text.slice(0,-1)
  headers=text[0].split('\t')
  let monsters=text.slice(1).filter((text)=>Boolean(text))
    .map((text)=>new Monster(text.split('\t')))
  return Promise.resolve(monsters)
}

export async function save(monsters,path){
  let text=[
    headers.join('\t'),
    monsters.map((monster)=>monster.save())
  ].flat().join(separator)
  if(trailing) text+=separator
  await Deno.writeTextFile(path,text)
  return Promise.resolve()
}
