document.getElementById('convert').addEventListener('click', () =>{
            
    let binary= document.getElementById('binary').value;
   console.log(binary ,parseInt(binary, 2))
   document.getElementById('decimal').innerText = parseInt(binary, 2);
   return 0;
})