const {readFileSync, writeFileSync, write, writeFile, readFile} = require('fs');

console.log('start')
readFile('result-sync.txt','utf8',(err, result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('text.txt', 'utf8', (err,result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('result-async.txt', `Here is the changes async`, {flag: 'a'}, (err,result) =>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })

})

console.log('starting')