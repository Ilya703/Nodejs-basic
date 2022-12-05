const parseArgs = () => {
    const argv = process.argv;
    let flag = false;
    const answer = [];

    for(let i = 0; i < argv.length; i++) {
        if(flag) {
            answer.push(`${argv[i-1].slice(2)} is ${argv[i]}`);
            flag = false;
        }

        if(argv[i].startsWith('--')) {
            flag = true;
        }
    }

    console.log(answer.join(', '));
};

parseArgs();