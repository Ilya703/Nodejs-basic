const parseEnv = () => {
    const env = process.env;

    const result = [];

    for(let item in env) {
        if (item.startsWith('RSS_')) {
            result.push(`${item}=${env[item]}`);
        }
    }

    console.log(result.join('; '))
};

parseEnv();