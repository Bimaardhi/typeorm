import express, { Request, Response } from "express";
import cors from "cors";
import { AppDataSource } from "./data-source"
import { Thread } from "./entities/Thread";

export const router = express.Router();


AppDataSource.initialize()
    .then(async () => {
        const app = express();
        const port = 3000;
        

        app.use(cors());
        app.use(express.json())
        app.use("/api/v1", router);

        // router.get("/home", (req: Request, res: Response) => {
        //     res.json([
        //         {
        //             user: "bima ardhiansyah",
        //             title: "halo",
        //             description: "description",
        //         }
        //     ])
        // })
        app.get("/", (req: Request, res: Response) => {
            res.send("welcome to circle!");
        })

        const threadRepository = AppDataSource.getRepository(Thread);

        // v1
        router.get("/threads", async (req: Request, res: Response) => {
           const threads = await threadRepository.find();

            res.json(threads)
        })

        router.get("/threads/:id", async (req: Request, res: Response) => {
            const { id } = req.params;

            const threads = await threadRepository.findOne({
                where: { id: Number(id) },
            });
 
             res.json(threads)
         })

        app.listen(port, () => {
            console.log(`Server berjalan di port ${port}`)
        })

    }).catch(error => console.log(error))


    //{origin: ["https..."]} untuk mengizinkan