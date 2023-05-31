
(function() {
    // 全局变量
    const G = {};
    G.switch1 = document.getElementById('switch1');
    G.switch2 = document.getElementById('switch2');
    G.switch3 = document.getElementById('switch3');
    G.switch4 = document.getElementById('switch4');
    G.switch5 = document.getElementById('switch5');
    G.section1 = document.getElementById('section1');
    G.section2 = document.getElementById('section2');
    G.section3 = document.getElementById('section3');
    G.section4 = document.getElementById('section4');
    G.section5 = document.getElementById('section5');
    G.section6 = document.getElementById('section6');
    G.section7 = document.getElementById('section7');
    G.section8 = document.getElementById('section8');
    G.returnBtn = document.getElementsByClassName('return_Btn');
    G.sbcwBtn = document.getElementById('sbcw_btn');
    G.sbcwBtn2 = document.getElementById('sbcw_btn2');
    G.yyBtn = document.getElementById('yy_btn');
    G.sectionBtn = document.getElementById('more_btn');

    function switch1_false()
    {
        G.switch1.checked=false
        document.getElementById('more_2').style.display = 'none';
        document.getElementById('more_3').style.display = 'none';
    }
    function switch1_true()
    {
        G.switch1.checked=true
        document.getElementById('more_2').style = '';
        document.getElementById('more_3').style = '';
    }
    function switch2_false()
    {
        G.switch2.checked=false
        document.getElementById('switch2_body').style.display = 'none';
    }
    function switch2_true()
    {
        G.switch2.checked=true
        document.getElementById('switch2_body').style = '';
        var user=document.getElementById('inputuser')
        user.addEventListener("focusout",function()
        {
            chrome.storage.local.set({"user": user.value})
        })
        chrome.storage.local.get(["user"]).then((result) => {
            if(result["user"])user.value=result['user']
          });

        var pass=document.getElementById('inputpass')
          pass.addEventListener("focusout",function()
          {
              chrome.storage.local.set({"pass": window.btoa(pass.value)})
          })
        chrome.storage.local.get(["pass"]).then((result) => {
              if(result["pass"])pass.value=result['pass']
            });
    }
    function switch3_false()
    {
        G.switch3.checked=false
    }
    function switch3_true()
    {
        G.switch3.checked=true
    }

    function datashow_yy()
    {
        chrome.storage.local.get(["success_num"]).then((result) => {
            if(result["success_num"])document.getElementById("succ").textContent=result["success_num"]
            else document.getElementById("succ").textContent='0'
          });
        chrome.storage.local.get(["total_num"]).then((result) => {
            if(result["total_num"])document.getElementById("total").textContent=result["total_num"]
            else document.getElementById("total").textContent='0'
          });
        chrome.storage.local.get(["accu_num"]).then((result) => {
            if(result["accu_num"])document.getElementById("accu").textContent=result["accu_num"]
            else document.getElementById("accu").textContent='0'
          });
        chrome.storage.local.get(["fail_num"]).then((result) => {
            if(result["fail_num"])document.getElementById("fail").textContent=result["fail_num"]
            else document.getElementById("fail").textContent='0'
          });
    }
    function datashow_sbcw()
    {
        
        chrome.storage.local.get(["last_img"]).then((result) => {
            if(result["last_img"])document.getElementById("last_img").src=result["last_img"]
            else document.getElementById("last_img").src='img/empty.png'
          });
        chrome.storage.local.get(["last_res"]).then((result) => {
            if(result["last_res"])document.getElementById("last_res").textContent=" "+result["last_res"]
            else document.getElementById("last_res").textContent=null
          });  
    }
    function init_section6()
    {
        G.switch4.addEventListener('change', (event)=>{
            if(event.target.checked === false){
                chrome.storage.local.set({["logout"]: "0"})
            } else {
                chrome.storage.local.set({["logout"]: "1"})
            }
        },false)
        chrome.storage.local.get(["logout"]).then((result) => {
            if(result["logout"]=="1")G.switch4.checked=true
            else G.switch4.checked=false
          });
        G.switch5.addEventListener('change', (event)=>{
            if(event.target.checked === false){
                chrome.storage.local.set({["force_fail"]: "0"})
            } else {
                chrome.storage.local.set({["force_fail"]: "1"})
            }
        },false)
        chrome.storage.local.get(["force_fail"]).then((result) => {
            if(result["force_fail"]=="1")G.switch5.checked=true
            else G.switch5.checked=false
          });
        
    }

    const fr = new FileReader()
    document.getElementById("uploadBoxImg").addEventListener('click', function (event){
        document.getElementById("uploadBoxInput").click();
        document.getElementById("uploadBoxInput").onchange = function (event){
            console.log('event.target.files[0]', event.target.files)
            fr.readAsDataURL(event.target.files[0])
        }
    })
    fr.onload = function() {
        debugger
        document.getElementById("uploadBoxImg").src = fr.result
    }

    function init(){
        //通信
        // chrome.runtime.sendMessage({autoBtnStatus: G.switch1.checked}, function (response){
        //     console.log(response)
        // })

        // chrome.cookies.set({color: 'blue'}, function() {
        //     console.log('保存成功！');
        // });

        switchShowTabs('section1');

        chrome.storage.local.get(["enable"]).then((result) => {
            if(result["enable"]=="0")switch1_false()
            else switch1_true()
          });
        chrome.storage.local.get(["userpass"]).then((result) => {
            if(result["userpass"]=="1")switch2_true()
            else switch2_false()
          });
        chrome.storage.local.get(["skip"]).then((result) => {
            if(result["skip"]=="0")switch3_false()
            else switch3_true()
          });



          

        document.getElementById("daxia").addEventListener('click',function(){
            chrome.tabs.create({ url: "https://elearning.ecnu.edu.cn/" });
        })
        document.getElementById("gonggong").addEventListener('click',function(){
            chrome.tabs.create({ url: "https://service.ecnu.edu.cn/_layouts/15/ecnu/index.aspx" });
        })
        document.getElementById("EAL").addEventListener('click',function(){
            chrome.tabs.create({ url: "https://addons.mozilla.org/zh-CN/firefox/addon/ecnu-auto-login/" });
        })
        document.getElementById("ECNU").addEventListener('click',function(){
            chrome.tabs.create({ url: "https://www.ecnu.edu.cn/" });
        })


        G.switch1.addEventListener('change', (event)=>{
            if(event.target.checked === false){
                switch1_false()
                chrome.storage.local.set({["enable"]: "0"})
            } else {
                switch1_true()
                chrome.storage.local.set({["enable"]: "1"})
            }
        },false)
        G.switch2.addEventListener('change', (event)=>{
            if(event.target.checked === false){
                switch2_false()
                chrome.storage.local.set({["userpass"]: "0"})
            } else {
                switch2_true()
                chrome.storage.local.set({["userpass"]: "1"})
            }
        },false)
        G.switch3.addEventListener('change', (event)=>{
            if(event.target.checked === false){
                switch3_false()
                chrome.storage.local.set({["skip"]: "0"})
            } else {
                switch3_true()
                chrome.storage.local.set({["skip"]: "1"})
            }
        },false)



        for (let i = 0; i < G.returnBtn.length; i++) {
            G.returnBtn[i].addEventListener('click', (event)=>{
                switchShowTabs('section1');
            },false)
        }

        G.sbcwBtn.addEventListener('click', (event)=>{
            switchShowTabs('section2');
            datashow_sbcw()
            document.getElementById('save').addEventListener('click', (event)=>{
                var img=document.getElementById('last_img').src
                var res=document.getElementById('last_res').textContent
                var correct=document.getElementById('correct').value

                var link=document.createElement('a')
                link.href=img
                link.download=res+'@'+correct+'.png'
                link.target='_blank'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                switchShowTabs('section5')
            },false);
        },false)

        G.sbcwBtn2.addEventListener('click', (event)=>{
            switchShowTabs('section2');
            datashow_sbcw()
            document.getElementById('save').addEventListener('click', (event)=>{
                var img=document.getElementById('last_img').src
                var res=document.getElementById('last_res').textContent
                var correct=document.getElementById('correct').value

                var link=document.createElement('a')
                link.href=img
                link.download=res+'@'+correct+'.png'
                link.target='_blank'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            },false);
        },false)
        
        G.yyBtn.addEventListener('click', (event)=>{
            switchShowTabs('section3');
            datashow_yy();
            document.getElementById('clr').addEventListener('click', (event)=>{
                chrome.storage.local.clear()
                init()
            },false);
            document.getElementById('chat').addEventListener('click', (event)=>{
                switchShowTabs('section8');
            },false);
        },false)

        G.sectionBtn.addEventListener('click', (event)=>{
            //更多
            switchShowTabs('section4');
            document.getElementById("mail").addEventListener('click',function(){
                chrome.tabs.create({ url: "https://mail.stu.ecnu.edu.cn/" });
            })
            document.getElementById("soft").addEventListener('click',function(){
                chrome.tabs.create({ url: "http://download.ecnu.edu.cn/index.html" });
            })
            document.getElementById("lib").addEventListener('click',function(){
                chrome.tabs.create({ url: "https://lib.ecnu.edu.cn/" });
            })
            document.getElementById("netAut").addEventListener('click',function(){
                chrome.tabs.create({ url: "http://login.ecnu.edu.cn/" });
            })
            document.getElementById("xg").addEventListener('click',function(){
                chrome.tabs.create({ url: "https://xgxt.ecnu.edu.cn/#/home" });
            })
            document.getElementById("PE").addEventListener('click',function(){
                chrome.tabs.create({ url: "https://peclub.ecnu.edu.cn/" });
            })
            document.getElementById('test').addEventListener('click', (event)=>{
                init_section6();
                switchShowTabs('section6');
                document.getElementById('uploadHandleBtn').addEventListener('click', (event)=>{
                    switchShowTabs('section7');
                },false);
            },false);
        },false)
    }


    function switchShowTabs(obj){
        if(typeof obj !== 'string') return;
        G.section1.style.display = 'none';
        G.section2.style.display = 'none';
        G.section3.style.display = 'none';
        G.section4.style.display = 'none';
        G.section5.style.display = 'none';
        G.section6.style.display = 'none';
        G.section7.style.display = 'none';
        G.section8.style.display = 'none';
        document.getElementById(obj).style.display = 'block';
    }


    init();
}).call(this);
