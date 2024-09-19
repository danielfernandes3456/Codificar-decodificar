// Função para codificar o texto
function codificar() {
    const inputText = document.getElementById("inputText").value;
    let encodedText = '';

    // Codifica cada caractere com um deslocamento no código Unicode
    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        encodedText += String.fromCharCode(charCode + 5); // Desloca 5 posições no Unicode
    }

    // Inverte a string (opcional, só para complexidade)
    encodedText = encodedText.split('').reverse().join('');

    // Exibe o resultado
    document.getElementById("result").innerText = "Texto Codificado: " + encodedText;
}

// Função para decodificar o texto
function decodificar() {
    const inputText = document.getElementById("inputText").value;
    let decodedText = '';

    // Inverte a string novamente para desfazer o embaralhamento
    let reversedText = inputText.split('').reverse().join('');

    // Decodifica cada caractere com o deslocamento inverso no Unicode
    for (let i = 0; i < reversedText.length; i++) {
        let charCode = reversedText.charCodeAt(i);
        decodedText += String.fromCharCode(charCode - 5); // Desloca 5 posições para trás
    }

    // Exibe o resultado
    document.getElementById("result").innerText = "Texto Decodificado: " + decodedText;
}
