'use strict'

module.exports = (app)=>{
    app.get('/', (req, res)=>{
        res.status(200).send('Hello');
    });
    
    app.use((req, res)=>{
        res.status(404).send('Page Not Found');
    });
};
