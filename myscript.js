//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bTrump\b/g, "Maw");
	v = v.replace(/\btrump\b/g, "maw");
	v = v.replace(/\bDonald\b/g, "Caden");
	v = v.replace(/\bDonald J Trump\b/g, "Caden J Maw");
	v = v.replace(/\bDonald John Trump\b/g, "Caden Jack Maw");
	v = v.replace(/\bDonald Trump\b/g, "Cade Maw");
	v = v.replace(/\bdonald trump\b/g, "cade maw");
	v = v.replace(/\bdonald john trump\b/g, "caden jack maw");
	v = v.replace(/\bdonald j trump\b/g, "caden j maw");
	v = v.replace(/\bdonaldjtrump\b/g, "cadenjmaw");
	v = v.replace(/\bDonaldJTrump\b/g, "CadenJMaw");
	v = v.replace(/\bDonald J. Trump\b/g, "Caden J. Maw");
	v = v.replace(/\bdonald j. trump\b/g, "caden j. maw");
	v = v.replace(/\brealdonaldtrump\b/g, "realcadenmaw");
	v = v.replace(/\bRealDonaldTrump\b/g, "Real Caden Maw");
	v = v.replace(/\b@realdonaldtrump\b/g, "@realcadenmaw");
	v = v.replace(/\b@RealDonaldTrump\b/g, "@RealCadenMaw");
	v = v.replace(/\b@realDonaldTrump\b/g, "@realCadenMaw");
	v = v.replace(/\b(@realDonaldTrump)\b/g, "(@realCadenMaw)");
	v = v.replace(/\b#Trump2020\b/g, "#Maw2020");
	v = v.replace(/\b#trump2020\b/g, "#maw2020");
	v = v.replace(/\bDonald John Trump\b/g, "Caden Jack Maw");
	
	textNode.nodeValue = v;
}
