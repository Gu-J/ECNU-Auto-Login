function clic()
{
    var to_click=document.querySelector("#login > table > tbody > tr:nth-child(1) > td > img")
    if(to_click)to_click.click()
    to_click=document.querySelector("#topframe\\.login\\.label")
    if(to_click)to_click.click()
}


chrome.storage.local.get(["enable"]).then((result) => {
    if(result["enable"]=="0")console.log("ECNU Auto Login is not enabled.")
    else 
    {
        chrome.storage.local.get(["skip"]).then((result) => {
        if(result["skip"]=="0")console.log("not skip this page")
        else clic()
        });
        chrome.storage.local.get(["logout"]).then((result) => {
            if(result["logout"]=="1")if(document.querySelector("#topframe\\.logout\\.label"))document.querySelector("#topframe\\.logout\\.label").click()
        });
    }
  });

  