const DNA =  {"dnaCodes" : 
        
                    [
                    {"a" : "ATCG"},
                    {"b" : "ATGC"},  
                    {"c" : "TACG"},
                    {"d" : "TACC"},
                    {"e" : "GCTA"},
                    {"f" : "CGAT"},
                    {"c" : "TTCG"},
                    {"h" : "CCTG"},
                    {"i" : "ACCG"},
                    {"j" : "GGCA"},
                    {"k" : "CCTG"},
                    {"l" : "TAGC"},
                    {"m" : "GCAT"},
                    {"n" : "CGTA"},
                    {"o" : "AATT"},
                    {"p" : "AAGG"},
                    {"q" : "CCAA"},
                    {"r" : "TTGG"},
                    {"s" : "TTAA"},
                    {"t" : "TCAA"},
                    {"u" : "ACCA"},
                    {"v" : "CTTC"},
                    {"w" : "GTTG"},
                    {"x" : "ATAT"},
                    {"y" : "TGTG"},
                    {"z" : "CACA"}
                    ]
};

let convtedToDNA = convertDNA('bat',DNA);
console.log(convtedToDNA);
console.log(convertToRNA(convtedToDNA));

function convertToRNA(strn){
    let regExp = /T/g;
    
    return strn.replace(regExp,'U');
}


function convertDNA(strn, dna){
    let myDnaStrn = "";
    let myStrn =strn.concat();
    myStrn = myStrn.toLowerCase();
    for(let i = 0; i < myStrn.length;i++){
        let currentCode = '';

        for(let j = 0 ; j < dna.dnaCodes.length;j++){

                if(dna.dnaCodes[j][myStrn[i]]){
                    currentCode = dna.dnaCodes[j][myStrn[i]];
            }

        }
        myDnaStrn = myDnaStrn.concat(currentCode);
    }

    return myDnaStrn;
}

function dnaToString(stn,dna){
    let myStrn = strn.concat();

    
}
        