var today = new Date();
document.getElementById("p-navigation").children[1].children[0].innerHTML += '<li><a href="/wiki/Wikipedia:頁面存廢討論">AFD</a> <a href="/wiki/Wikipedia:頁面存廢討論/積壓投票">積壓</a> <a href="/wiki/Wikipedia:頁面存廢討論/記錄">本週</a> <a href="/wiki/Wikipedia:頁面存廢討論/記錄/'+today.getFullYear()+'/'+(today.getMonth()+1<10?'0':'')+(today.getMonth()+1)+'/'+(today.getDate()<10?'0':'')+today.getDate()+'">今天</a></li><li><a href="/wiki/Wikipedia:当前的破坏">VIP</a> <a href="/wiki/Wikipedia:请求保护页面">PT</a> <a href="/wiki/Wikipedia:用戶查核請求">RFCU</a></li>';
