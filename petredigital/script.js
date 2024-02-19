const socket = io('https://ellup-server.onrender.com/')
const posthere = document.getElementById('postHere')
window.addEventListener('load',()=>{
    var today=new Date(); //Today's Date
    document.getElementById('year').textContent=today.getFullYear()
    socket.emit('open', '')
})
socket.on('posts',(data)=>{
    
    var ht = ''
    data.sort().reverse()
    for (let i = 0; i < data.length; i++) {     
       ht += '<div class="col-lg-4 "><div class="card bg-transparent m-1 border border-primary colored_card" style="width:22rem;"><img src="'+data[i].image+'" class="card-img-top img-responsive"/><div class=""><h3>'+data[i].text+'</h3></div><div class="row"><div class="col"><em>'+data[i].dateTime+'</em></div></div><a class="btn btn-sm btn-primary text-white" href="'+data[i].url+'" target="_blank" onclick="countCLick(\''+data[i].id+'\')">Click Here</a></div></div>'
    }
   posthere.innerHTML=ht
})
function countCLick(id){
    const data = {
        id:id
    }
    socket.emit('count', data)
}
