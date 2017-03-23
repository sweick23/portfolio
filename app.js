function openNav(){
    document.getElementById('mySidenav').style.width="250px";
    document.getElementById('main').style.marginLeft="250px";
    document.body.style.background="rgba(0,0,0,0.4)";
}

function closeNav(){
    document.getElementById('mySidenav').style.width="0";
    document.getElementById('main').style.marginLeft="0";
    document.body.style.background = "#DDD";
}