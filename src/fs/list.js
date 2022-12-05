import { readdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFiles = path.join(__dirname, 'files');

    if (!existsSync(pathToFiles)) {
        throw new Error('FS operation failed');
    }

    const files = await readdir(pathToFiles);
    console.log(files);
};

await list();