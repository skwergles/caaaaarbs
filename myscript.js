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

	v = v.replace(/\bTrump\b/g, "Randall");
	v = v.replace(/\btrump\b/g, "randall");
	v = v.replace(/\bDonald J Trump\b/g, "Benjamin T Randall");
	v = v.replace(/\bDonald John Trump\b/g, "Benjamin Thomas Randall");
	v = v.replace(/\bDonald Trump\b/g, "Benjamin Randall");
	v = v.replace(/\bdonald trump\b/g, "benjamin randall");
	v = v.replace(/\bdonald john trump\b/g, "benjamin thomas randall");
	v = v.replace(/\bdonald j trump\b/g, "benjamin t randall");
	v = v.replace(/\bdonaldjtrump\b/g, "benjaminjrandall");
	v = v.replace(/\bDonaldJTrump\b/g, "BenjaminTRandall");
	v = v.replace(/\bDonald J. Trump\b/g, "Benjamin T. Randall");
	v = v.replace(/\bdonald j. trump\b/g, "benajmin t. randall");
	v = v.replace(/\brealdonaldtrump\b/g, "realbenrandall");
	v = v.replace(/\bRealDonaldTrump\b/g, "RealBenRandall");
	v = v.replace(/\bDonald\b/g, "Benjamin");
	v = v.replace(/\bdonald\b/g, "Benjamin");
	v = v.replace(/\b@realdonaldtrump\b/g, "@realbenrandall");
	v = v.replace(/\b@RealDonaldTrump\b/g, "@RealBenRandall");
	v = v.replace(/\b@realDonaldTrump\b/g, "@realBenRandall");
	v = v.replace(/\b(@realDonaldTrump)\b/g, "(@realBenRandall)");
	v = v.replace(/\b#Trump2016\b/g, "#Randall2016");
	v = v.replace(/\b#trump2016\b/g, "#randall2016");
	v = v.replace(/\bDonald John Trump\b/g, "Benjamin Thomas Randall");
	
	textNode.nodeValue = v;
}
