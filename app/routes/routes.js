'use strict'
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: './uploads/'});

module.exports = (app)=>{
    
    app.post('/upload', upload.single('file'), (req, res)=>{
        let fileSize = {size: req.file.size};
        res.status(200).send(fileSize);
    });
    
    app.get('/upload', (req, res)=>{
        let uploadPage = path.resolve(__dirname, '../../views/upload.html');
        res.status(200).sendFile(uploadPage);
    });
    
    app.get('/', (req, res)=>{
        res.status(200).send('Hello');
    });
    
    app.use((req, res)=>{
        res.status(404).send('Page Not Found');
    });
};
