
document.getElementById('email').addEventListener('submit',function(){
		var emailTo, emailSub, emailBody;

		if(document.getElementById('topic').value === '-- Elige un tema --'){
			window.alert('Por favor selecciona un tema');
			return false;
		}

		emailTo = document.getElementById('to').value;
		emailSub = document.getElementById('topic').value + ': ' + document.getElementById('subject').value;
		emailBody	= document.getElementById('body').value;

		window.open('mailto:'+emailTo+'?subject='+emailSub+'&body='+emailBody);
		return false;
});
