// just EZ21

function(context, args)
{
    var keys = { }
    var res = ""
    var t = args.t.call

    var openers = ["open","unlock","release"]   
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
        else return res
    }
}
}
