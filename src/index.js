import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = process.env.PORT || 8000

app.get('/', async (req, res) => {
    const { data } = await (await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')).json()
    const index = Math.floor(Math.random() * data.length)
    const { image_url } = data[index].card_images[0]
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from(`<img src=${image_url} />`))
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})
