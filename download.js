      st=document.getElementById("st");
    stop=document.getElementById("stop");
   pause=document.getElementById("pause");
       d=document.getElementById("dwn");
download=document.getElementById("download");
       m=d.getAttribute("max");
       c=document.getElementById("count");
       s=document.getElementById("suc");
//st download
var i=0;
function start()
{
download.style.display="block";
st.disabled=true;
stop.disabled=false;
pause.disabled=false;
s.innerHTML="Downloading...."
s.style.color="black";
c.style.color="black";
//Downloading code..
v=setInterval(fun,60);
function fun()
{
d.value=i;
i++;
c.innerHTML=d.value+"%";
if(i>m){
clearInterval(v);
c.innerHTML=d.value+"% Completed"
c.style.color="green";
s.innerHTML="Success...!!!"
s.style.color="blue";
st.value="Download Again";
i=0;
st.disabled=false;
stop.disabled=true;
pause.disabled=true;
}
}
}
function stopval()
{
 st.disabled=false;
 stop.disabled=true;
 pause.disabled=true;
 clearInterval(v);
 i=0;
}

function pauseval()
{
 st.disabled=false;
 stop.disabled=false;
 pause.disabled=true;
 clearInterval(v);
 
}