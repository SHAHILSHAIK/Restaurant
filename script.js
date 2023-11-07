sign=()=>
    {
    var pass=document.getElementById("pwd").value;
    var cpass=document.getElementById("cpwd").value;
	var mail=document.getElementById("EID").value;
	var pword=document.getElementById("pwd").value;
    localStorage.setItem("password",pword);
    localStorage.setItem("mail",mail);
    
    if(pass!=cpass)
    document.getElementById("btn").textContent=("Please Check your password");
    else if(pass=="")
   {
    document.getElementById("btn").textContent=("Please fill the password");
   }
   else
   {
    document.getElementById("btn").textContent=("Password is saved");
    window.open("Index Page Res.html","_blank");
   }
   }
   check=()=>{
    var m=localStorage.getItem("mail");
    var p=localStorage.getItem("password");
    var m2=document.getElementById("UN").value;
    var p2=document.getElementById("PW").value;
    if(m==m2 && p==p2)
    {
        alert("welcome");
        return true;
    }
    else {
        alert("wrong password");
        return false;
    }

   }
