function json(){
    fetch('http://api.firststeps.rehab/getallmessages.php?api_key=Lokeshm@7982512400',{mode: 'no-cors'})
.then(function(resp){
    return resp.json;
}).then(function(data){
    document.getElementById('pid').innerHTML=data[0].name;
})
}