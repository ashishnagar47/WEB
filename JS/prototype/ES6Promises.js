function fakeDownload(correct){
    return new Promise(function(resolve,reject){
        console.log("shbbx")
        setTimeout(function(){
            let downloadedData="File Downloaded"
            if(correct){
            resolve(downloadedData);}
            else{
                reject(new Error("Could not download file"))
            }
        }, 5000)
    })
}

fakeDownload(false).then(function(message){
    console.log("Downloading Start")
    console.log(message)
}).catch(function(err){
    console.log(err)
})