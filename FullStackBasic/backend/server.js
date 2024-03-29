import  express  from "express";
const app = express();
// app.get("/", (req, res)=>{
//     res.send("Server is ready")
// });
app.get('/api/jokes', (req, res)=>{
    const jokes=[
        {
            id: 1,
            title: 'A Joke',
            content: 'This is pados wali joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is not a joke'
        },
        {
            id: 3,
            title: 'Ye wala Joke',
            content: 'This is best joke'
        },
        {
            id: 4,
            title: 'Ok Joke',
            content: 'This is altu faltu joke'
        },
        {
            id: 5,
            title: 'Uff Joke',
            content: 'This is kuch joke'
        }
        
    ];
    // res.setHeader('Content-Type', 'application/json'); // Set content type to JSON
    // res.status(200).json(jokes); // Send jokes as JSON array
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Listen on the port ${port}`);
} );