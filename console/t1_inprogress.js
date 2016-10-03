// planning to nest 2 functions: t1crack and harvester

function(c, a){/// t:#s.<user>.<loc to crack>
	// define cracker - done
	var t1crack = function ( a , b ){// t:#s.name.loc
			  var t = b // this is the arg t
			  , c = { } , p , v , r , x , s , i = 0 ,
			  P = "red0purple0blue0cyan0green0lime0yellow0orange020305070110130170190230290310370410430470530590610670710730790830890970unlock0open0release" . split ( 0 ) ,
			  z = "21!|35!|40!|1!|2!|3!|or n|t co|k c|color_digit|c002_complement|c003_triad_1|c003_triad_2|!d|t d|pr",
			  Z = z . split ( '|' )
			  
			  for ( ; v = ( r = t . call ( c ) ) . match ( z ) ; c [ p ] = x , i ++ ) 
			  s = Z . indexOf ( v = v [ 0 ] ) ,
			  s > 14 ? c . ez_prime = + P [ i % 25 + 8 ]  :
			  s > 12 ? c . digit = i % 10 :
			  s > 9 ? p = v :
			  s > 8 ? c [ v ] = i % 10 :
			  x = s > 7 ? P [ i % 3 + 33 ] :
			  s > 5 ? P [ i % 8 ] :
			  p = s > 2 ? "c00" + v [ 0 ]  :
			  "EZ_" + v [ 0 ] + v [ 1 ]
			  return r
			}
	// do crack 
	if (a['t']!= null){ // cracker case
				var result1 = t1crack(c,a['t'])
				// define success condition	
				if (result1.includes("LOCK_UNLOCKED")) { 
					return {ok:true, msg:result1}
				} else { return {ok:false, msg:result1 }}
			} // end cracker case
	
}
