import { Express } from "express";
const app= express()

app.get('/api/products', (req, res)=>{
    const products=[
        {
            id:1,
            name:'wooden table 1',
            price: 201,
            image:'https://images.pexels.com/photos/347139/pexels-photo-347139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:2,
            name:'wooden table 2',
            price: 202,
            image:'https://images.pexels.com/photos/347139/pexels-photo-347139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:3,
            name:'wooden table 3',
            price: 203,
            image:'https://images.pexels.com/photos/347139/pexels-photo-347139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:4,
            name:'wooden table 4',
            price: 204,
            image:'https://images.pexels.com/photos/347139/pexels-photo-347139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:5,
            name:'wooden table 5',
            price: 205,
            image:'https://images.pexels.com/photos/347139/pexels-photo-347139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]
})
//we want to get the API in some delay

const port = process.env.PORT || 3000;



app.listen(port, ()=>{
console.log(`Port is listening at port ${port}`);
});