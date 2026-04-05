#!/usr/bin/env -S deno test --allow-read --allow-write
import * as datam from './data.js'

const IN='base/data/global/excel/MonStats.txt'
const OUT='/tmp/monstats.txt'

async function test(){
  let monsters=await datam.load(IN)
  await datam.save(monsters,OUT)
  let files=await Array.fromAsync([IN,OUT]
    .map((text)=>Deno.readTextFile(text)))
  if(files[0]!=files[1]) throw 'In and out do not match!'
}

Deno.test("Monster import and export",test)
