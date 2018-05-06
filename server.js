const express = require('express');

const app = express();

app.get('/api/customers', (req, res)=>{
    const customer = [
        { id : 1, firstName : 'Abinash', lastName : 'Kumar' },
        { id : 2, firstName : 'Anju', lastName : 'Kumar' },
        { id : 3, firstName : 'Ananad', lastName : 'Kumar' },
        { id : 4, firstName : 'Sonam', lastName : 'Kumar' },
        { id : 5, firstName : 'Sanju', lastName : 'Kumar' }
    ]

    res.json(customer);
})

const port = 5000;

app.listen(port, ()=>{ console.log(`Server started at port ${port}`)});

