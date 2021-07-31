
const posts = [
  {title:'Post One', body:'This is a post one'},
  {title:'Post Two', body:'This is a post two'},
  {title:'Post Three', body:'This is a post Three'},
]

/****  CALLBACKS METHOD ****/

function getPosts(){
  setTimeout(()=>{
    let output = '';
    posts.forEach((post,index)=>{
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    console.log(posts.title)
  }, 1000);
}

//Metodo 1: Usando callbacks
function createPost(post,callback){
  setTimeout(()=>{
    posts.push(post);
    callback(); //LLamo a getPosts
  },2000);
}

getPosts();

createPost({title:'Post Four',body:'This is a post four'},getPosts);

/* SIN EL CALLBACK => Esta forma sincronica tiene un problema, nunca mostrara el nuevo post creado en createPost
   debido a que esta funcion tomo mas tiempo en ejecutarse que getPost, y el flujo del codigo
   no la espero y paso a la siguiente instruccion(getPost)*/


  