import { Preguntas, Respuestas } from "./preguntas";


export const PREGUNTAS: Preguntas[] = [
    {id:1, pregunta: '1.¿Cómo se define TypeScript?' },
    {id:2, pregunta: '2.¿Cuál es la principal diferencia de TypeScript respecto de JavaScript?' },
    {id:3, pregunta: '3.Muestra la lista de tipos básicos de TypeScript.' },
    {id:4, pregunta: '4.¿Con qué tres elementos podemos crear un tipo personalizado en TypeScript?' },
    {id:5, pregunta: '5.¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta.' },
    {id:6, pregunta: '6.Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivo ts?' },
    {id:7, pregunta: '7.¿Para qué sirve el archivo tsconfig.json?' }
   
  ];


  export const RESPUESTAS: Respuestas[] = [
    {id:1, respuesta: 'Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases' },
    {id:2, respuesta: 'TypeScript dispone de una escritura estática, mientras que JavaScript es un lenguaje dinámico. JavaScript no admite módulos, mientras que TypeScript sí que les da soporte. TypeScript dispone de interfaz, mientras que JavaScript no. En TypeScript sí que hay que compilar el código, en JavaScript no es necesario.' },
    {id:3, respuesta: 'Booleans,  Number,  String,  Any,  Void' },
    {id:4, respuesta: 'Interface,type,class' },
    {id:5, respuesta: 'Se puede ejecutar en Node js o en cualquier navegador que admita ECMAScript 3 o versiones más recientes' },
    {id:6, respuesta: 'Configurarlo para compilar archivos .ts en archivos .js. Esto se hace normalmente utilizando una herramienta como Angular CLI o un bundler como Webpack o Parcel' },
    {id:7, respuesta: 'Es el que indica en un proyecto que se está trabajando con TypeScript' }
   
  ];
