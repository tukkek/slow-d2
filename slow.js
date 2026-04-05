#!/usr/bin/env -S deno --allow-read --allow-write
import * as datam from './data.js'

const PATH='data/global/excel/'
const RAISE=['minHP','maxHP','MinHP','MaxHP','DamageRegen',
  'durability','durwarning','qntwarning','spawnstack']
const LOWER=['MinD','MaxD']
const SCALE=3

class Slower{
  constructor(file){this.file=file}
  
  async slow(){
    let file=this.file
    let all=await datam.load(`${PATH}/${file}.txt`)
    for(let data of all) for(let field of data.fields){
      if(RAISE.find((text)=>field.includes(text)))
        data.grow(field,SCALE)
      if(LOWER.find((text)=>field.includes(text)))
        data.shrink(field,SCALE)
    }
    await datam.save(all,`${PATH}/${file}.txt`)
  }
}

for(let file of ['MonStats','Armor','Weapons'])
  await new Slower(file).slow()
