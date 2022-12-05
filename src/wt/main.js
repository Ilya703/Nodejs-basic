import { Worker, parentPort } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';


const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFile = path.join(__dirname, 'worker.js');

    let num = 10;

    let result = await Promise.allSettled(cpus().map(() => (
        new Promise((resolve, reject) => {
            const worker = new Worker(pathToFile, { workerData: num });

            num++;

            worker.on('message', data => resolve(data));
            worker.on('error', data => reject(data));
        })
    )));

    result = result.map((worker) => {
        if(worker.status === 'fulfilled') {
            return { 
                status: 'resolved',
                data: worker.value
            };
        } else {
            return { 
                status: 'error',
                data: null
            };
        }
    })

    console.log(result);
};

await performCalculations();