'use strict'

const Sonus = require('sonus')
const speech = require('@google-cloud/speech')
const client = new speech.SpeechClient({
  projectId: 'slowotwor',
  keyFilename: 'keyfile.json'
})

const hotwords = [{ file: 'sonus.pmdl', hotword: 'sonus' }]
const language = "en-US"

//recordProgram can also be 'arecord' which works much better on the Pi and low power devices
const sonus = Sonus.init({ hotwords, language: language, recordProgram: "rec" }, client)

Sonus.start(sonus)
console.log('Say "' + hotwords[0].hotword + '"...')

sonus.on('hotword', (index, keyword) => console.log("!" + keyword))

sonus.on('partial-result', result => console.log("Partial", result))

sonus.on('error', error => console.log('error', error))

sonus.on('final-result', result => {
  console.log("Final", result)
  if (result.includes("stop")) {
    Sonus.stop()
  }
})