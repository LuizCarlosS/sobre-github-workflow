function validarEmail(email) {
  if (/@gmail\.com$/.test(email)) {
    console.log('Tá certo o e-mail');
  } else {
    console.log('Deu ruim!');
  }
}

function validarCep(cep) {
  if (/^\d{8}$/.test(cep)) {
    console.log('Tá correto teu CEP');
  } else {
    console.log('Tente de novo');
  }
}

function validarCpf(cpf) {
  if (/^\d{11}$/.test(cpf)) {
    console.log('Tá correto teu CPF');
  } else {
    console.log('Tente de novo');
  }
}

function validarTelefone(telefone) {
  if (/^\d{11}$/.test(telefone)) {
    console.log('Tá correto teu telefone');
  } else {
    console.log('Tente de novo');
  }
}
