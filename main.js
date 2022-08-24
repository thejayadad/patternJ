

for (let i = 0; i<6; i++){
    for (let j = 0; j<6; j++){
        if(i == 0 || i< 5 && j==3 || (i==4 && j ==0) || (i ==5 && (j>0 && j<3))){
            document.write("X");
        } else {
            document.write("&nbsp")
        }

    }
    document.write("<br/>")
}