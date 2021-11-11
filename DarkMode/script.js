const moon=document.getElementById("moon1");
moon.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    moon.classList.toggle("active");
})