import { existsSync, readFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFiles = path.join(__dirname, 'files');
    const pathToReadFile = path.join(pathToFiles, 'fileToRead.txt');

    if (!existsSync(pathToReadFile)) {
        throw new Error('FS operation failed');
    }

    readFile(pathToReadFile, { encoding: 'utf-8' }, (err, data) => {
        console.log(data);
    })
};

await read();