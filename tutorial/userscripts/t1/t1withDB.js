//hackmud t1 cracking script
//by klias and oracle
   
//execute this function before running this script
//it will execute the necessary db commands
//it only has to be run once before using the cracking script
//function(context, args){
 
//#db.r({ t:"p" });
//#db.i({t: "p", c: ["purple","blue","cyan","green","lime","yellow","orange","red"], o: ["open", "unlock", "release"], w:["not", "lock.", "color_digit", "c002_complement", "c003_triad_1", "c003_triad_2", "ez_prime", "digit"], p: [1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]});
//var b = #db.f({t:"p"}).first()
//return b;
//}
 
function(c, a){//t:#s.target.script
 
    var b = #db.f({t:"p"}).first(), c = b.c, w = b.w, t = a.t.call, k = {};
   
    while (true){
       
        var r = t(k).split('\n').pop(), s = r.indexOf(w[1]), h = r.slice(s-4,s-2);
       
        if(s == -1)break;
       
        s = ()=>{return t(k).indexOf(w[0]) != -1}
       
        r = 0; 
        do{
            h[0] == '0' ? k["c0"+h] = c[r++] : k["EZ_"+h] = b.o[r++];
        }while(s());
       
        switch (h){
            case "01":
                k[w[2]] = k.c001.length;
                break;
            case "02":
                k[w[3]] = c[(r+3)%8];
                break;
            case "03":
                k[w[4]] = c[(r+2)%8];
                k[w[5]] = c[(r+4)%8];
                break;
            case "40":
            case "35":
                r = 0;
                do{
                    (h == "40"? k[w[6]] = b.p[r++]:k[w[7]] = r++);
                }while(s());
        }
    }
    return t(k);
}
