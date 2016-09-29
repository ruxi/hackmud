// Full T1 solution
// from http://pastebin.com/BhtSMV80

function(context, args)
{
    var keys = { }
    var res = ""
    var t = args.t.call

    var openers = ["open","unlock","release"]
    var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
    var colors = ["purple","blue","cyan","green","lime","yellow","orange","red"]
   
    var i = 0
    while(res == "" || res.includes("+LOCK_ERROR+"))
    {
        res = t(keys)
        if(res.includes("!EZ_21!") && !res.includes("!LOCK_UNLOCKED! EZ_21"))
        {
            i = 0
            while(!res.includes("!LOCK_UNLOCKED! EZ_21"))
            {
                keys["EZ_21"] = openers[i++]
                res = t(keys)
            }
        }
        else
        if(res.includes("!EZ_35!") && !res.includes("!LOCK_UNLOCKED! EZ_35"))
        {
            i = 0
            while(!res.includes("!digit!"))
            {
                keys["EZ_35"] = openers[i++]
                res = t(keys)
            }
           
            i = 0
            while(!res.includes("!LOCK_UNLOCKED! EZ_35"))
            {
                keys["digit"] = i++
                res = t(keys)
            }
        }
        else
        if(res.includes("!EZ_40!") && !res.includes("!LOCK_UNLOCKED! EZ_40"))
        {
            i = 0
            while(!res.includes("!ez_prime!"))
            {
                keys["EZ_40"] = openers[i++]
                res = t(keys)
            }
           
            i = 0
            while(!res.includes("!LOCK_UNLOCKED! EZ_40"))
            {
                keys["ez_prime"] = primes[i++]
                res = t(keys)
            }
        }
        else
        if(res.includes("!c001!") && !res.includes("!LOCK_UNLOCKED! c001"))
        {
            i = 0
            while(!res.includes("!color_digit!"))
            {
                keys["c001"] = colors[i++]
                res = t(keys)
            }
           
            i = 0
            while(!res.includes("!LOCK_UNLOCKED! c001"))
            {
                keys["color_digit"] = i++
                res = t(keys)
            }
        }
        else
        if(res.includes("!c002!") && !res.includes("!LOCK_UNLOCKED! c002"))
        {
            i = 0
            while(!res.includes("!LOCK_UNLOCKED! c002"))
            {
                keys["c002"] = colors[i]
                keys["c002_complement"] = colors[(i+4)%8]
                res = t(keys)
               
                i++
            }
        }
        else
        if(res.includes("!c003!") && !res.includes("!LOCK_UNLOCKED! c003"))
        {
            i = 0
            while(!res.includes("!LOCK_UNLOCKED! c003"))
            {
                keys["c003"] = colors[i]
                keys["c003_triad_1"] = colors[(i+3)%8]
                keys["c003_triad_2"] = colors[(i+5)%8]
                res = t(keys)
               
                i++
            }
        }
        else return res
    }
}
}
