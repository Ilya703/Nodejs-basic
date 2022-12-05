import path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFile = path.join(__dirname, 'files', 'script.js');
    
    const child = fork(pathToFile, args);

    process.stdin.on('data', data => {
        child.stdin.send(data);
    });
    
    child.on('data', data => {
        process.stdout.write(data);
    });
};

spawnChildProcess();