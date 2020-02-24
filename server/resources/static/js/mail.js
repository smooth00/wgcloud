
function view(id) {
    window.location.href = "/appInfo/view?id="+id;
}

function del(id) {
    window.location.href = "/appInfo/del?id="+id;
}

function cancel(){
    history.back();
}