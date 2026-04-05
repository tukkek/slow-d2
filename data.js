var separator='\n'
var trailing=false

export class Data{
  constructor(fields,data){
    this.data=data
    this.fields=fields
  }

  save(){
    return this.data.map((object)=>String(object)).join('\t')
  }

  get(field){return this.data[this.fields.indexOf(field)]}

  set(field,value){
    let i=this.fields.indexOf(field)
    if(i>=0) this.data[i]=value
  }
  
  grow(field,amount){
    let value=this.get(field)
    if(!value) return
    value=Number(value)
    value*=amount
    if(field=='durability'&&value>255) value=255
    this.set(field,value)
  }
  
  shrink(field,amount){
    let value=this.get(field)
    if(!value) return
    value=Number(value)
    if(value==0) return
    value=Math.floor(value/amount)
    if(value<1) value=1
    this.set(field,value)    
  }
}

export async function load(path){
  let text=await Deno.readTextFile(path)
  separator=text.includes('\r\n')?'\r\n':'\n'
  trailing=text.endsWith('\n')
  text=text.split(separator);
  if(trailing) text=text.slice(0,-1)
  let fields=text[0].split('\t')
  let data=text.slice(1).filter((text)=>Boolean(text))
    .map((text)=>new Data(fields,text.split('\t')))
  return Promise.resolve(data)
}

export async function save(data,path){
  let text=[
    data[0].fields.join('\t'),
    data.map((data)=>data.save())
  ].flat().join(separator)
  if(trailing) text+=separator
  await Deno.writeTextFile(path,text)
  return Promise.resolve()
}
