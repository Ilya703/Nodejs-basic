import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from 'stream';
import { createGzip } from 'zlib';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const pathToNewFile = path.join(__dirname, 'files', 'archive.gz');

    const rs = createReadStream(pathToFile);
    const ws = createWriteStream(pathToNewFile);

    const gzip = createGzip();

    pipeline(rs, gzip, ws, (err) => {});
};

await compress();