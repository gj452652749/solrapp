function getDatasource() {
	$('#addDataSourceModal').modal('show')
}
function openAddDatasourceModal() {
	$('#addDataSourceModal').modal('show');	
}
//新增数据源
function addDatasource() {
	var dbConn=$('#dsConn').serializeJSON();
	console.log(dbConn);
	var newDsName=$('#newDsName').val();
	$("a.list-group-item.active").removeClass("active");
	console.log("newsDsName"+newDsName);
	$("#dataSources").prepend('<a href="#" class="list-group-item active">'+newDsName+'</a>');
	$("#addDataSourceModal").modal('hide');
	$("#dsName").val(newDsName);
}
function chooseDatasource() {
	$('#addDataSourceModal').modal('show')
}