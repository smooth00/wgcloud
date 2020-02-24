function searchByPara(){
	var account = $("#account").val();
	window.location.href = "/log/list?account="+escape(escape(account));
}

function view(id) {
	window.location.href = "/dash/detail?id="+id;
}
function viewChart(id) {
	window.location.href = "/dash/chart?id="+id;
}
function viewGrafana(id) {
	window.location.href = "/dash/grafana?id="+id;
}

function del(id) {
	if(confirm('你确定要删除吗？')) {
		window.location.href = "/dash/del?id=" + id;
	}
}


function viewDate(id,dates){
	window.location.href = "/dash/chart?id="+id+"&date="+dates;
}

function cancel(){
	history.back();
}
