# Conjunto de REGEX para validação de entradas.

def validar_email(email):
  if '@gmail.com' in email:
    print('Tá certo o e-mail')
  else:
   print('Deu ruim!')

def validar_cep(cep):
  if len(cep) == 8:
    print('Tá correto teu CEP')
  else:
    print('Tente de novo')

def validar_cpf(cpf):
  if len(cpf) == 11:
    print('Tá correto teu CPF')
  else:
    print('Tente de novo')


def validar_telefone(telefone):
  if len(telefone) == 11:
    print('Tá correto teu telefone')
  else:
    print('Tente de novo')

  
 