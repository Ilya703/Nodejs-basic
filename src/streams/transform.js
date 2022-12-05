import { Transform, pipeline } from 'stream';

const transform = async () => {
    const ts = new Transform({
        transform(chunk, encoding, cb) {
            const reversedText = chunk.toString().split().reverse().join();
            cb(null, reversedText);
        }
    });

    pipeline(process.stdin, ts, process.stdout, (err) => {});
};

await transform();