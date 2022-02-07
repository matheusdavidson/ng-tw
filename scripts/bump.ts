import * as fs from 'fs';
import * as shell from 'shelljs';
import { VERSION } from './version';
import { LIBS } from './libs';

let newVersion = '';
export type SemanticTarget = 'major' | 'minor' | 'patch';

export function bumpVersionFile(target: SemanticTarget = 'patch') {
    newVersion = bumpNumber(VERSION, target);

    const libs: string[] = [...LIBS];
    libs.map((libName) => {
        fs.writeFile(`./version.ts`, `export const VERSION = '${newVersion}';`, function (err) {
            if (err) {
                console.log(err);
                process.exit(1);
            }
            console.log('version file updated');
        });
    });
}

export function bumpLibPackageFile(target: SemanticTarget = 'patch') {
    LIBS.map((libName) => {
        fs.readFile(`../projects/${libName}/package.json`, 'utf8', function (err, contents) {
            const pkg = JSON.parse(contents);
            pkg.version = bumpNumber(pkg.version, target);
            fs.writeFile(`../projects/${libName}/package.json`, JSON.stringify(pkg, null, '\t'), function (err) {
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                console.log(`${libName} lib package updated`);
            });
        });
    });
}

export function bumpMainPackageFile(target: SemanticTarget = 'patch') {
    fs.readFile(`../package.json`, 'utf8', function (err, contents) {
        const pkg = JSON.parse(contents);
        pkg.version = bumpNumber(pkg.version, target);
        fs.writeFile(`../package.json`, JSON.stringify(pkg, null, '\t'), function (err) {
            if (err) {
                console.log(err);
                process.exit(1);
            }
            console.log(`main package updated`);
        });
    });
}

export function bumpNumber(num: string, target: SemanticTarget) {
    let major = parseFloat(num.split('.')[0]);
    let minor = parseFloat(num.split('.')[1]);
    let patch = parseFloat(num.split('.')[2]);

    switch (target) {
        case 'major':
            major += 1;
            minor = 0;
            patch = 0;
            break;
        case 'minor':
            minor += 1;
            patch = 0;
            break;
        case 'patch':
            patch += 1;
            break;
    }
    return `${major}.${minor}.${patch}`;
}

export function gitTag() {
    // re-create tag due to standard-version bug
    shell.exec(`cd ../ && git tag -a v${VERSION} -m "chore(release): ${VERSION}"`);
    shell.exec(`git commit -am "chore(release): ${VERSION}"`);
}

export function bump(target: SemanticTarget = 'patch') {
    bumpVersionFile(target);
    bumpLibPackageFile(target);
    bumpMainPackageFile(target);
}

//
// test
// console.log(bump());
