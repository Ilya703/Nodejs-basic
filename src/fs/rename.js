import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFiles = path.join(__dirname, 'files');
    const pathToWrongFile = path.join(pathToFiles, 'wrongFilename.txt');
    const pathToProperFile = path.join(pathToFiles, 'properFilename.md');

    if (!existsSync(pathToWrongFile) || existsSync(pathToProperFile)) {
        throw new Error('FS operation failed');
    }

    await fs.rename(pathToWrongFile, pathToProperFile);
};

await rename();