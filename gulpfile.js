const { watch } = require('gulp');
const bs = require('browser-sync').create();

const rootDir = 'app';

function reload() {
    bs.reload();
}

function watchProject() {
    bs.init({
        server: {
            baseDir: rootDir
        }
    });

    watch([`${rootDir}/**/*`], reload);
}

exports.default = watchProject;