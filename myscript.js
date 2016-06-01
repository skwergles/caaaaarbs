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
	v = v.replace(/\bDonald J Trump\b/g, "Cade J Maw");
	v = v.replace(/\bDonald John Trump\b/g, "Cade Jack Maw");
	v = v.replace(/\bDonald Trump\b/g, "Cade Maw");
	v = v.replace(/\bdonald trump\b/g, "cade maw");
	v = v.replace(/\bdonald john trump\b/g, "cade jack maw");
	v = v.replace(/\bdonald j trump\b/g, "cade j maw");
	v = v.replace(/\bdonaldjtrump\b/g, "cadejmaw");
	v = v.replace(/\bDonaldJTrump\b/g, "CadeJMaw");
	v = v.replace(/\bDonald J. Trump\b/g, "Cade J. Maw");
	v = v.replace(/\bdonald j. trump\b/g, "cade j. maw");
	v = v.replace(/\brealdonaldtrump\b/g, "realcademaw");
	v = v.replace(/\bRealDonaldTrump\b/g, "RealCadeMaw");
	v = v.replace(/\bDonald\b/g, "Cade");
	v = v.replace(/\bdonald\b/g, "cade");
	v = v.replace(/\b@realdonaldtrump\b/g, "@realcademaw");
	v = v.replace(/\b@RealDonaldTrump\b/g, "@RealCadeMaw");
	v = v.replace(/\b@realDonaldTrump\b/g, "@realCadeMaw");
	v = v.replace(/\b(@realDonaldTrump)\b/g, "(@realCadeMaw)");
	v = v.replace(/\b#Trump2016\b/g, "#Maw2016");
	v = v.replace(/\b#trump2016\b/g, "#maw2016");
	
	textNode.nodeValue = v;
}
