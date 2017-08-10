"use strict";
let _ = require("lodash");
let chai = require("chai");
let sinon = require("sinon");
let sinonChai = require("sinon-chai");
let expect = chai.expect;
chai.use(sinonChai);

let beerSong = require("../lib/beerSong.js");


describe("beerSong", function(){

    it("num == 0", function(){
        let result = beerSong(0);
        let expect_string = `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`;     
        expect(result).to.equal(expect_string);
    });

    it("num == 1", function(){
        let result = beerSong(1);
        let expect_string = `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
        expect(result).to.equal(expect_string);
    });
    
});