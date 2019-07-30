var grade01 = parseFloat(prompt("Insira a primera nota"));
var grade02 = parseFloat(prompt("Insira a segunda nota"));
var grade03 = parseFloat(prompt("Insira a terceira nota"));

average = ((grade01 + grade02 + grade03) / 2);

if (average > 6) {
	document.body.append("Situação: APROVADO! Média final: " + average);
}else {
	document.body.append("Situação: REPROVADO! Média final: " + average);
}