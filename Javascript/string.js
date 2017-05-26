var a ="hi this is radha"
var a ="hi this is radha"
undefined
a
"hi this is radha"
a.length
16
var a ="   hi this is radha    "
undefined
a.trim()
"hi this is radha"
a.replace("radha","radh")
"   hi this is radh    "
a.repeat(2)
"   hi this is radha       hi this is radha    "
a.repeat(3)
"   hi this is radha       hi this is radha       hi this is radha    "
a.slice(1,4)
"  h"
a.slice(4,8)
"i th"
a.substr(4,8)
"i this i"
a.match("rs")
null
a.match("rd")
null
a.match("ra")
["ra", index: 14, input: "   hi this is radha    "]
var a = "radha"
undefined
var b ="javascript"
undefined
a.concat(b)
"radhajavascript"
a.strike()
"<strike>radha</strike>"
a.bold()
"<b>radha</b>"
a.anchor()
"<a name="undefined">radha</a>"


var a = Date()
undefined
a
"Fri May 26 2017 22:29:33 GMT+0530 (India Standard Time)"
var a = new Date()
undefined
a
Fri May 26 2017 22:29:47 GMT+0530 (India Standard Time)

var a= ["a","b","c","d",1,2,"e"];

var a = new Array();

var a= ["a","b","c","d",1,2,"e"];
undefined
a
(7) ["a", "b", "c", "d", 1, 2, "e"]
var b = new Array()
undefined
b
[]
b.push("a")
1
b.push("b")
2
b.push("c")
3
b
(3) ["a", "b", "c"]
a.pop(2)
"e"
b.push("d")
4
b
(4) ["a", "b", "c", "d"]
a.pop(2)
2
b
(4) ["a", "b", "c", "d"]
b.pop(2)
"d"
b
(3) ["a", "b", "c"]
b.pop()
"c"
a.unshift("e")
6
b.unshift("e")
3
b
(3) ["e", "a", "b"]
b.shift()
"e"
b
(2) ["a", "b"]
a.length
6
a
(6) ["e", "a", "b", "c", "d", 1]
delete a[1]
true
a
(6) ["e", undefined × 1, "b", "c", "d", 1]
var a= ["a","b","c","d",1,2,"e"];
undefined
a.splice(2,0,"f","g")
[]
a
(9) ["a", "b", "f", "g", "c", "d", 1, 2, "e"]
a.slice(2)
(7) ["f", "g", "c", "d", 1, 2, "e"]
b
(2) ["a", "b"]
a
(9) ["a", "b", "f", "g", "c", "d", 1, 2, "e"]
a.sort()
(9) [1, 2, "a", "b", "c", "d", "e", "f", "g"]
var a = "hi am radha i radha"
undefined
a.replace("radha","javascript")
"hi am javascript i radha"
var a = "hi am radha i radha"
undefined
a.replace(/radha/g,"javascript")
"hi am javascript i javascript"
var a = "hi am radha i Radha"
undefined
a.replace(/radha/g,"javascript")
"hi am javascript i Radha"
var a = "hi am radha i Radha"
undefined
a.replace(/radha/ig,"javascript")
"hi am javascript i javascript"

var a = "i am radha 123 i an he123"
undefined
a.match(123)
["123", index: 11, input: "i am radha 123 i an he123"]
a.match(/123/)
["123", index: 11, input: "i am radha 123 i an he123"]
a.match(/123/g)
(2) ["123", "123"]0: "123"1: "123"length: 2__proto__: Array(0)
a.match([0-9])
null
a.match(/[0-9]/)
["1", index: 11, input: "i am radha 123 i an he123"]
a.match(/[0-9]{2}/)
["12", index: 11, input: "i am radha 123 i an he123"]
a.match(/[0-9]{3}/)
["123", index: 11, input: "i am radha 123 i an he123"]
a.match(/[0-9]{3}/g)
(2) ["123", "123"]
a.match(/[0-9]{2}/g)
(2) ["12", "12"]
a.match(/[a-z]/g)
(13) ["i", "a", "m", "r", "a", "d", "h", "a", "i", "a", "n", "h", "e"]
