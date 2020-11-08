
const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const mime = require('mime')

/**
 * async function that reads asset from disk
 * @param {String} name full file name of asset in asset folder
 */
const findAsset = (name) => {
  return new Promise((resolve, reject) => {
    const assetPath = path.join(__dirname, 'assets', name)
    fs.readFile(assetPath, {encoding: 'utf-8'}, (err, asset) => {
      if (err) {
        reject(err)
      } else {
        resolve(asset)
      }
    })
  })
}

const hostname = '127.0.0.1'
const port = 3000
// simple, quick router object
const router = {
  '/ GET': {
    asset: 'index.html',
    type: mime.getType('html')
  },
  '/style.css GET': {
    asset: 'style.css',
    type: mime.getType('css')
  }
}