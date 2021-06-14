let nameInput= document.getElementById('name');
let urlInput= document.getElementById('url');
let btn= document.getElementById('btn');
let tbody= document.getElementById('tbody');

let websites=[];

if(localStorage.getItem('websitesList')!==null){
    websites=JSON.parse(localStorage.getItem('websitesList'));
    showWebsite();
}
btn.onclick=function(){
   addWebsite()
   showWebsite()

}

function addWebsite(){
    let website={
        websiteName : nameInput.value,
        websiteUrl : urlInput.value,
    }

    websites.push(website);
    localStorage.setItem("websitesList", JSON.stringify(websites));
    
}

function showWebsite(){
    let data="";
   websites.forEach((website, index)=>{
       data+= `
             <tr>
                <td>${index}</td>
                <td>${website.websiteName}</td>
                <td>${website.websiteUrl}</td>
                <td><a href="#" onclick=" deleteWebsite(${index})" class="btn btn-danger">delete</a></td>
             </tr>
       `
       console.log(data);
   });

   tbody.innerHTML = data;
    
}

function deleteWebsite(id){
    websites.splice(id,1);
    localStorage.setItem("websitesList", JSON.stringify(websites));
    showWebsite();

}