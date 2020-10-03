console.log('%c HI', 'color: firebrick')



document.addEventListener("DOMContentLoaded",  makeFetch)
    

  function makeFetch(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
        
      })
      
      .then(json => addImages(json))
  }
  function addImages(json){ 
      console.log(json.message)

      const html = json.message.map(breed =>{

      })
    // grab the dog image container and save it to a variable
      document.querySelector('#dog-image-container').innerHtml = "<h1>HIIII</h1>"
       // console.log(dog-image-container)
      
    //div id="dog-image-container"
    // query selector and then save to variable
    // iterate through json.message array
    // for each image create a img element. needs to be saved to a variable
    //img element has a source attribute
    // 

  }