let fs = require('fs');
let HashMap = require('hashmap');
let express = require('express');
let app = express();

// let data = fs.readFileSync('file.json');
// let record = JSON.parse(data);

fs.readFile('file.json', (err, data) => {
    if (err) throw err;
    let record = JSON.parse(data);
    console.log(record);
});

 let map = new HashMap();
//console.log(record);
for(var key in record){
    if(record.hasOwnProperty(key)){
        map.set(key,record[key]);
    }
}

app.post('/create',(req,res)=>{
    var key = req.body.key;
    var obj = req.body.obj;
    if(map.has(key)){
        console.log("Key already exists!");
    }
    map.set(key,object);
})

app.post('/read',(req,res)=>{
    res.send(map.get(req.body.key));
})

app.post('/delete',(req,res)=>{
    res.send(map.delete(req.body.key));
})

let port = process.env.PORT || 4321;
app.listen(port,()=>{
    console.log("server started at http://localhost:4321")
});







