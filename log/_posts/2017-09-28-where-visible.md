---
title: Where Visible?
date: 2017-09-28T23:56:23+0200
---

Umbraco has (to my knowledge) always had a way to skip rendering certain documents in lists etc., by way of a property with the alias `umbracoNaviHide`. Not as part of the core code, mind you, but rather just a convention that's been adhered to in the templates you choose from, when creating a new macro (or a partial view) in the Backoffice.

Here's how the Razor and XSLT templates use this convention:

### XSLT

The XSLT version does this:

```xslt.line-numbers
<xsl:for-each select="$currentPage/* [@isDoc and string(umbracoNaviHide) != '1']">
	...
</xsl:for-each>
```

### Razor

The Razor snippet creates a selection variable (to iterate over later), like this:

```csharp.line-numbers
var selection = CurrentPage.Children.Where("Visible");
```

I think the XSLT version is *way better* at telling you what's going on, because it uses the actual alias of the property that's causing the exclusion, instead of a magic string.


## Rewrites

As it turns out - the Razor snippet is apparently using *dynamics*, which is no-one's favorite, these days. Or so I'm told :-) So we're supposed to use this snippet instead:

### Razor, take 2

```csharp.line-numbers
var selection = Model.Content.Children.Where(x => x.IsVisible());
```
	
This is using what's called "strongly typed" access and instead of a magic string we now have a magic method...

And while we're at it - the XSLT isn't really that great either — I'd do a similar thing, setting a variable instead:

### XSLT, take 2

```xslt.line-numbers
<xsl:variable name="selection" select="$currentPage/*[@isDoc][not(umbracoNaviHide = 1)]" />
```

As I said in a Slack channel recently, when asking about this:

> [The Razor snippets are] using "magic" if you don't know anything about how you "hide" a page in Umbraco :-)




