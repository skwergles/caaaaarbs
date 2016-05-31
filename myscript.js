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

	v = v.replace(/\bAbraham Lincoln\b/g, "Cade Maw");
	v = v.replace(/\babraham lincoln\b/g, "cade maw");
	v = v.replace(/\bgeorge washington\b/g, "cade maw");
	v = v.replace(/\bGeorge Washington\b/g, "Cade Maw");
	v = v.replace(/\bDonald Trump\b/g, "Cade Maw");
	v = v.replace(/\bdonald trump\b/g, "cade maw");
	
	textNode.nodeValue = v;
}
