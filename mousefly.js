function Derpy(pony)
{
    Derpy.posx = 0;
    Derpy.posy = 0;
    Derpy.pony = pony || "derpy";
    Derpy.oldaction = Derpy.action = (Derpy.pony=="twi")?"idle":"stand";
    Derpy.oldposition = Derpy.position = "right";
    Derpy.ijdkwww = new Audio("img/wrong.mp3");
    Derpy.img = null;

Derpy.loadScript = function(url, callback)
{
    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) { //IE
        script.onreadystatechange = function ()
        {
            if (script.readyState == "loaded" || script.readyState == "complete")
            {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

Derpy.loop = function()
{
	if(parseInt(Derpy.img.css("top"))>(Derpy.posy-jQuery(document).scrollTop()))
	{
		Derpy.img.css("top", "-=1");
	}
	else if(parseInt(Derpy.img.css("top"))+96<(Derpy.posy-jQuery(document).scrollTop()))
	{
		Derpy.img.css("top", "+=1");
	}
	if(parseInt(Derpy.img.css("left"))+Derpy.img.width()<(Derpy.posx-jQuery(document).scrollLeft())) // keys[39]
	{
		if(parseInt(Derpy.img.css("top")) >= jQuery(window).height()-97)
			Derpy.action = (Derpy.pony=="twi")?"trot-wings":"walking";
		else
			Derpy.action = (Derpy.pony=="twi")?"flight":"fly";
		Derpy.position = "right";
		Derpy.img.css("left", "+=1");
	}
	else if(parseInt(Derpy.img.css("left"))>(Derpy.posx-jQuery(document).scrollLeft())) // keys[37]
	{
		if(parseInt(Derpy.img.css("top")) >= jQuery(window).height()-97)
			Derpy.action = (Derpy.pony=="twi")?"trot-wings":"walking";
		else
			Derpy.action = (Derpy.pony=="twi")?"flight":"fly";
		Derpy.position = "left";
		Derpy.img.css("left", "-=1");
	}
	else
	{
		if(parseInt(Derpy.img.css("top")) >= jQuery(window).height()-97)
			Derpy.action = (Derpy.pony=="twi")?"idle":"stand";
		else
		{
			Derpy.action = (Derpy.pony=="twi")?"flight":"hover";
		}
	}
	if(Derpy.oldaction != Derpy.action || Derpy.oldposition != Derpy.position)
		if(Derpy.pony == "twi") Derpy.img.attr("src", "img/p-twi-"+Derpy.action+"-"+Derpy.position+".gif");
		else Derpy.img.attr("src", "img/derpy_"+Derpy.action+"_"+Derpy.position+".gif");
	Derpy.oldaction = Derpy.action;
	Derpy.oldposition = Derpy.position;
}

Derpy.load = function()
{
    Derpy.posy = jQuery(window).height()-97;
    var fps = 60;
    Derpy.img = jQuery(document.createElement('img')).attr("src", (Derpy.pony=="twi")?"img/p-twi-idle-right.gif":"img/derpy_stand_right.gif");
    jQuery("body").append(Derpy.img);
    Derpy.img.css("position", "fixed")
	.css("top", jQuery(window).height()-97)
	.css("left", "0px")
	.css("z-index", "9001");
    setInterval(Derpy.loop, 1000/fps);
    jQuery(document).mousemove(function(e){
        Derpy.posx=e.pageX;
        Derpy.posy=e.pageY;
    });
    if(Derpy.pony == "derpy") Derpy.img.click(function(e){
        Derpy.ijdkwww.currentTime=0;
        Derpy.ijdkwww.play();
    });
}
    if (typeof jQuery == 'undefined') {
        Derpy.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js", Derpy.load);
    }
    else
    {
        Derpy.load();
    }
}
