# Node.js basics 📖

This project is a Node.js application that implements essential features of the language using its API. It can perform basic file operations (such as copy, move, delete, and rename) using the command line interface (CLI) and also utilizes the Streams API. Additionally, the application demonstrates the use of Worker Threads and Child Processes. It can obtain information about the host machine's operating system and is capable of performing hash calculations, as well as compressing and decompressing files

### 🚀 Installation

1. Clone the repository:

```cmd
git clone https://github.com/Ilya703/Nodejs-basic.git
```

2. Install the dependencies:

```cmd
npm install
```

3. Start the application:

```cmd
npm run start
```

### 🛠️ Built With:

* JavaScript (ES6)
* Node.js
* Node.js APIs: fs, os, path, stream, zlib, crypto

### ⭐ Application features: 

* File system (src/fs)
ou should implement several functions in dedicated files
- `create.js` - implement function that creates new file `fresh.txt` with content `I am fresh and young` inside of the `files` folder (if file already exists `Error` with message `FS operation failed` must be thrown)
- `copy.js` - implement function that copies folder `files` files with all its content into folder `files_copy` at the same level (if `files` folder doesn't exists or `files_copy` has already been created `Error` with message `FS operation failed` must be thrown)
- `rename.js` - implement function that renames file `wrongFilename.txt` to `properFilename` with extension `.md` (if there's no file `wrongFilename.txt` or `properFilename.md` already exists `Error` with message `FS operation failed` must be thrown)
- `delete.js` - implement function that deletes file `fileToRemove.txt` (if there's no file `fileToRemove.txt` `Error` with message `FS operation failed` must be thrown)
- `list.js` - implement function that prints all array of filenames from `files` folder into console (if `files` folder doesn't exists `Error` with message `FS operation failed` must be thrown)
- `read.js` - implement function that prints content of the `fileToRead.txt` into console (if there's no file `fileToRead.txt` `Error` with message `FS operation failed` must be thrown)

  * `/api/users` - get all users from database

  * `/api/users/{id}` -  to get user by id

* Command line interface(src/cli)
You should implement several functions in dedicated files

- `env.js` - implement function that parses environment variables with prefix `RSS_` and prints them to the console in the format `RSS_name1=value1; RSS_name2=value2`
- `args.js` - implement function that parses command line arguments (given in format `--propName value --prop2Name value2`, you don't need to validate it) and prints them to the console in the format `propName is value, prop2Name is value2`

  * `/api/create-user` - to create a new user, you need to provide username, age and hobbies in JSON format

    Example: 

    ```
    {
        "username": "Jay",
        "age": "25",
        "hobbies": "['swimming', 'dancing']"
    }
    ```

* Modules(src/modules)
You should refactor file (you can add additional imports if needed)

- `cjsToEsm.cjs` - rewrite it to it's equivalent in ECMAScript notation (and rename it to `esm.mjs`)

  * `/api/replace-user/{id}` - to replace user by id with new data, you need to provide username, age and hobbies in JSON format

    Example: 

    ```
      {
          "username": "Jane",
          "age": "27",
          "hobbies": "['singing']"
      }
     ```

* Hash (src/hash)
You should implement several functions in dedicated files

- `calcHash.js` - implement function that calculates SHA256 hash for file `fileToCalculateHashFor.txt` and logs it into console as `hex`

  * `/api/delete-user/{id}` -  to delete user by id
  
* Streams (src/streams)
You should implement several functions in dedicated files

- `read.js` - implement function that reads file `fileToRead.txt` content using Readable Stream and prints it's content into `process.stdout`
- `write.js` - implement function that writes `process.stdin` data into file `fileToWrite.txt` content using Writable Stream
- `transform.js` - implement function that reads data from `process.stdin`, reverses text using Transform Stream and then writes it into `process.stdout`
  * `/api/delete-user/{id}` -  to delete user by id
  
* Zlib (src/zip)
You should implement several functions in dedicated files

- `compress.js` - implement function that compresses file `fileToCompress.txt` to `archive.gz` using `zlib` and Streams API
- `decompress.js` - implement function that decompresses `archive.gz` back to the `fileToCompress.txt` with same content as before compression using `zlib` and Streams API

  * `/api/delete-user/{id}` -  to delete user by id
  
  
  
* Worker Threads (src/wt)
You should implement several functions in dedicated files

- `worker.js` - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
- `main.js` - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file `worker.js` and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from `10` to each `worker`. For example: on host machine with **4** cores you should create **4** workers and send **10** to first `worker`, **11** to second `worker`, **12** to third `worker`, **13** to fourth `worker`. After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
    - `status` - `'resolved'` in case of successfully received value from `worker` or `'error'` in case of error in `worker`
    - `data` - value from `worker` in case of success or `null` in case of error in worker  

The results in the array must be in the same order that the workers were created

  * `/api/delete-user/{id}` -  to delete user by id
  
  
* Child Processes (src/cp)
You should implement several functions in dedicated files

- `cp.js` - implement function `spawnChildProcess` that receives array of arguments `args` and creates child process from file `script.js`, passing these `args` to it. This function should create IPC-channel between `stdin` and `stdout` of master process and child process:
    - child process `stdin` should receive input from master process `stdin`
    - child process `stdout` should send data to master process `stdout`
  * `/api/delete-user/{id}` -  to delete user by id
  

### 🔑 Configuration (optional)

Create `.env` file inside env directory and add PORT value to it

Example:

```
PORT=3000
```

### 🚀 Installation

1. Clone the repository:

```cmd
git clone https://github.com/Ilya703/Nodejs-basic.git
```

2. Install the dependencies:

```cmd
npm install
```

3. Start the application:

```
"cli:args": "node src/cli/args.js --some-arg value1 --other 1337 --arg2 42",
    "cli:env": "npx cross-env SOME=any RSS_foo=bar RSS_bar=baz node src/cli/env.js",
    "cp": "node src/cp/cp.js",
    "fs:copy": "node src/fs/copy.js",
    "fs:create": "node src/fs/create.js",
    "fs:delete": "node src/fs/delete.js",
    "fs:list": "node src/fs/list.js",
    "fs:read": "node src/fs/read.js",
    "fs:rename": "node src/fs/rename.js",
    "hash": "node src/hash/calcHash.js",
    "modules": "node src/modules/esm.mjs",
    "streams:read": "node src/streams/read.js",
    "streams:transform": "node src/streams/transform.js",
    "streams:write": "node src/streams/write.js",
    "wt": "node src/wt/main.js",
    "zip:compress": "node src/zip/compress.js",
    "zip:decompress": "node src/zip/decompress.js"
```

### 🛠️ Built With:

* JavaScript
* Node.js
