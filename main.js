let output = document.querySelector("#output");
      let jokeBtn = document.getElementById("generate"); 
      let loader = document.querySelector(".loading");
      
      // show loader function
      function showLoader(){
        loader.style.visibility = "visible";
       
      setTimeout(()=>{
          loader.style.visibility = "hidden"
        }, 1500) 
      }
      
      
      jokeBtn.addEventListener('click', getJoke)
      
      function getJoke() {
        let url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
        
        fetch(url)
        .then(data => data.json())
        .then(res =>{
          console.log(res)
          output.textContent = res.joke;
        })
       .catch(err => {
           output.textContent = "Failed to load joke. Kindly Check Your Internet Connection";
       })
       
      showLoader();
      }
 