function onOpen() {
 var ss = SpreadsheetApp.getActiveSpreadsheet(),
 menuItems = [{name: "Show Form",
 functionName: "showForm"}];
 ss.addMenu("Data Entry", menuItems);
}


