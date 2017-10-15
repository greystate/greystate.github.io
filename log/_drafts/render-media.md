---
title: Rendering Media
date: 2017-10-12T00:04:51+0200
---

All the lovely demos out there basically does this to show you just how easy it is to render media:

```csharp.line-numbers
<img src="@Model.Content.Image.GetCropUrl("banner")" />
```

Or this to show the extreme easiness of creating navigation:

```csharp.line-numbers
@foreach (var node in Model.Content.Children.Where(x => x.IsVisible())) {
	<a href="@node.Url">@node.Name</a>
}
```

The truth is that those are *make-believe* scenarios that *practically* never happens.

What really happens is this:

- You create (or get handed from an awesome frontend developer) the HTML for the components
- They look like this:

```html.line-numbers
<div class="banner">
	<figure>
		<img src="//lorempixel.com/1200/300/business"
			srcset="//lorempixel.com/2400/400/business 2x"
			width="1200" height="300" alt="The Awesome Product Slide" />
		<figcaption>We have all the right features (but not too many!)</figcaption>
	</figure>
</div>
```


```html.line-numbers
<nav class="main-navigation">
	<ul>
		<!-- What not ? -->
		<li><a href="/">Home</a></li>
		<li class="selected"><a href="/products/">Our products</a></li>
		<li><a href="/contact/">Contact us</a></li>
	</ul>
</nav>
```

So in case of the image, the issue is of course not that it's wrapped in a `<figure>` element, but rather that we need to render two sizes, set the width/height attributes along with the alt attribute, and possibly a caption that may or may not be stored on the Image in Umbraco.

In case of the navigation sample, again, we're not concerned that it didn't include the wrapping unordered list; but we do have to set the `selected` (whatever flavor of `active`, `current` etc. you picked when building the HTML) class on one of the items (and not leave an empty class on all the others). Oh, and maybe you need to handle multiple levels of navigation too. 

```csharp.line-numbers
var selection = Model.Content.Children<IPublishedContent>.Where(x => x.IsVisible());
<nav class="main-navigation">
	<ul>
		@foreach (var node in selection) {
			var selectedClass = node.Id == Model.Content.Id ? "selected" : null;
			<li><a class="@selectedClass" href="@node.Url">@node.Name</a></li>
		}
	</ul>
</nav>
```
