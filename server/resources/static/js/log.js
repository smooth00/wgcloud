function searchByPara(){
	var account = $("#account").val();
	window.location.href = "/log/list?account="+escape(escape(account));
}

function view(id) {
	window.location.href = "/log/view?id="+id;
}

function cancel(){
	history.back();
}
