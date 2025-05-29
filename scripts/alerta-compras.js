(function () {
  const compradores = [
    "Carlos de São Paulo",
    "Mariana de Belo Horizonte",
    "João de Salvador",
    "Ana de Curitiba",
    "Fernando do Rio de Janeiro",
    "Larissa de Brasília",
    "Diego de Fortaleza",
    "Camila de Porto Alegre",
    "Lucas de Recife",
    "Juliana de Campinas"
  ];

  function criarNotificacao(nome) {
    const notificacao = document.createElement("div");
    notificacao.className = "ak3-alerta-compras";
    notificacao.innerText = `${nome} comprou há poucos minutos`;
    Object.assign(notificacao.style, {
      position: "fixed",
      bottom: "20px",
      left: "20px",
      background: "#fff",
      color: "#333",
      padding: "12px 20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      zIndex: "9999",
      fontSize: "14px",
      fontFamily: "Arial, sans-serif",
      transition: "opacity 0.5s ease",
      opacity: "0"
    });
    document.body.appendChild(notificacao);

    setTimeout(() => {
      notificacao.style.opacity = "1";
    }, 100);

    setTimeout(() => {
      notificacao.style.opacity = "0";
      setTimeout(() => {
        notificacao.remove();
      }, 500);
    }, 5000);
  }

  function mostrarNotificacoesPeriodicamente() {
    setInterval(() => {
      const nomeAleatorio =
        compradores[Math.floor(Math.random() * compradores.length)];
      criarNotificacao(nomeAleatorio);
    }, 15000); // a cada 15 segundos
  }

  document.addEventListener("DOMContentLoaded", mostrarNotificacoesPeriodicamente);
})();
