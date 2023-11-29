
//NULL CONTROLES =================================================

//POSICAO X
m = effect("posicaoNaTela")("Menu");
w = Math.max(thisComp.layer("FUNCOES").sourceRectAtTime(5).width, thisComp.layer("NOMES").sourceRectAtTime(5).width);
me = w/2 + effect("margem")("Slider");
md = (width - w/2) - effect("margem")("Slider");
p = [me, md];
p[m-1]

//POSICAO y
h1 = thisComp.layer("FUNCOES").sourceRectAtTime(0).height;
h2 = thisComp.layer("NOMES").sourceRectAtTime(0).height;
h = Math.max(h1,h2)+content("Group 1").content("Rectangle Path 1").size[1];

a1 = 100-effect("ajuste_animacao_inicio(%)")("Slider");
a2 = effect("ajuste_animacao_fim(%)")("Slider");
p0 = thisComp.height*a1/100;
p1 = h*a2/100;
t1 = 0;
t2 = thisComp.duration;

linear(time, 0, t2, p0, -p1)



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


//TEXT SCALE
temp = thisComp.layer("NULL_CONTROLES").effect("fontsize_1")("Slider");
[temp, temp]

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

//TEXT SCALE
temp = thisComp.layer("NULL_CONTROLES").effect("fontsize_2")("Slider");
[temp, temp]