import { writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    if (existsSync(path.join(__dirname, 'files', 'fresh.txt'))) {
        throw new Error('FS operation failed');
    } 

    await writeFile(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young');
};

await create();