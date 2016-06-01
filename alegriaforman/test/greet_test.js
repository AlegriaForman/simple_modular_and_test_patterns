'use strict';

const expect = require('chai').expect;
const greet = require(__dirname + '/../lib/greet');

describe('Test greet function from index.js', function(){
  it('index.js should return "Hello Ali!"', function(){
    expect(greet('Ali')).to.eql('Hello Ali!');
  });
});

describe('For extra point on command util', function(){
  it ('Pass input from CLI, run node index.js should return "Hello some name!"', function(){
    expect(greet(process.argv[2])).to.eql('Hello ' + process.argv[2] + '!');
  });
});
