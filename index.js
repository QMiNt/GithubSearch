var form = document.getElementById("f1");
form.addEventListener('submit',function(e)
{
    e.preventDefault();
    document.getElementById("err").style.display="none";
    document.getElementById("res").style.display="none";
    serch=document.getElementById("username").value;
    fetch("https://api.github.com/users/" + serch)
    .then((result)=>{
        if(result.ok)
        {
            document.getElementById("res").style.display="block";
            return result.json();
        }
        else
        {
            document.getElementById("err").style.display="inline";
            document.getElementById("err").innerHTML="User Not Found";
        }
    })
    .then((data) => {
        console.log(data);
        document.getElementById("name").innerHTML=data.name;       
        document.getElementById("email").innerHTML=data.email;       
        document.getElementById("bio").innerHTML=data.bio;       
        document.getElementById("com").innerHTML=data.company;       
        document.getElementById("link").href=data.html_url;       
        document.getElementById("link").innerHTML=data.login;       
    })
})