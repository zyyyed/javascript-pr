var btnp=document.getElementsByClassName("ajouter");
var btnm=document.getElementsByClassName("mm");
var sup=document.getElementsByClassName("trash");
var add=document.getElementsByClassName("like");
for (const heart of add){
    heart.addEventListener("click", function(){
        heart.classList.toggle('toggleHeart')
    })
}
for (const trash of sup){
    trash.addEventListener("click", function(){
        trash.parentElement.parentElement.parentElement.remove()
        var compt=document.getElementsByClassName("compteur");
        var quantite=document.getElementsByClassName("prix");
        var panier=document.getElementById("bbs");
        var sum=0;
        for( let i=0; i<compt.length ;i++){
            sum=sum+Number(compt[i].textContent)* Number(quantite[i].textContent);
        }
        panier.textContent = sum
    })
}
for (const btn of btnp){
    btn.addEventListener("click", function() {
        btn.nextElementSibling.textContent++;
        var compt=document.getElementsByClassName("compteur");
        var quantite=document.getElementsByClassName("prix");
        var panier=document.getElementById("bbs");
        var sum=0;
        for( let i=0; i<compt.length ;i++){
            sum=sum+Number(compt[i].textContent)* Number(quantite[i].textContent);
        }
        panier.textContent = sum

    })
}
for( const btn of btnm){
    btn.addEventListener("click", function(){
        if ( btn.previousElementSibling.textContent >0){
            btn.previousElementSibling.textContent--;
            var compt=document.getElementsByClassName("compteur");
        // console.log(compt);
        var quantite=document.getElementsByClassName("prix");
        var panier=document.getElementById("bbs");
        var sum=0;
        for( let i=0; i<compt.length ;i++){
            sum=sum+Number(compt[i].textContent)* Number(quantite[i].textContent);
        }
        panier.textContent = sum

        }

    })
}


