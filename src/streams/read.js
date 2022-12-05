import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    const rs = createReadStream(pathToFile);

    rs.on('data', (data) => {
        process.stdout.write(data.toString());
    });
};

await read();