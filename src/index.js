console.log('%c HI', 'color: firebrick')



document.addEventListener("DOMContentLoaded",  makeFetch)
    

  function makeFetch(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
        
      })
      
      .then(json => addImages(json.message))
  }
  function addImages(images){ 
      console.log(images)

     let div = document.querySelector('#dog-image-container') //select container/parent from page
      console.log("div", div)
      const html = images.forEach(image =>{
          console.log("image", image)

          let img = document.createElement("img") // create child element
          
          img.src = image //updated child element
          console.log(img)

          div.appendChild(img) //append child to parent

      })
    // grab the dog image container and save it to a variable
      
       // console.log(dog-image-container)
      
    //div id="dog-image-container"
    // query selector and then save to variable
    // iterate through json.message array
    // for each image create a img element. needs to be saved to a variable
    //img element has a source attribute
    // 

  }

  document.addEventListener("DOMContentLoaded",  nextFetch)

  function nextFetch(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response){
      return response.json();
      
  }) .then(json => {
    console.log( "message", json.message)
    })
    
  }
  
  let ul = document.querySelector('#dog-breeds')
  console.log("ul", ul)

  function addMessages(msg){
    console.log(msg)

    const note = msg.forEach(msg =>{
      console.log("msg",msg)
    })

    let ul = document.createElement("li")

    console.log(json.message)
  }