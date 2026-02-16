const botao = document.getElementById('acessar');
let para = document.getElementById('para');

const nom = "Aine";
const senhaCorreta = "11322";

let tentar = 0;
const nomaximo = 3;

botao.addEventListener('click', function(evento) {
  evento.preventDefault();

  const nome = document.getElementById('name').value;
  const senha = document.getElementById('senha').value;

  if (nome === nom && senha === senhaCorreta) {
    para.innerHTML = "Hola🤗 <strong>Aine</strong>, seja Bem-vindo(a). A XilamboVoz ";
    setTimeout(function(){
      para.innerHTML="";
    },5000);

  } else {
    tentar++;
    if (tentar >= nomaximo) {
      para.textContent = "😣Errado. Acesso negado.";
      para.style.color="red";

      document.getElementById('name').disabled=true;
      document.getElementById('senha').disabled=true;
      botao.disabled=true;

    } else {
      para.textContent = `Nome ou senha incorretos, apos de 3 tentativas ira bloqueiar. Tentativa ${tentar} de ${nomaximo}.`;
      para.style.color="brown";
    }
  }
});