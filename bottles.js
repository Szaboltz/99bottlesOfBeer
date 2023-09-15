function beer(){
    let ct = 99;
    while(ct > 0) {
        console.log(ct + " bottles of beer on the wall, " + ct + " bottles of beer,\nTake one down and pass it around, " + (ct - 1) + " bottles of beer on the wall");
        ct--;
    }
}

beer();