function json(){
    fetch('https://api.github.com/users?q=lokesh')
.then(function(resp){
return resp.json();
}).then(function(data)
{
    console.log(data);
    document.getElementById('app').innerHTML=`
    <h1 align="center"> Users (${data.length} results)</h1>
    ${data.map(function(data){
        return `
        <div class="card mx-auto"style="width: 18rem;">
        <img class="card-img-top " src="${data.avatar_url}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title text-center">${data.login}</h5>
        <p class="card-text text-center">Link url : <a href="${data.html_url}" target="_blank">${data.html_url}</a> </p>
        </div>
        </div>
        `;
    }).join()}
    `;
})

}


// "login": "mojombo",
//     "id": 1,
//     "node_id": "MDQ6VXNlcjE=",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/mojombo",
//     "html_url": "https://github.com/mojombo",
//     "followers_url": "https://api.github.com/users/mojombo/followers",
//     "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
//     "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
//     "organizations_url": "https://api.github.com/users/mojombo/orgs",
//     "repos_url": "https://api.github.com/users/mojombo/repos",
//     "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/mojombo/received_events",
//     "type": "User",
//     "site_admin": false