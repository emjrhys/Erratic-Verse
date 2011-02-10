// JavaScript Document
// © 2011 Erratic Verse

var romanceLines = ["thinking of you, wherever you are","the lonely dove"]

var reflectLines = ["rippling water under traveling fish","waving blossoms on a lone cherry tree","bees humming from flower to flower","bathing in the light of the stars","truth looking out from behind dark clouds","I spend my days in silent contemplation","I percieve truth through my experiences","shattering the mirrors of the past","I walk through a broken memory","gazing across the darkening treetops","I wait for the night to fall","leaves falling to rest on shadow","the world bustles with activity","the calm of night creeps across the earth","the scent calms my soul","rain falls on a silent pond","a dark secret beneath shining gardens","hushed words of other worlds","fish swimming through a quiet sea","tranquil faces beneath the waves","dreams scattered across desolation","asleep on a distant shore","a scattered dream that's like a far-off memory","a far-off memory that's like a scattered dream","I want to line the pieces up"];

var darkLines = ["eyes like shattered glass","a dying soul, a single tear wept","my one hope stolen","your warm embrace stings like the cold","the sunset reminds me","swimming in an endless void","the inorganic blood of empty souls","a final sunset","dying on a distant shore","emptiness","why? I disappear","misunderstanding","for the last time","piercing my heart","I collect my tears in a fishbowl","the falling stones of my existance","the crumbling pillars of my humanity","the rasping breath of a fallen angel","I fall into oblivion"];

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
		var line1 = Math.floor(Math.random()*reflectLines.length);
		var line2 = Math.floor(Math.random()*reflectLines.length);
		var line3 = Math.floor(Math.random()*reflectLines.length);
	
		while (line1 == line2)
		{
			line2 = Math.floor(Math.random()*reflectLines.length);
		}
		while (line3 == line2 || line3 == line1)
		{
			line3 = Math.floor(Math.random()*reflectLines.length);
		}
		
		line1 = reflectLines[line1];
		line2 = reflectLines[line2];
		line3 = reflectLines[line3];
	
		line1 = capFirst(line1);
	
		poem = line1 + ",<br>" + line2 + ",<br>" + line3 + ".";
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

/**
 * DHTML textbox character counter script. Courtesy of SmartWebby.com (http://www.smartwebby.com/dhtml/)
 */

maxL=40;
var bName = navigator.appName;
function taLimit(taObj) {
	if (taObj.value.length==maxL) return false;
	return true;
}

function taCount(taObj,Cnt) { 
	objCnt=createObject(Cnt);
	objVal=taObj.value;
	if (objVal.length>maxL) objVal=objVal.substring(0,maxL);
	if (objCnt) {
		if(bName == "Netscape"){	
			objCnt.textContent=maxL-objVal.length;}
		else{objCnt.innerText=maxL-objVal.length;}
	}
	return true;
}
function createObject(objId) {
	if (document.getElementById) return document.getElementById(objId);
	else if (document.layers) return eval("document." + objId);
	else if (document.all) return eval("document.all." + objId);
	else return eval("document." + objId);
}

function submitPoem(field)
{
	var line = document.getElementById("textbox").value;
	if (line.length <= 5)
	{
		document.getElementById('error').innerHTML = 'Line is too short...';
		setTimeout("document.getElementById('error').innerHTML = 'Submit a line of poetry:'",2250);
	}
	else
	{
		document.getElementById("poem").innerHTML = "Thank you for your submission!<br /> <span id = \"line\">&nbsp&nbsp&nbsp - &nbsp " + line + "</span><br /> <input type = \"button\" value = \"Submit Another Line\" onClick = \"submitAnother();\"/>"
	}
}

function submitAnother()
{
	document.getElementById("poem").innerHTML = "<span id = \"error\">Submit a line of poetry:</span> <span id=myCounter>40</span><br /><br /> <input type = \"text\" id = \"textbox\" name = \"name\" value = \"\" onKeyPress=\"return taLimit(this)\" onKeyUp=\"return taCount(this,'myCounter')\" />  <select name=\"mydropdown\"> <option value=\"Ecstasy\">Ecstasy</option> <option value=\"Romance\">Romance</option> <option value=\"Reflection\">Reflection</option> <option value=\"Fury\">Fury</option> <option value=\"Melancholy\">Melancholy</option> </select> <input type = \"button\"value = \"Submit\" onClick = \"submitPoem();\"/>"
}

function hov(loc,cls,otr) { 
  	if(loc.className) 
	{
	    loc.className=cls;
		setTimeout("loc.className=otr",200);
	}
}