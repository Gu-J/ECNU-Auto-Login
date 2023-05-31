async function userpass()
{
        await chrome.storage.local.get(["user"]).then((result) => {
            if(result["user"])document.querySelector("#id_login > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=result["user"]
        });
        await chrome.storage.local.get(["pass"]).then((result) => {
            if(result["pass"])document.querySelector("#id_login > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=window.atob(result["pass"])
        });
}

chrome.storage.local.get(["userpass"]).then((result) => {
        if(result["userpass"])userpass()
      });
    


