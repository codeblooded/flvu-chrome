var titleElements, titleElement, abandonLabel, textLabel;

function identifiedMarkableAbandonware() {
	var abandonedBadge = document.getElementById('user-content-abandoned');

	if (!abandonedBadge) {
		return checkCommitLog();
	}
	
	return true;
}

function checkCommitLog() {
	
}

if (identifiedMarkableAbandonware()) {
	titleElements = document.getElementsByClassName('entry-title');

	if (titleElements && titleElements[0]) {
		titleElement = titleElements[0];
		abandonLabel = document.createElement('a');
		textLabel = document.createElement('span');
		abandonLabel.className = "btn-sm";
		abandonLabel.href = "#";
		abandonLabel.style.position = "relative";
		abandonLabel.style.display = "inline-block";
		abandonLabel.style.backgroundColor = "#fc2929";
		abandonLabel.style.color = "white";
		abandonLabel.style.fontSize = "13px";
		abandonLabel.style.fontWeight = "bold";
		abandonLabel.style.lineHeight = "20px";
		abandonLabel.style.verticalAlign = "middle";
		abandonLabel.style.borderRadius = "3px";
		textLabel.className = "label-name";
		textLabel.innerHTML = "abandoned";
		abandonLabel.appendChild(textLabel);
		titleElement.insertBefore(abandonLabel, titleElement.lastChild)
	}
}
