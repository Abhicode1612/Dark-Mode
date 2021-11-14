const songs=["dil","eminem","kgf","raone"];

songs.forEach((sounds)=>{
    const btn= document.createElement("button");
    btn.innerHTML=sounds;
    btn.classList.add("styling");
   
    
     //function show(){
        // document.getElementById("sounds").play();
    // }
    btn.addEventListener("click",()=>{
        playstop();
       document.getElementById(sounds).play();
      
    });
    document.body.appendChild(btn);
})

function playstop(){
    songs.forEach((sounds)=>{
        document.getElementById(sounds).pause()
        currenttime=0;
    });

}


