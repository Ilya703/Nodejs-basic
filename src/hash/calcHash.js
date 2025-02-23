import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import { readFile } from 'fs';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    readFile(pathToFile, 'utf8', (err, data) => {
        const hash = createHash('sha256').update(data).digest('hex');
        console.log(hash);
    });
};

await calculateHash();