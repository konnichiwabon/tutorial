// CommonJS, every file is module (by default)
// MODULES - Encapsulated Code (only share a minimum )
const names = require('./3-name') //this is to call the module 
const sayHi = require('./4-utils') 
const data = require('./5-alternative-flavor')
require('./6-mind-grenade') //ma tawag rani sya bisan walay variable kay gi tawag ni ngadto sa 6-mind-grenade which is addValues() which is ma run 

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)