import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');

    const ws = createWriteStream(pathToFile);

    process.stdin.on('data', data => {
        ws.write(data);
    });
};

await write();