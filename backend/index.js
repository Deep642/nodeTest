import express from "express";
import cors from "cors"
const app=express();
import fetch from "node-fetch";
import item from "./model.js";
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
import router from "./router.js";
app.get("/",router);
app.listen(4000);
 
import mongoose from "mongoose";
mongoose.connect(`mongodb+srv://nodeTest:nodeTest@cluster0.bur4lju.mongodb.net/new?retryWrites=true&w=majority`);
 
// for fetching and storing the data in Database:-
async function getposts() { 
    const myposts = await fetch(`https://api.wazirx.com/api/v2/tickers`);
    const response = await myposts.json();
              
    var j = 1;
    for (let i in response) {
        if (j > 10) break;
        const Item = new item({
            name: response[i].name,
            last: response[i].last,
            buy: response[i].buy,
            sell: response[i].sell,
            volume: response[i].volume,
            base_unit: response[i].base_unit
        });
        Item.save();
        j++; 
    }
} 
var t=1;
// while(t--)getposts();  
