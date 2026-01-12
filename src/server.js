import e from "express"
import express from "express"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin : process.env.CROS_ORIGIN,
    credentials: true
})) // read about cors

app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public")) // public is which can be kept publicly

app.use(cookieParser())


export { app}