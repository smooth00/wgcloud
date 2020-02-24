function searchByPara(){
	var account = $("#account").val();
	window.location.href = "/log/list?account="+escape(escape(account));
}

function add() {
	window.location.href = "/appInfo/edit";
}


function view(id) {
	window.location.href = "/appInfo/view?id="+id;
}

function edit(id){
	window.location.href = "/appInfo/edit?id="+id;
}

function del(id) {
	if(confirm('你确定要删除吗？')) {
		window.location.href = "/appInfo/del?id=" + id;
	}
}
function viewDate(id,dates){
	window.location.href = "/appInfo/view?id="+id+"&date="+dates;
}

function cancel(){
	history.back();
}
