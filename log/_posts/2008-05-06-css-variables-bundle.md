---
title: CSS Variables TextMate Bundle
date: 2008-05-06T02:09:38+0200
---

So a couple of weeks ago, I’m discussing with my good friend and colleague [Sebastian][seb], that I’d been trying (again, for the umpteenth time) to come up with a *usable* “Dynamic CSS” solution, and I quickly jot the latest syntax down on the whiteboard next to us.

[seb]: http://www.dammark.net

This time I was eager to use “proper” CSS syntax, and then solve the dynamicness with some kind of server-side processing, so I’d chosen to use a special at-rule **@variables** (though I shortened it to @vars on the whiteboard) for the declaration of variables and then a **var()** function for retrieving a variable where needed...

Mere **two** days later [this document](http://disruptive-innovations.com/zoo/cssvariables/) shows up in my RSS Reader and I’m **completely** baffled!

So then I thought: “Well, if others have conjured up the **exact** same syntax, then it’s definitely the way to go. But how do we get to use it now? No-one (save for Webkit in a nightly, possibly) is going to actually implement this anytime soon...”


“Well—no harm done, creating a couple of Snippets for TextMate,” I figured, and then I just went ahead and clumsied up a pair of Commands also, so now I’m actually able to use it as an everyday tool when developing CSS.

Go ahead and [check it out][bundle].

And by all means, [let me know](https://twitter.com/greystate "- or just say 'Hi'...") if you’re using/hating it...

[bundle]: /resources/css-variables/ "TextMate Bundle for CSS Variables"
