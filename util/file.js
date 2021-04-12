const fs = require('fs');

const deleteFile = (filePath) => {
    //unlink delete the file connected to the name
    fs.unlink(filePath, (err) => {
        if (err) {
            throw (err);
        }
    });
}

exports.deleteFile = deleteFile;