/*
30/11/2023

EXPRESSÕES PROJETO ROLL CRÉDITOS v1.1
NESTA VERSÃO O PARÂMETRO-BASE É A DURAÇÃO DA COMP. O CICLO É CALCULADO A PARTIR DELA.
O NÚMERO DE LINHAS POR TELA É CALCULADO A PARTIR DO TAMANHO DA MAIOR FONTE USADA
*/


//== LAYER NULL SCROLL A ====================================

//-- LAYER NULL SCROLL A: POSICAO X -- 

posTela = thisComp.layer("NULL_CONTROLES").effect("posicaoNaTela")("Menu");
larguraMax = Math.max(thisComp.layer("FUNCOES A").sourceRectAtTime(5).width, thisComp.layer("NOMES A").sourceRectAtTime(5).width);
margem = thisComp.layer("NULL_CONTROLES").effect("margem")("Slider");
me = larguraMax/2 + margem;
md = thisComp.width - (larguraMax/2 + margem);
p = [me, md];
p[posTela-1]


//-- LAYER NULL SCROLL A: POSICAO Y -- 

h = thisComp.height
ciclo = thisComp.layer("NULL_VARIAVEIS").effect("ciclo")("Slider")  //em segundos
t1 = Math.floor(time/ciclo)*ciclo
t2 = t1 + ciclo

linear(time, t1, t2, h, -h)



//== LAYER NULL SCROLL B ==================================================

//-- LAYER NULL SCROLL B: POSICAO X --
thisComp.layer("NULL_SCROLL_A").transform.position[0]


//-- LAYER NULL SCROLL B: POSICAO Y  --

h = thisComp.height
ciclo = thisComp.layer("NULL_VARIAVEIS").effect("ciclo")("Slider")  //em segundos
t1 = Math.floor((time-ciclo/2)/ciclo)*ciclo + ciclo/2
t2 = t1 + ciclo

if(time >ciclo/2)
{
	linear(time, t1, t2, h, -h)
}
else h

//== LAYER FUNCOES A =======================================

//-- LAYER FUNCOES A: POSITION Y
thisComp.layer("FONTE_1").text.sourceText.style.leading


//-- LAYER FUNCOES A: SOURCE TEXT
//Calcula o range de texto a ser lido.
//Um ciclo é o tempo de entrar em quadro mais o tempo de sair de quadro.
//O texto terá que ser trocado assim que a layer sair de quadro.
//START define o ponto inicial do trecho de texto a ser usado.

ciclo = thisComp.layer("NULL_VARIAVEIS").effect("ciclo")("Slider")
telas = thisComp.layer("NULL_VARIAVEIS").effect("telas")("Slider")
linhasPorTela = thisComp.layer("NULL_VARIAVEIS").effect("linhasPorTela")("Slider")

step=0

//Verifica se o deslocamento completou um ciclo
n = time/ciclo


//Se for múltiplo de um ciclo (número inteiro), troca o texto
if (Math.abs(n) - Math.abs(n.toFixed(0)) == 0) 
{ 
	step = 2*n
}
else //número fracionário (não troca ainda)
{ 
	step = Math.floor(n)*2
}

//Calcula o range de texto a ser lido
start = step*linhasPorTela;
end = start + linhasPorTela - 1


if(thisComp.layer("NULL_CONTROLES").effect("Exibir_linhas_numeradas").checkbox == 0)
{
	arrayLinhas = thisComp.layer("PREENCHER").text.sourceText.split("\r");
}
else
{
	arrayLinhas = thisComp.layer("LINHAS NUMERADAS").text.sourceText.split("\r");
}

if(start+linhasPorTela > arrayLinhas.length)
{
	end = arrayLinhas.length - 1;
}

resultado = "";

for (i = start; i <= end; i++)
{
	if (arrayLinhas[i].charAt(0) != "*")
	{
		resultado += "\r";
	} 
	else 
	{
		resultado += arrayLinhas[i].replace("*","")+"\r";
	}
}

T = thisComp.layer("FONTE_1").text.sourceText.getStyleAt(0);
T.setText(resultado)



//-- LAYER FUNCOES A: TEXT SCALE
temp = thisComp.layer("NULL_CONTROLES").effect("fontsize_1")("Slider");
[temp, temp]


//== LAYER NOMES A ==============================================================

//-- LAYER NOMES A - POSITION Y
thisComp.layer("FONTE_2").text.sourceText.style.leading


//-- LAYER NOMES A - SOURCE TEXT
ciclo = thisComp.layer("NULL_VARIAVEIS").effect("ciclo")("Slider")
telas = thisComp.layer("NULL_VARIAVEIS").effect("telas")("Slider")
linhasPorTela = thisComp.layer("NULL_VARIAVEIS").effect("linhasPorTela")("Slider")

step=0

//Verifica se o deslocamento completou um ciclo
n= time/ciclo

//Se for múltiplo de um ciclo (número inteiro), troca o texto
if (Math.abs(n) - Math.abs(n.toFixed(0)) == 0) 
{ 
	step = 2*n
}
else //número fracionário (não troca ainda)
{ 
	step = Math.floor(n)*2
}

//Calcula o range de texto a ser lido
start = step*linhasPorTela;
end = start + linhasPorTela - 1


if(thisComp.layer("NULL_CONTROLES").effect("Exibir_linhas_numeradas").checkbox == 0)
{
	arrayLinhas = thisComp.layer("PREENCHER").text.sourceText.split("\r");
}
else
{
	arrayLinhas = thisComp.layer("LINHAS NUMERADAS").text.sourceText.split("\r");
}


if(start+linhasPorTela > arrayLinhas.length)
{
	end = arrayLinhas.length - 1;
}

resultado = "";

for (i = start; i <= end; i++)
{
	if (arrayLinhas[i].charAt(0) == "*")
	{
		resultado += "\r";
	} 
	else 
	{
		resultado += arrayLinhas[i]+"\r";
	}
}

T = thisComp.layer("FONTE_2").text.sourceText.getStyleAt(0);
T.setText(resultado)


//-- LAYER NOMES A: TEXT SCALE
temp = thisComp.layer("NULL_CONTROLES").effect("fontsize_2")("Slider");
[temp, temp]



//== LAYER FUNCOES B ==============================================================

//-- LAYER FUNCOES B: POSITION Y
thisComp.layer("FONTE_1").text.sourceText.style.leading


//-- LAYER FUNCOES B: SOURCE TEXT
ciclo = thisComp.layer("NULL_VARIAVEIS").effect("ciclo")("Slider")
telas = thisComp.layer("NULL_VARIAVEIS").effect("telas")("Slider")
linhasPorTela = thisComp.layer("NULL_VARIAVEIS").effect("linhasPorTela")("Slider")

step=0
start_t= ciclo/2;

//Verifica se a animação completou um ciclo (contado a partir de start_t, que é a defasagem)

if(time >= start_t)
{
	n = (time - start_t)/ciclo
}
else
{
	n = time/ciclo
}


//Se for múltiplo de um ciclo (número inteiro), troca o texto
if (Math.abs(n) - Math.abs(n.toFixed(0)) == 0) 
{  
	step = 2*n +1
}
else
{
	step = Math.floor(n)*2 + 1
}

if(thisComp.layer("NULL_CONTROLES").effect("Exibir_linhas_numeradas").checkbox == 0)
{
	arrayLinhas = thisComp.layer("PREENCHER").text.sourceText.split("\r");
}
else
{
	arrayLinhas = thisComp.layer("LINHAS NUMERADAS").text.sourceText.split("\r");
}

start = step*linhasPorTela;
end = start + linhasPorTela - 1

if(start+linhasPorTela > arrayLinhas.length)
{
	end = arrayLinhas.length - 1;
}

resultado = "";

for (i = start; i <= end; i++)
{
	if (arrayLinhas[i].charAt(0) != "*")
	{
		resultado += "\r";
	} 
	else 
	{
		resultado += arrayLinhas[i].replace("*","")+"\r";
	}
}

T = thisComp.layer("FONTE_1").text.sourceText.getStyleAt(0);
T.setText(resultado)


//LAYER FUNCOES B - TEXT SCALE
temp = thisComp.layer("NULL_CONTROLES").effect("fontsize_1")("Slider");
[temp, temp]


//== LAYER NOMES B ==============================================================

//-- LAYER NOMES B: POSITION Y
thisComp.layer("FONTE_2").text.sourceText.style.leading


//- LAYER NOMES B: SOURCE TEXT
ciclo = thisComp.layer("NULL_VARIAVEIS").effect("ciclo")("Slider")
telas = thisComp.layer("NULL_VARIAVEIS").effect("telas")("Slider")
linhasPorTela = thisComp.layer("NULL_VARIAVEIS").effect("linhasPorTela")("Slider")

step=0
start_t= ciclo/2;

//Verifica se a animação completou um ciclo (contado a partir de start_t, que é a defasagem)

if(time >= start_t)
{
	n = (time - start_t)/ciclo
}
else
{
	n = time/ciclo
}


//Se for múltiplo de um ciclo (número inteiro), troca o texto
if (Math.abs(n) - Math.abs(n.toFixed(0)) == 0) 
{  
	step = 2*n +1
}
else
{
	step = Math.floor(n)*2 + 1
}

if(thisComp.layer("NULL_CONTROLES").effect("Exibir_linhas_numeradas").checkbox == 0)
{
	arrayLinhas = thisComp.layer("PREENCHER").text.sourceText.split("\r");
}
else
{
	arrayLinhas = thisComp.layer("LINHAS NUMERADAS").text.sourceText.split("\r");
}

start = step*linhasPorTela;
end = start + linhasPorTela - 1

if(start+linhasPorTela > arrayLinhas.length)
{
	end = arrayLinhas.length - 1;
}

resultado = "";

for (i = start; i <= end; i++)
{
	if (arrayLinhas[i].charAt(0) == "*")
	{
		resultado += "\r";
	} 
	else 
	{
		resultado += arrayLinhas[i]+"\r";
	}
}

T = thisComp.layer("FONTE_2").text.sourceText.getStyleAt(0);
T.setText(resultado)



//-- LAYER NOMES B: TEXT SCALE
temp = thisComp.layer("NULL_CONTROLES").effect("fontsize_2")("Slider");
[temp, temp]



//== LAYERS FONTE_1 e FONTE_2 - SOURCE TEXT ===============================

l1 = thisComp.layer("NULL_CONTROLES").effect("fontsize_1")("Slider");
l2 = thisComp.layer("NULL_CONTROLES").effect("fontsize_2")("Slider");
l = Math.max(l1,l2);
e = thisComp.layer("NULL_CONTROLES").effect("entrelinha_ajuste")("Slider");
text.sourceText.style.setText(value).setFontSize(100).setLeading(l+e)



//== LAYER LINHAS NUMERADAS - SOURCE TEXT ==================================
x = thisComp.layer("PREENCHER").text.sourceText.split("\r");
resultado = "";
for (i = 1; i <= x.length; i++) 
{
	if (x[i-1].charAt(0) == "*")
	{
		resultado += "*" + i + "\r";
	} 
	else
	{
		resultado += i + "\r";
	}
}
resultado


//== LAYER FRAME_REFERENCIA_A ==========================================
//Ajusta a largura deste retângulo de auxílio visual
w1 = thisComp.layer("NOMES A").sourceRectAtTime().width
w2 = thisComp.layer("FUNCOES A").sourceRectAtTime().width
w = Math.max(w1,w2)

if(w <100)
{
	w = 100
}
[w, thisComp.height]


//== LAYER FRAME_REFERENCIA_B ==========================================
w1 = thisComp.layer("NOMES B").sourceRectAtTime().width
w2 = thisComp.layer("FUNCOES B").sourceRectAtTime().width
w = Math.max(w1,w2)

if(w <100)
{
	w = 100
}
[w, thisComp.height]


//== LAYER NULL_VARIAVEIS: EFFECTS ==========================================================
//O propósito desta layer é conter as variáveis que são usadas no projeto de forma que não sejam calculadas a cada frame.

//TOTAL_LINHAS
thisComp.layer("PREENCHER").text.sourceText.split("\r").length

//LINHAS POR TELA
h_linha1 = thisComp.layer("FONTE_1").text.sourceText.style.leading
h_linha2 = thisComp.layer("FONTE_2").text.sourceText.style.leading
h_linha = Math.max(h_linha1,h_linha2)
Math.floor(thisComp.height/h_linha)

//TELAS
Math.ceil(effect("total_linhas")("Slider")/effect("linhasPorTela")("Slider"))

//CICLO
//Usa a duracao da comp
//É preciso descontar 1 frame da duração porque thisComp.duration marca o ínicio do último frame (e não o fim)
ciclo = ((thisComp.duration - thisComp.frameDuration)*2)/(effect("telas")("Slider") + 1)