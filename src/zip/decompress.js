import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from 'stream';
import { createGunzip } from 'zlib';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToNewFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const pathToFile = path.join(__dirname, 'files', 'archive.gz');

    const rs = createReadStream(pathToFile);
    const ws = createWriteStream(pathToNewFile);

    const gunzip = createGunzip();

    pipeline(rs, gunzip, ws, (err) => {});
};

await decompress();