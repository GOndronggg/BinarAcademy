const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function renameFile(oldNames) {
    const [filename, extension] = oldNames.split(".");
    return `${filename}-${Date.now()}.${extension}`
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null,'./uploads/'),
    filename: (req, file, cb) =>cb(null,renameFile(file.originalname))
})
const upload=multer({storage:storage})
    
app.post('/register',upload.single('image'), (req, res) => {
    res.send('success');
})

app.listen(process.env.NODE_PORT,()=>console.log(`this app running at port ${process.env.NODE_PORT}`))