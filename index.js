const express = require('express')
const app = express()

let response = '';

const options = {
    identificador: {
        alias: 'i',
        demand: true
    },
    nombre: {
        alias: 'n',
        demand: true
    },
    cedula: {
        alias: 'c',
        demand: true
    },
};
const fs = require('fs') ;
const courses = require('./cursos');
const argv = require('yargs')
    .command('inscribir','Inscribirse a un curso', options)
    .argv
    ;

function init() {    
    
    if(argv._[0] === 'inscribir') {
        subscribeCourse();
    }else {
        courses.printCourses();
    }
}

function subscribeCourse() {
    const found = findCourseByID(argv.i);
    if(found) {
        storeInfo(found);
    }else {
        console.log(`El id ${argv.i} no se encuentra en nuestro cursos, recuerde que`);
        response = `El id ${argv.i} no se encuentra en nuestro cursos, recuerde que`;
        courses.printCourses();
    }
}

function findCourseByID(id) {
    return courses.courses.find(course => {
        if (course.id === id ) {
            return course
        }
    });
}

function storeInfo(found) {
    const textToStore = `El usuario ${argv.n} con cédula ${argv.c} quedó inscrito en el curso ${found.id} - ${found.name}`
    fs.writeFile('subscribers.log',textToStore,(err) => {
        if(err) throw err;
        console.log('Usuario quedó inscrito');
    });

    response = textToStore;
}

app.get('/', function (req, res) {
    res.send(response)
  })
   
  app.listen(3000)

init();

