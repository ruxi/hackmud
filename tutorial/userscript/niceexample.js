// by @Forer

function(context, args) { // target:#s.sn_w.pub, action:"command", pwSelect:"password", actualPass:"plantowin", blog:"news", people:"list", count:3
	var l = #s.scripts.lib()
	//First off, make sure we go the input right
	if ((args == null) || !("target" in args) || !("action" in args) || !("pwSelect" in args) || !("actualPass" in args) || !("blog" in args) || !("people" in args) || !("count" in args)) {
		return "Please put in the commands"
	}
	//Before ANYTHING IS DONE, SANITIZE THAT DAMN TARGET!
	if (!(#s.scripts.get_level({name:args.target.name}) === 4)) {
			return "Nice try guy"
	}

	if (args.count > 10) {
		return "Whoa buddy, leave some for the rest of us";
	}


	var targ = args.target
	var actCommand = args.action
	var actBlog = args.blog
	var actPeople = args.people
	var actPass = args.pwSelect
	var pass = args.actualPass
	var d = {}
	d[actCommand] = actBlog
	var t = targ.call(d)



	//See how much the script is used
	var v = 0; //How much script is used
	if (#db.f({source:".t1_find"}).first() == null) {
		#db.i({source:".t1_find", uses:0})
	} else {
		v = #db.f({source:".t1_find"}, {uses:1, _id:0}).first().uses
	}
	v = v + 1
	#db.u({source:".t1_find"}, {$set:{uses:v}})

	//Do the actual script
    var p = targ.call(d).join(' ').split(/\s+/).sort().filter( function(v,i,o){return v!==o[i-1]})

		var r = ""
		var f = "Welcome"
		var pre = []
		var o = []

    for(var i = 0; i < p.length; i++) {
			d[actCommand] = actPeople
			d[actPass] = pass
			d["project"] = p[i]
		  r = targ.call(d)
  		if (r.indexOf(f) === -1) {
  			pre.push(r)
  		}
    }

	pre = l.shuffle(pre)

	for (var j = 0; j < pre.length; j++) {
		if (o.length < args.count) {
			if( #s.scripts.get_level({name: pre[j] }) === 4 ){
				o.push(pre[j]);
			}
		}
	}
	return o.length
	if (o.length == args.count) {
		var o = ""
		var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
		for (var k = 0; k < o.length; k++) {
			if (k > 0) {o+= ", "}
			o += letter[k] + "#s." + o[k];
		}
		return o;
	} else {
		return "holy shit we can't find any good t1's here!"
	}
}
