function convertToRNA(dnaString){

    let regExp = /T/g;

    var rnaString = dnaString.replace(regExp,'U');

    $("#output").val(rnaString);
}


function convertDNA(){

    console.log("hi");
    let dna = DNA;
    var strn = $('#input').val();
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

    var type = $('input[type=radio]:checked').val();

    if (type == "DNA") {

       $("#output").val(myDnaStrn);
    }

    if (type=="RNA") {
        convertToRNA(myDnaStrn);
    }
    
}

function dnaToString(stn,dna){
    let myStrn = strn.concat();



}

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

