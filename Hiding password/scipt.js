let eyeicon = document.getElementById("eyeicon");
let pass = document.getElementById("pass");

eyeicon.onclick = function() {
    if(pass.type=== "password"){
        pass.type= "text";
        eyeicon.src="https://tse2.mm.bing.net/th/id/OIP.5K1L5jnqjqmiE5NIm91xAgHaDL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
    }else{
        pass.type= "password";
        eyeicon.src= "https://www.svgrepo.com/show/390427/eye-password-see-view.svg";
    }
}