//EXPRESSÕES PROJETO ROLL CRÉDITOS
/*
NESTA VERSÃO O PARÂMETRO-BASE É A DURAÇÃO DA COMP. O CICLO É CALCULADO A PARTIR DELA.
NAS VERSÕES ANTERIORES O PARÂMETRO-BASE ERA O CICLO.

O NÚMERO DE LINHAS POR TELA É CALCULADO A PARTIR DO TAMANHO DA MAIOR FONTE USADA

% ANIMACAO INICIO
0: 1a tela começa fora de quadro
100: 1a tela começa em quadro (a defasagem máxima é de uma tela, ou seja, de metade de um ciclo)
Para não mudar a velocidade do roll, a animação permanece freezada até o momento em que a 1a tela esteja na posição desejada. 

COMPOSIÇÃO: TESTE ROLL02 freeze anim ini
*/


//== LAYER NULL SCROLL A ========

//== POSICAO X == 

posTela = thisComp.layer("NULL_CONTROLES").effect("posicaoNaTela")("Menu");
larguraMax = Math.max(thisComp.layer("FUNCOES A").sourceRectAtTime(5).width, thisComp.layer("NOMES A").sourceRectAtTime(5).width);
margem = thisComp.layer("NULL_CONTROLES").effect("margem")("Slider");
me = larguraMax/2 + margem;
md = thisComp.width - (larguraMax/2 + margem);
p = [me, md];
p[posTela-1]


//== POSICAO Y -- LAYER NULL SCROLL A ========

h1 = thisComp.height
h2 = -h1
ciclo = thisComp.layer("NULL_VARIAVEIS").effect("ciclo")("Slider")  //em segundos
t1 = Math.floor(time/ciclo)*ciclo
t2 = t1 + ciclo

//A defasagem máxima é a metade de um ciclo, por isso dividi por 200
k = thisComp.layer("NULL_CONTROLES").effect("ajuste_animacao_inicio(%)")("Slider")/200

if(time < ciclo)
{
	h1 = h1*(1 - thisComp.layer("NULL_CONTROLES").effect("ajuste_animacao_inicio(%)")("Slider")/100)
}

linear(time, t1, t2, h1, h2)

//===========================================================================================

//== LAYER NULL SCROLL B ========

//== POSICAO X ==
thisComp.layer("NULL_SCROLL_A").transform.position[0]


//== POSICAO Y LAYER NULL ==

h1 = thisComp.height
h2 = -h1
ciclo = thisComp.layer("NULL_VARIAVEIS").effect("ciclo")("Slider")  //em segundos
t1 = Math.floor((time-ciclo/2)/ciclo)*ciclo + ciclo/2
t2 = t1 + ciclo

//A defasagem máxima é a metade de um ciclo, por isso dividi por 200
k = thisComp.layer("NULL_CONTROLES").effect("ajuste_animacao_inicio(%)")("Slider")/200

kc = (ciclo/2) * (1- thisComp.layer("NULL_CONTROLES").effect("ajuste_animacao_inicio(%)")("Slider")/100)

if(k>0) 
{
	if(time < ciclo)
	{
		h2 = 0
		t1 = kc    //XXX IMPRECISO XXXXX
		t2 = ciclo
	}

	linear(time, t1, t2, h1, h2)
}
else
{
	if(time >ciclo/2)
	{
		linear(time, t1, t2, h1, h2)
	}
	else h1 //fica parado até atingir meio ciclo
}




//==========================================


//LAYER FUNCOES A - SOURCE TEXT
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
	x = thisComp.layer("PREENCHER").text.sourceText.split("\r");
}
else
{
	x = thisComp.layer("LINHAS NUMERADAS").text.sourceText.split("\r");
}

if(start+linhasPorTela > x.length)
{
	end = x.length - 1;
}

resultado = "";

for (i = start; i <= end; i++)
{
	if (x[i].charAt(0) != "*")
	{
		resultado += "\r";
	} 
	else 
	{
		resultado += x[i].replace("*","")+"\r";
	}
}


T = thisComp.layer("FONTE_1").text.sourceText.getStyleAt(0);
T.setText(resultado)


//LAYER FUNCOES A - TEXT SCALE
temp = thisComp.layer("NULL_CONTROLES").effect("fontsize_1")("Slider");
[temp, temp]

//=============================================================================================

//LAYER NOMES A - SOURCE TEXT
//Calcula o range de texto a ser lido.
//Um ciclo é o tempo de entrar em quadro mais o tempo de sair de quadro.
//O texto terá que ser trocado assim que a layer sair de quadro.
//START define o ponto inicial do trecho de texto a ser usado.

ciclo = thisComp.layer("NULL_VARIAVEIS").effect("ciclo")("Slider")
telas = thisComp.layer("NULL_VARIAVEIS").effect("telas")("Slider")
linhasPorTela = thisComp.layer("NULL_VARIAVEIS").effect("linhasPorTela")("Slider")

step=0


//Verifica se o deslocamento completou um ciclo
n = time.toFixed(4)/ciclo.value.toFixed(4)
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
	x = thisComp.layer("PREENCHER").text.sourceText.split("\r");
}
else
{
	x = thisComp.layer("LINHAS NUMERADAS").text.sourceText.split("\r");
}

if(start+linhasPorTela > x.length)
{
	end = x.length - 1;
}

resultado = "";

for (i = start; i <= end; i++)
{
	if (x[i].charAt(0) == "*")
	{
		resultado += "\r";
	} 
	else 
	{
		resultado += x[i]+"\r";
	}
}


T = thisComp.layer("FONTE_2").text.sourceText.getStyleAt(0);
T.setText(resultado)


//LAYER NOMES A - TEXT SCALE
temp = thisComp.layer("NULL_CONTROLES").effect("fontsize_2")("Slider");
[temp, temp]

//==================================================================================================


//LAYER FUNCOES B - SOURCE TEXT
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
	x = thisComp.layer("PREENCHER").text.sourceText.split("\r");
}
else
{
	x = thisComp.layer("LINHAS NUMERADAS").text.sourceText.split("\r");
}

start = step*linhasPorTela;
end = start + linhasPorTela - 1

if(start+linhasPorTela > x.length)
{
	end = x.length - 1;
}

resultado = "";

for (i = start; i <= end; i++)
{
	if (x[i].charAt(0) != "*")
	{
		resultado += "\r";
	} 
	else 
	{
		resultado += x[i].replace("*","")+"\r";
	}
}

T = thisComp.layer("FONTE_1").text.sourceText.getStyleAt(0);
T.setText(resultado)


//LAYER FUNCOES B - TEXT SCALE
temp = thisComp.layer("NULL_CONTROLES").effect("fontsize_1")("Slider");
[temp, temp]
//==========================================================================================


//LAYER NOMES B - SOURCE TEXT
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
	x = thisComp.layer("PREENCHER").text.sourceText.split("\r");
}
else
{
	x = thisComp.layer("LINHAS NUMERADAS").text.sourceText.split("\r");
}

start = step*linhasPorTela;
end = start + linhasPorTela - 1

if(start+linhasPorTela > x.length)
{
	end = x.length - 1;
}

resultado = "";

for (i = start; i <= end; i++)
{
	if (x[i].charAt(0) == "*")
	{
		resultado += "\r";
	} 
	else 
	{
		resultado += x[i]+"\r";
	}
}

T = thisComp.layer("FONTE_2").text.sourceText.getStyleAt(0);
T.setText(resultado)


//LAYER NOMES B - TEXT SCALE
temp = thisComp.layer("NULL_CONTROLES").effect("fontsize_2")("Slider");
[temp, temp]

//===================================

//== LAYERS FONTE_1 e FONTE_2 - SOURCE TEXT ========

l1 = thisComp.layer("NULL_CONTROLES").effect("fontsize_1")("Slider");
l2 = thisComp.layer("NULL_CONTROLES").effect("fontsize_2")("Slider");
l = Math.max(l1,l2);
e = thisComp.layer("NULL_CONTROLES").effect("entrelinha_ajuste")("Slider");
text.sourceText.style.setText(value).setFontSize(100).setLeading(l+e)

//===================================

//== LAYER LINHAS NUMERADAS - SOURCE TEXT ========

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

//===================================


//LAYER NULL_VARIAVEIS

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
