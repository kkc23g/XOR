onmessage = function(e) {
	console.log('Message has been received and it is been processed'); 
	var workerResult = e.data; 
	console.log('returning message back to main script'); 
	postMessage(workerResult);
 }
