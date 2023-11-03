

//LAYER FUNCOES =================================================

//ANCHOR POINT
x = 0;
y0 = sourceRectAtTime(20).height;
y1 = sourceRectAtTime(20).top;
y = y0+y1;
[x,y1]


//POSITION
thisComp.layer("FONTE_1").text.sourceText.style.leading/2


//SOURCE TEXT
t = thisComp.layer("PREENCHER").text.sourceText.split("*").join("^");
x = t.split("\r");
resultado = "";
for (i = 0; i <= x.length-1; i++) {
	if (x[i].charAt(0) == "^") {
		resultado += x[i].replace("^","")+"\r";
	} else {
			resultado += " \r";
	}
}
T = thisComp.layer("FONTE_1").text.sourceText.getStyleAt(0);
T.setText(resultado)



//LAYER NOMES ================================================

//POSITION Y
-thisComp.layer("FUNCOES").sourceRectAtTime(10).top
+thisComp.layer("FUNCOES").transform.yPosition


//SOURCE TEXT
t = thisComp.layer("PREENCHER").text.sourceText.split("*").join("^");
x = t.split("\r");
resultado = "";
for (i = 0; i <= x.length-1; i++) {
	if (x[i].charAt(0) == "^") {
		resultado += "\r";
	} else {
		resultado += x[i]+"\r";
	}
};
T = thisComp.layer("FONTE_2").text.sourceText.getStyleAt(0);
T.setText(resultado)