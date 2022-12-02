const pacientes = [{
  nome: 'João',
  idade: 39,
  peso: 65,
  altura: 1.60,
},
{
  nome: 'Maria',
  idade: 28,
  peso: 56,
  altura: 1.59,
},
{
  nome: 'José',
  idade: 30,
  peso: 90,
  altura: 1.70,
}
]

let arrayPacientes = []

for (const paciente of pacientes){
  arrayPacientes.push(paciente.nome)
}

console.log(arrayPacientes)