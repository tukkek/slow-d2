#!/usr/bin/env -S deno test --allow-read --allow-write
import * as monsterm from './monster.js'

const IN='d2data/data/global/excel/monstats.txt'
const OUT='/tmp/monstats.txt'

async function test(){
  let monsters=await monsterm.load(IN)
  await monsterm.save(monsters,OUT)
  let files=await Array.fromAsync([IN,OUT]
    .map((text)=>Deno.readTextFile(text)))
  if(files[0]!=files[1]) throw 'In and out do not match!'
}

Deno.test("Monster import and export",test)
