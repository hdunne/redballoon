
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Honey Extractor - machinery that uses a centrifugal force" +
		"that spins the combs causing honey to fly off.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Apitherapy - known as 'bee therapy' is the" + 
		"medicinal use of products made by honeybees.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "Royal Jelly - produced by salivary glands, possesses" +
		"anti-inflammatory properties, and help fight off diseases.";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "Propolis -  glue produced by bees from" +
		"beeswax and tree sap";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}


