const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } =require("uuid");

const app = express();

app.use(express.json());

app.get("/risk/:sentence", async (req, res) => {
    const sentence = ""+req.params.sentence;
    // var isValid=sentence.match(/[A-Z]/gi||[]).length
    // console.log("sentence length: "+sentence.length)
    const testAlphabet=/[a-z]/i.test(sentence);
    console.log(testAlphabet);
    if(!testAlphabet){
        return res.sendStatus(404);
    }
    var risk=sentence.match(/crash|bump|collide|scratch|smash/gi||[]);
    var riskCount=0;
        riskCount=risk.length;
    return res.json({
        riskRating: riskCount
    });
});

app.listen(3000, () => console.log("API Server is running..."));

