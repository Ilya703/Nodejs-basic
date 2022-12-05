import { mkdir, readdir, copyFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFiles = path.join(__dirname, 'files');
    const pathToCopyFiles = path.join(__dirname, 'files_copy');

    if (!existsSync(pathToFiles) || existsSync(pathToCopyFiles)) {
        throw new Error('FS operation failed');
    }

    await mkdir(pathToCopyFiles);
    const files = await readdir(pathToFiles);
    
    for (let file of files) {
        await copyFile(path.join(pathToFiles, file), path.join(pathToCopyFiles, file));
    }
};

copy();