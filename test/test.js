var test = require('../routes/assessment.js');
var linkedlist = require('../linkedlist.js');
var assert = require("chai").assert;
var mocha = require('mocha');
var describe = mocha.describe;

describe('Test getHead()', function () {
    it('getHead() result = null ', function () {
        var result = new linkedlist();
        result.prepend("a");
        result.append("1");
        result.getHead();
        var a = result.delete("1")
        assert.strictEqual(a,null);
    });
   
});

describe('Test getTail()', function () {
    it('getTail()', function () {
        var result = new linkedlist();
        result.prepend("a");
        result.append("1");
        var a = result.getTail();
        assert.strictEqual(a.value ,"1");
    });
});

describe('Test prepend()', function () {
    it('prepend(value) 1 value', function () {
        var result = new linkedlist();
        result.prepend("a");
        var a = result.getHead();
        assert.strictEqual(a.value,"a");
    });
    it('prepend(value) more than 1 values', function () {
        var result = new linkedlist();
        result.prepend("a");
        result.prepend("1");
        var a = result.getHead();
        assert.strictEqual(a.value,"1");
    });
});

describe('Test append(value)', function () {
    it('append(value) 1 value', function () {
        var result = new linkedlist();
        result.append("1");
        var a = result.getTail();
        assert.strictEqual(a,null);
    });
});

describe('Test delete(value)', function () {
    it('delete(value) 0 value', function () {
        var result = new linkedlist();
        result.delete();
        var a = result.getTail();
        assert.strictEqual(a,null);
    });
   
    it('delete(value)', function () {
        var result = new linkedlist();
        result.prepend("1")
        result.append("2");
        result.delete("1");
        var a = result.find("2");
        assert.strictEqual(a,null);
        
    });
});

describe('Test find', function () {
    it('find a', function () {
        var result = new linkedlist();
        result.prepend("a");
        result.prepend("1");
        result.append("b");
        result.append("2");
        var a = result.find("1");
        assert.strictEqual(a,null);

    });
    it('find 4', function () {
        var result = new linkedlist();
        result.prepend("a");
        result.append("1");
        var a = result.find("4");
        assert.strictEqual(a,null);
    });
    it('find result = null', function () {
        var result = new linkedlist();
        var a = result.find();
        assert.strictEqual(a,null);

    });
});

describe('Test deleteHead()', function () {
    it('deleteHead() head=null', function () {
        var result = new linkedlist();
        var a = result.deleteHead();
        assert.strictEqual(a,null);

    });
    it('deleteHead() tail=null', function () {
        var result = new linkedlist();
        result.prepend("a");
        result.deleteHead();
       var a = result.find("a");
        assert.strictEqual(a,null);


    });
    it('deleteHead() ', function () {
        var result = new linkedlist();
        result.prepend("a");
        result.append("b");
        result.deleteHead();
        var a = result.find("a");
        assert.strictEqual(a,null);

    });
});

describe('Test toArray()', function () {
    it('toArray() 1 value', function () {
        var result = new linkedlist();
        result.prepend("a");
        result.append("b");
        result.toArray();
        var a = result.find();
        assert.strictEqual(a,null);
    });
    });

describe('Test toLinkString()', function () {
    it('toLinkString() 1 value', function () {
        var result = new linkedlist();
        result.append("a");
        result.toLinkString();
        var a = result.getTail();
		assert.strictEqual(a.value,"a");

    });
    it('toLinkString() more than 1 value', function () {
        var result = new linkedlist();
        result.prepend("a");
        result.append("1");
        result.toLinkString();
        var a = result.getTail();
		assert.strictEqual(a.value,"1");

    });
});

describe('Test reverse()', function () {
    it('reverse()', function () {
        var result = new linkedlist();
        result.prepend("a");
        result.append("1");
        result.reverse();
        var a = result.getHead();
        assert.strictEqual(a.value,"1");
    });
});