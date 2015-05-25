# derpy

![Derpy](/img/derpy_hover_right.gif "It's Derpy.")

Some mouse-following web browser toy I wrote back in summer 2013, designed to be embedded in webpages. Originally hosted at [juju2143.ca/derpy](http://juju2143.ca/derpy "derp"), it has since been integrated in various Facebook pages and forum shoutboxes as an easter egg. It is now back in glorious forkable git repository form for your pleasure!

## Use

First embed the javascript in your webpage:

```<script src="mousefly.js"></script>```

Then you can add a new pony:

```
<script>
var derpy = new Derpy();
</script>
```

Oh, you want your favourite princess Twilight Sparkle instead?

![Twilight](/img/p-twi-flight-right.gif "It's Twilight.")

```
<script>
var twi = new Derpy("twi");
</script>
```

There we go. Please note that only the last pony added will follow your mouse.

Have fun!

Assets from Desktop Ponies, My Little Pony (c) Hasbro.
