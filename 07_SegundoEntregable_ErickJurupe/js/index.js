/*Se declara el arreglo para alamacenar los comentarios */
const commentario = [];

/*Creamos un contenedor div */
const inputContainer = document.createElement("div");

/*Creamos un input para obtener los comentarios */
const input = document.createElement("input");
/*Agreamos la clase que tendrá el input*/
input.classList.add("input");

/*Obtenemos  el div declarado en la página index.html*/
const commentsContainer = document.querySelector("#comments-container");

/*Agregamos inputContainer dentro del div principal */
commentsContainer.appendChild(inputContainer);

/*Agregamos el imput dentro del div creado */
inputContainer.innerText="Ingrese comentario";
inputContainer.appendChild(input);

/*Agregamos el vento al input declarado */
input.addEventListener("keydown", (e) => {
  handleEnter(e, null);
});

function handleEnter(e, current) {
  /*Verificamos si presiono la tecla enter y el valor ingresado es diferente de vacío */
  if (e.key === "Enter" && e.target.value != "") {

    /*Declaramos un arreglo para alamcenar lo ingresado */
    const newComment = {
      text: e.target.value,
      likes: 0,
      responses: [],
    };

    /*Verificamos si existe un comentario */
    if (current === null) {
      /*Lo agrega al inicio el primer comentario */
      commentario.unshift(newComment);
    } else {
      /*Existe comentarios, pero los agrega al inicio */
      current.responses.unshift(newComment);
    }
    /*Limpiamos lo ingresado y el contenedor principal para que no se repita lo ingresado*/
    e.target.value = "";
    commentsContainer.innerHTML = "";

    /*Agregamos el contenedor creado al div principal de la página index.html */
    commentsContainer.appendChild(inputContainer);
    renderComments(commentario, commentsContainer);
    /*Guardamos los comentarios en el localstorage */
    localStorage.setItem("commentarios",JSON.stringify(commentario));
  }
}

function renderComments(arr, parent) {
  /*Se recorre el arreglo de comentario */
  arr.forEach((element) => {
    /*Se crea un contenedor div de comentarios y se agrega su respectiva clase */
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-container");

    /*Se crea un contenedor div para las respuestas de los comentarios y se agrega sus respectiva clase */
    const responsesContainer = document.createElement("div");
    responsesContainer.classList.add("responses-container");

    /*Se crea 2 botones para enviar y presionar me gussta a los comentarios */
    const replyButton = document.createElement("button");
    const likeButton = document.createElement("button");

    /*Se agrega nombres a casa botón declarado */
    replyButton.textContent = "Send";
    likeButton.textContent = "Like";

    /*Agregamos el evento clik al botón Send para la respuesta de cada comentario que realiza el usuario */
    replyButton.addEventListener("click", (e) => {
      const newInput = inputContainer.cloneNode(true);
      newInput.value = "";
      newInput.focus();
      newInput.addEventListener("keydown", (e) => {
        handleEnter(e, element);
      });
      commentContainer.insertBefore(newInput, responsesContainer);
    });

    /*Agregamos el evento clik al botón Like para obtener y alamcenar la cantidad de Likes que presiona el usuario */
    likeButton.addEventListener("click", (e) => {
      element.likes++;
      likeButton.textContent = `${
        element.likes > 0 ? element.likes : ""
      } Likes`;
    });

    /*Creamos un elemnto div y agregamos la cantidad de like presioanda por el usuario */
    const divContent = document.createElement("div");
    divContent.textContent = element.text;

    /*Creamos un div y agregamos cada respuesta con los botones declarados anteriormente, para que el usaurio responda o presione like*/
    const divActions = document.createElement("div");

    commentContainer.appendChild(divContent);
    commentContainer.appendChild(divActions);

    /*Agregamos al div creado los los botnos creados */
    divActions.appendChild(replyButton);
    divActions.appendChild(likeButton);

    /*Se agrega el div*/
    commentContainer.appendChild(responsesContainer);

    if (element.responses.length > 0) {
      renderComments(element.responses, responsesContainer);
    }

    parent.appendChild(commentContainer);
  });
}
