document
	.getElementById("your_details")
	.addEventListener("change", generateSignature);

function generateSignature() {
	let name = document.getElementsByName("name")[0].value;
	let position = document.getElementsByName("position")[0].value;
	let company = document.getElementsByName("company")[0].value;
	let email = document.getElementsByName("email")[0].value;
	let phone = document.getElementsByName("phone")[0].value;
	let phoneExtension = document.getElementsByName("phoneExtension")[0].value;
	let location;
	let logo;
	let extra = "";
	//TODO This could/should feed from a JSON file
	switch (company) {
		case "Racetrack Pitstop":
			location = "675 Paisley Road West, Glasgow, G51 1RP";
			logo =
				"https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/email-logos-03-e1569924636507.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 319 8451";
			}
			url = "https://racetrackpitstop.co.uk";
			if (document.getElementsByName("email")[0].value < 1) {
				email = "info@racetrackpitstop.co.uk";
			}
			color = "#BF1A1A";
			extra = `<tr>
			<td style="vertical-align:top; float: left;"><a href="https://www.forecourttraderawards.co.uk/2019-winners/" target="_blank"><img alt="Best Forecourt Innovation" src="https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/FCTAwards19_Logo_Winner_HighRes_Best-Forecourt-Innovation-e1569924818410.png" height="100%" style="max-height:120px;padding:10px;"/></a></td>
			<td style="vertical-align:top; float: left;"><a href="https://www.forecourttraderawards.co.uk/2019-winners/" target="_blank"><img alt="Scotland up to 4MLPA" src="https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/FCTAwards19_Logo_Winner_HighRes_Scotland-up-to-4MLPA-e1569924806229.png" height="100%" style="max-height:120px;padding:10px;"/></a></td>
			<td style="vertical-align:top; float: left;"><a href="https://www.forecourttraderawards.co.uk/2019-winners/" target="_blank"><img alt="Best Foot-To-Go Outlet" src="https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/FCTAwards19_Logo_Winner_HighRes_Best-Food-to-Go-Outlet-e1569924772756.png" height="100%" style="max-height:120px;padding:10px;"/></a></td>
			</tr>`;
			break;
		case "Pitstop Deals":
			location = "675 Paisley Road West, Glasgow, G51 1RP";
			logo =
				"https://pitstopdeals.co.uk/wp-content/uploads/2019/10/email-logos-07-e1569925437281.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 319 8451";
			}
			url = "pitstopdeals.co.uk";
			if (document.getElementsByName("email")[0].value < 1) {
				email = "info@pitstopdeals.co.uk";
			}
			color = "#BF1A1A";
			break;
		case "GHSL":
			location = "Ground Floor, 198 Nithsdale Road, Glasgow, G41 5EU";
			logo =
				"https://ghsl.uk/wp-content/uploads/2019/10/email-logos-06-e1569925531138.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 319 8451";
			}
			url = "https://ghsl.uk";
			if (document.getElementsByName("email")[0].value < 1) {
				email = "info@ghsl.uk";
			}
			color = "#BF1A1A";
			extra = `<tr>
			<td style="vertical-align:top; float: left;"><a href="https://racetrackpitstop.co.uk" target="_blank"><img alt="Racetrack Logo" src="https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/email-logos-03-e1569924636507.png" height="100%" style="max-height:80px;padding:10px;"/></a></td>
			<td style="vertical-align:top; float: left;"><a href="https://tubbees.co.uk" target="_blank"><img alt="Tubbees Logo" src="https://tubbees.co.uk/wp-content/uploads/2019/10/email-logos-05-e1569925958420.png" height="100%" style="max-height:80px;padding:10px;"/></a></td>
			<td style="vertical-align:top; float: left;"><a href="https://vaped4u.com" target="_blank"><img alt="Vaped4U Logo" src="https://vaped4u.com/wp-content/uploads/2019/10/email-logos-02-e1569925665360.png" height="100%" style="max-height:80px;padding:10px;"/></a></td>
			<td style="vertical-align:top; float: left;"><a href="https://octopusautocare.co.uk/" target="_blank"><img alt="Octoput Autocare Logo" src="https://octopusautocare.co.uk/wp-content/uploads/2019/10/email-logos-04-e1569925789212.png" height="100%" style="max-height:80px;padding:10px;"/></a></td>
			</tr> 
			<tr>
			<td style="vertical-align:top; float: left;"><a href="https://www.forecourttraderawards.co.uk/2019-winners/" target="_blank"><img alt="Best Forecourt Innovation" src="https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/FCTAwards19_Logo_Winner_HighRes_Best-Forecourt-Innovation-e1569924818410.png" height="100%" style="max-height:120px;padding:10px;"/></a></td>
			<td style="vertical-align:top; float: left;"><a href="https://www.forecourttraderawards.co.uk/2019-winners/" target="_blank"><img alt="Scotland up to 4MLPA" src="https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/FCTAwards19_Logo_Winner_HighRes_Scotland-up-to-4MLPA-e1569924806229.png" height="100%" style="max-height:120px;padding:10px;"/></a></td>
			<td style="vertical-align:top; float: left;"><a href="https://www.forecourttraderawards.co.uk/2019-winners/" target="_blank"><img alt="Best Foot-To-Go Outlet" src="https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/FCTAwards19_Logo_Winner_HighRes_Best-Food-to-Go-Outlet-e1569924772756.png" height="100%" style="max-height:120px;padding:10px;"/></a></td>
			</tr>
			`;
			break;
		case "Vaped4U":
			location = "675 Paisley Road West, Glasgow, G51 1RP";
			logo =
				"https://vaped4u.com/wp-content/uploads/2019/10/email-logos-02-e1569925665360.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 530 3111";
			}
			url = "https://vaped4u.com";
			if (document.getElementsByName("email")[0].value < 1) {
				email = "info@vaped4u.com";
			}
			color = "#69c9cb";
			break;
		case "Octopus Autocare":
			location = "675 Paisley Road West, Glasgow, G51 1RP";
			logo =
				"https://octopusautocare.co.uk/wp-content/uploads/2019/10/email-logos-04-e1569925789212.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 319 8451";
			}
			url = "https://octopusautocare.co.uk";
			if (document.getElementsByName("email")[0].value < 1) {
				email = "info@octopusautocare.co.uk";
			}
			color = "#EC6813";
			break;
		case "RT IT Services":
			location = "675 Paisley Road West, Glasgow, G51 1RP";
			logo =
				"https://racetrackpitstop.co.uk/wp-content/uploads/2019/04/rtlogo-02-e1569925212420.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 319 7174";
			}
			url = "https://rt-itservices.co.uk";
			if (document.getElementsByName("email")[0].value < 1) {
				email = "info@rt-itservices.co.uk";
			}
			color = "#BF1A1A";
			break;
		case "RT Maintenance Services":
			location = "Ground Floor, 198 Nithsdale Road, Glasgow, G41 5EU";
			logo =
				"https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/rtm-services-logo-01.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 530 3106";
			}
			url = "https://rtmsuk.com";
			if (document.getElementsByName("email")[0].value < 1) {
				email = "info@rtmsuk.com";
			}
			color = "#BF1A1A";
			break;
		case "Racetrack WOW":
			location = "675 Paisley Road West, Glasgow, G51 1RP";
			logo =
				"https://racetrackwow.co.uk/wp-content/uploads/2019/10/email-logos-08-e1569925893766.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 319 8451";
			}
			url = "https://racetrackwow.co.uk";
			if (document.getElementsByName("email")[0].value < 1) {
				email = "info@racetrackwow.co.uk";
			}
			color = "#BF1A1A";
			break;
		case "Tubbees":
			location = "675 Paisley Road West, Glasgow, G51 1RP";
			logo =
				"https://tubbees.co.uk/wp-content/uploads/2019/10/email-logos-05-e1569925958420.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 319 7375";
			}
			url = "https://tubbees.co.uk";
			if (document.getElementsByName("email")[0].value < 1) {
				email = "info@tubbees.co.uk";
			}
			color = "#F2A2C4";
			break;
		case "RaceTrack Autoport":
			location = "675 Paisley Road West, Glasgow, G51 1RP";
			logo =
				"https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/email-logos-03-e1569924636507.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 258 4646";
			}
			if (document.getElementsByName("email")[0].value < 1) {
				email = "autoport@racetrackpitstop.co.uk";
			}
			url = "https://racetrackpitstop.co.uk";
			color = "#BF1A1A";
			extra = `<tr>
			<td style="vertical-align:top; float: left;"><a href="https://www.forecourttraderawards.co.uk/2019-winners/" target="_blank"><img alt="Best Forecourt Innovation" src="https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/FCTAwards19_Logo_Winner_HighRes_Best-Forecourt-Innovation-e1569924818410.png" height="100%" style="max-height:120px;padding:10px;"/></a></td>
			<td style="vertical-align:top; float: left;"><a href="https://www.forecourttraderawards.co.uk/2019-winners/" target="_blank"><img alt="Scotland up to 4MLPA" src="https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/FCTAwards19_Logo_Winner_HighRes_Scotland-up-to-4MLPA-e1569924806229.png" height="100%" style="max-height:120px;padding:10px;"/></a></td>
			<td style="vertical-align:top; float: left;"><a href="https://www.forecourttraderawards.co.uk/2019-winners/" target="_blank"><img alt="Best Foot-To-Go Outlet" src="https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/FCTAwards19_Logo_Winner_HighRes_Best-Food-to-Go-Outlet-e1569924772756.png" height="100%" style="max-height:120px;padding:10px;"/></a></td>
			</tr>`;
			break;
		case "Subway Bridgeton":
			location = "723 London Road, Glasgow, G40 3AS";
			logo =
				"https://ghsl.uk/wp-content/uploads/2019/10/email-logos-06-e1569925531138.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 319 8451";
			}
			url = "https://ghsl.uk";
			if (document.getElementsByName("email")[0].value < 1) {
				email = "bridgeton.subway@ghsl.uk";
			}
			color = "#BF1A1A";
			break;
		case "RaceTrack Bridgeton":
			location = "723 London Road, Glasgow, G40 3AS";
			logo =
				"https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/email-logos-03-e1569924636507.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 258 4160";
			}
			if (document.getElementsByName("email")[0].value < 1) {
				email = "bridgeton@racetrackpitstop.co.uk";
			}
			url = "https://racetrackpitstop.co.uk";
			color = "#BF1A1A";
			break;
		case "RaceTrack Rutherglen":
			location = "273 Main Street, Rutherglen, G73 1EE";
			logo =
				"https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/email-logos-03-e1569924636507.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 647 9308";
			}
			if (document.getElementsByName("email")[0].value < 1) {
				email = "rutherglen@racetrackpitstop.co.uk";
			}
			url = "https://racetrackpitstop.co.uk";
			color = "#BF1A1A";
			break;
		case "RaceTrack Bearsden":
			location = "23-25 Duntocher Road, Bearsden, G61 4DE";
			logo =
				"https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/email-logos-03-e1569924636507.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 942 5029";
			}
			if (document.getElementsByName("email")[0].value < 1) {
				email = "bearsden@racetrackpitstop.co.uk";
			}
			url = "https://racetrackpitstop.co.uk";
			color = "#BF1A1A";

			break;
		case "RaceTrack Crowwood":
			location = "71 Cumbernauld Road, Glasgow, G69 9AD";
			logo =
				"https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/email-logos-03-e1569924636507.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 237 2422";
			}
			if (document.getElementsByName("email")[0].value < 1) {
				email = "crowwood@racetrackpitstop.co.uk";
			}
			url = "https://racetrackpitstop.co.uk";
			color = "#BF1A1A";
			break;
		case "RaceTrack Braeside":
			location = "224 Cumbernauld Road, Glasgow, G69 9NB";
			logo =
				"https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/email-logos-03-e1569924636507.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 779 2779";
			}
			if (document.getElementsByName("email")[0].value < 1) {
				email = "braeside@racetrackpitstop.co.uk";
			}
			url = "https://racetrackpitstop.co.uk";
			color = "#BF1A1A";

			break;
		default:
			location = "675 Paisley Road West, Glasgow, G51 1RP";
			logo =
				"https://racetrackpitstop.co.uk/wp-content/uploads/2019/10/email-logos-03-e1569924636507.png";
			if (document.getElementsByName("phone")[0].value < 1) {
				phone = "0141 319 7174";
			}
			color = "#BF1A1A";
			url = "https://racetrackpitstop.co.uk";
			break;
	}

	if (phoneExtension.length > 0) {
		phone = phone + "," + phoneExtension;
	}

	let generatedHTML = `<div><table cellPadding="0" cellSpacing="0"><tbody><tr><td colSpan="2"><div style="padding-bottom:15px"><div><strong>${name}</strong></div><div><span style="color: #878787; font-size: 10pt;">${position}<br/>${company}</span></div></div></td></tr><tr><td style="vertical-align:top; float: left;"><a href="${url}" target="_blank"><img alt="${company} Logo" src="${logo}" height="100%" style="max-height:80px;padding:10px;"/></a></td><td style="float: left;"><div style="font-size:0.9em;white-space:nowrap;border-left:2px solid ${color};margin-left:0;padding-left:20px"><div><div><span>w: </span><a style="color:${color}" href="${url}" target="_blank">${url.replace(
		"https://",
		""
	)}</a></div><div><span>e: </span><a style="color:${color}" href="mailto:${email}">${email}</a></div><div><span style="margin-right:8px"><span>p: </span><a style="color:${color}" href="tel:${phone}">${phone.replace(
		",",
		"&nbsp;&nbsp;&nbsp;ext. #"
	)}</a></span></div><div><span>a: </span><a style="color:${color}" href="https://maps.google.com/?q=${location}" target="_blank">${location}</a></div><div></div></div></div></td></tr><br/>${extra}<br/><tr><td style="font-size: 8pt; padding-top:35px; color: #878787;" colspan="2" width="400"><span style="font-family: arial, sans-serif; color: #878787;">The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.</span></td></tbody></table></div>`;

	document.getElementById("previewArea").innerHTML = generatedHTML;
	document.getElementById("code").value = `${generatedHTML}`;
}
