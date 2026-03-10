async function sendWish(){

const guestName = document.getElementById("name").value
const message = document.getElementById("message").value

if(!guestName || !message){
alert("กรุณากรอกชื่อและคำอวยพร")
return
}

const res = await fetch("http://localhost:5000/api/wishes",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
guestName,
message
})
})

const data = await res.json()

if(data.success){

document.querySelector(".card").innerHTML = `
<h1> ขอบคุณทุกคนที่มาร่วมแสดงยินดี</h1>

<p style="font-size:18px;margin-top:20px;">
ขอบคุณมากที่มาร่วมแสดงความยินดีกับพวกเรา
</p>

<p style="margin-top:10px;">
ขอให้ทุกท่านมีความสุขในงานแต่งของเรา ❤️
</p>

<button onclick="writeAgain()" class="again-btn">
พิมพ์คำอวยพรอีกครั้ง
</button>
`

}else{
document.getElementById("status").innerText=data.message
}

}


function writeAgain(){
location.reload()
}