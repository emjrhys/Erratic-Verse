// JavaScript Document
// © 2011 Erratic Verse

var darkLines = ["eyes like shattered glass","a dying soul, a single tear wept","through a dark forest","my one hope stolen","your warm embrace stings like the cold","the sunset reminds me","swimming in an endless void","the inorganic blood of empty souls","a final sunset","dying on a distant shore","emptiness","why? I disappear","misunderstanding","for the last time","piercing my heart","I collect my tears in a fishbowl","the falling stones of my existance","the crumbling pillars of my humanity","the rasping breath of a fallen angel","I fall into oblivion"];

function getPoem(num)
{
	var poem;
	
	if (num == 0)
	{
		poem = "This mood is not complete...";
	}
	else if (num == 1)
	{
		poem = "This mood is not complete...";
	}
	else if (num == 2)
	{
		poem = "This mood is not complete...";
	}
	else if (num == 3)
	{
		poem = "This mood is not complete...";
	}
	else if (num == 4)
	{
		var line1 = Math.floor(Math.random()*darkLines.length);
		var line2 = Math.floor(Math.random()*darkLines.length);
		var line3 = Math.floor(Math.random()*darkLines.length);
	
		while (line1 == line2)
		{
			line2 = Math.floor(Math.random()*darkLines.length);
		}
		while (line3 == line2 || line3 == line1)
		{
			line3 = Math.floor(Math.random()*darkLines.length);
		}
		
		line1 = darkLines[line1];
		line2 = darkLines[line2];
		line3 = darkLines[line3];
	
		line1 = capFirst(line1);
	
		poem = line1 + ",<br>" + line2 + ",<br>" + line3 + ".";
	}
	
	document.getElementById("poem").innerHTML = poem;

}

//credit to some guy on some forum for this
function capFirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}