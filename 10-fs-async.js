const {readFile, writeFile } = require('fs')
// or 
// const fs = require('fs');
// fs.readFile
// fs.writeFile
console.log('start')

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
    console.log(err)
    return
} //this is callback 
const first =result
readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err){
    console.log(err)
    return
}
const second =result
writeFile('./content/result-async.txt', `Sheesh :${first}, ${second}`, (err,result)=>{
    if(err){
        console.log(err)
        return
    }  
console.log('done with this task') 
})
    })
})

console.log('starting the next task')