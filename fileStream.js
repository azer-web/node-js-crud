var fs = require('fs');


fs.readFile('dosya.txt','utf8', function (hata, data) {
    if (hata) {
        throw hata;
    }
    console.log(data)
})


fs.writeFile('dosya2.txt','Azer Demirli', function (hata) {
    if (hata) {
        throw hata;
    }
    console.log('added')
})