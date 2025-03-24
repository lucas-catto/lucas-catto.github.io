
const courses = [
    {
        'title'       : 'PHP Básico',
        'description' : 'Curso em Vídeo (Online)'
    },
    {
        'title'       : 'PHP Orientado à Objetos',
        'description' : 'Curso em Vídeo (Online)'
    },
    {
        'title'       : 'PHP PDO',
        'description' : 'Udemy (Online)'
    },
    {
        'title'       : 'Linux',
        'description' : 'Curso em Vídeo (Online)'
    },
    {
        'title'       : 'Python 3 - Mundo 1, 2 e 3',
        'description' : 'Curso em Vídeo (Online)'
    },
    {
        'title'       : 'HTML & CSS',
        'description' : 'Cataline (Online)'
    },
    {
        'title'       : 'Lógica de Programação',
        'description' : 'Curso em Vídeo (Online)'
    },
    {
        'title'       : 'PHP For Beginners',
        'description' : 'Laracasts (Online)'
    },
    {
        'title'       : 'Curso de Laravel',
        'description' : 'Hora de Codar (Online)'
    },
    {
        'title'       : 'Curso de Laravel',
        'description' : 'Node Studio Treinamentos (Online)'
    },
    {
        'title'       : 'Curso de Laravel 8',
        'description' : 'Gustavo Neitzke (Online)'
    },
];

var coursesUl = document.getElementById('courses');

window.onload = () => {    

    var allCourses = `<h2>Cursos</h2>`;

    for (let i = 0; i < courses.length; i++) {

        allCourses += `
            <details>
                <summary>
                    ${ courses[i].title }
                    <svg class="courses-icon-open" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                    </svg>
                    <svg class="courses-icon-close" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                    </svg>
                </summary>
                <hr>
                <p>${ courses[i].description }</p>
            </details>
        `;
    }

    coursesUl.innerHTML += allCourses;    
};
