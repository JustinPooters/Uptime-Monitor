let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

let nowTime = hours + ":" + minutes + ":" + seconds

function log(input) {
    console.log(`[${nowTime}] [LOG] ${input}`);
}

function error(input) {
    console.log(`[${nowTime}] [ERROR] ${input}`);
}

function warn(input) {
    console.log(`[${nowTime}] [WARN] ${input}`);
}

function info(input) {
    console.log(`[${nowTime}] [INFO] ${input}`);
}

function debug(input) {
    console.log(`[${nowTime}] [DEBUG] ${input}`);
}

function fatal(input) {
    console.log(`[${nowTime}] [FATAL] ${input}`);
}

function useless(input) {
    console.log(`[${nowTime}] [USELESS] ${input}`);
}

module.exports = {
    log,
    error,
    warn,
    info,
    debug,
    fatal,
    useless
};