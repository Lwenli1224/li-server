const yargs = require('yargs');
const Server = require('../src/app');
// -d --root服务根目录 -o --host 监听主机 -p --port 服务端口
let argv = yargs.option('d', {
    alias: 'root',
    demand: false,
    default: process.cwd(),
    type: 'string',
    description: '静态文件根目录'
}).option('o', {
    alias: 'host',
    demand: false,
    default: '0.0.0.0',
    type: 'string',
    description: '监听主机名称'
}).option('p', {
    alias: 'port',
    demand: false,
    default: 8080,
    type: 'number',
    description: '监听端口号'
})
.usage('Usage: [options]')
.example('li-server -d / -o localhost -p 9090', '启动本地server')
.help('h')
.argv;

let server = new Server(argv);
server.start();