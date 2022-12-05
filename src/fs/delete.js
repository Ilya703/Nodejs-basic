import  { rm } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFiles = path.join(__dirname, 'files');
    const pathRemovedFile = path.join(pathToFiles, 'fileToRemove.txt');

    if (!existsSync(pathRemovedFile)) {
        throw new Error('FS operation failed');
    }

    rm(pathRemovedFile);
};

await remove();