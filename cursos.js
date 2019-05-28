const courses = [
    {
        id: 1,
        name: "Curso de programación",
        duration: 40,
        price: 0
    },
    {
        id: 2,
        name: "Curso de NodeJS",
        duration: 40,
        price: 80000
    },
    {
        id: 3,
        name: "Curso de FrontEnd",
        duration: 100,
        price: 120000
    },
    {
        id: 4,
        name: "Curso de Bases de Datos",
        duration: 20,
        price: 150000
    },
];

function printCourses() {
    let time = 1;
    console.log('Los cursos ofrecidos son:');
    courses.forEach( course => {
        setTimeout(function print(){
            const printText = `El curso ${course.name} tiene una duración de ${course.duration} horas, cuesta ${course.price} y su id es el ${course.id}`;
            console.log(printText);
        },time*2000);
        time++;
    });
}

module.exports = {
    courses,
    printCourses
};