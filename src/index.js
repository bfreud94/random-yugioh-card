import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = process.env.PORT || 8000

app.get('/', async (_, res) => {
    const { data } = await (await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')).json()
    const index = Math.floor(Math.random() * data.length)
    const { image_url } = data[index].card_images[0]
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from(`
        <a href='/'>
            <img height="558" width="404" src=${image_url} />
        </a>
    `))
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})
