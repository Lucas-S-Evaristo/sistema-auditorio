function fazPut(url, body) {
	console.log("body=", body)
	let request = new XMLHttpRequest()
	request.open("PUT", url, true)
	request.setRequestHeader("content-type", "application/json")
	request.send(JSON.stringify(body))



	request.onload = function() {
		console.log(this.responseText)
	}



	return request.responseText
}
function update() {

	let id = document.getElementById("idUpdate").value
	let title = document.getElementById("titleUpdate").value
	let start = document.getElementById("startUpdate").value
	let end = document.getElementById("endUpdate").value
	let url = "http://localhost:8080/api/evento/" + id


	console.log(id)
	console.log(title)
	console.log(start.toLocaleString())
	console.log(end)



	body = {
		"id": id,
		"title": title,
		"start": start,
		"end": end
	}



	fazPut(url, body)
	
}