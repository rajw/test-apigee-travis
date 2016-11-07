var expect    = require("chai").expect;
var main = require("../app");

var definedString = 'Hello Raj Apigee';

describe("Check string", function() {
    
    it("Check whether the string is equal to defined string", function() {
        
        var resultString = main.returnText;
        expect(definedString).to.equal(resultString);
        
    });
    
    
});
    
    