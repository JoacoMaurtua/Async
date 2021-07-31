
const posts = [
  {title:'Post One', body:'This is a post one'},
  {title:'Post Two', body:'This is a post two'},
  {title:'Post Three', body:'This is a post Three'},
]

/****  PROMISES METHOD ****/

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

//Metodo 2: Usando promises
function createPost(post){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      posts.push(post);

      const error = false;

      if(!error){resolve()}

      else{reject('Something went wrong')};
      
    },2000);
  });
}

createPost({title:'Post Four',body:'This is a post four'})
    .then(getPosts)
    .cath(err => console.log(err));


//Trabajando con varias promesas a la vez:

/* const promise1 = Promise.resolve('Hello world');
const promise2 = 100;
const promise3 = new Promise((resolve,reject)=>{
  setTimeout(resolve,2000,'Goodbye')
});

const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json()
);

//Promises.all:

Promise.all([promise1,promise2,promise3,promise4])
.then(values=>
  console.log(values)
); */

 // Async / Await

 async function init(){
    await createPost({title: 'Post Three',
                      body: 'This is post three'});
    getPosts();
 }

 init();



// Async / Await /Fetch
async function fetchUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
  const data = await response.json();

  console.log(data);
}

fetchUsers();


//



  