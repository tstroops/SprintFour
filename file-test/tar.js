const express = require("express");
const path = require("path");
var events = require('events');
var fs = require("fs");

function random(list){
    return Math.floor(Math.random()*list.length);
}

let html = ``;
let keys = ["and", "or", "this", "that", "."]

let chain = {
    "or": ["this", "that"],
    "and": ["this", "that"],
    "this": ["and", "or"],
    "that": ["."],
    ".": ["and", "or"]
}

function makeBabble(wordCount) {
        seed = keys[random(keys)];
        for(let i = 0; i<=wordCount; i++){
            word = chain[seed][random(seed)];
            html += `
            <p>${word}</p>
            `
        }
    }

 

let linkName = ["apple", "bear", "camel", "dandelion"];
const app = express();
const port = 3000;

var eventEmitter = new events.EventEmitter();

function randomLinks(){
    for(let i = 0; i<4; i++){
        html+=`
        <a href='http://localhost:${port}'>${linkName[random(linkName)]}</a>
        `
    }
}

app.get('/', (req, res) => {
    html = '';
    makeBabble(10);
    randomLinks();
    res.send(html);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});