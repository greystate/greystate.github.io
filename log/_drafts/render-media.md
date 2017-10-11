---
title: Rendering Media
date: 2017-10-12T00:04:51+0200
---

All the lovely demos out there basically does this to show you just how easy it is to render media:

```csharp.line-numbers
<img src="@Model.Content.Image.GetCropUrl("banner")" />
```

Or this to show the extreme easiness of navigation:

```csharp.line-numbers
@foreach (var node in Model.Content.Children.Where(x => x.IsVisible())) {
	<a href="@node.Url">@node.Name</a>
}
```

The truth is that those are *make-believe* scenarios that *practically* never happens.

What really happens is this:

- You create (or gets handed from an awesome frontend developer) the HTML for the components
- They look like this:

```html.line-numbers
<div class="banner">
	<figure>
		<img src="http://lorempixel.com/1200/300/business"
			srcset="http://lorempixel.com/2400/400/business 2x"
			width="1200" height="300" alt="The Awesome Product Slide" />
		<figcaption>We have all the right features (but not too many!)</figcaption>
	</figure>
</div>
```

```html.line-numbers
<nav class="main-navigation">
	<ul>
		<li><a href="/">Home</a></li>
		<li class="selected"><a href="/products/">Our products</a></li>
		<li><a href="/contact/">Contact us</a></li>
	</ul>
</nav>
```

Likewise, 

What you as the Razor Wizard of the team has to do here is:



