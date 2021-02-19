fetch('https://jsonplaceholder.typicode.com/todos/')
.then((response) => response.json())
  .then(json => {
      console.log(json)
    json.forEach(data=>
        {
            var d=document.getElementById("todos");
            d.innerHTML=data.id+""+data.title+"<br>";
        })
    })