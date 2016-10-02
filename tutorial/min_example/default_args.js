// example of how to supply default values to kwarg
// note: function(context, args) is contrained by framework

function(context, args){ // s:#s.soylentbean.pub_info
	// default arg values
	var defaults = {'a':"default_1"	}

	// replace with defaults if not user-supplied
	for(var i in defaults){ 
       		if(typeof args[i] == "undefined") {args[i] = defaults[i]};
				}

	// output
	return args['a']
	}
