fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    const ipBox = document.createElement("div");
    ipBox.textContent = `IP: ${data.ip}`;
    ipBox.style.position = "fixed";
    ipBox.style.bottom = "10px";
    ipBox.style.right = "10px";
    ipBox.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    ipBox.style.color = "#fff";
    ipBox.style.padding = "5px 10px";
    ipBox.style.borderRadius = "5px";
    ipBox.style.zIndex = "9999";
    document.body.appendChild(ipBox);
  })
  .catch((error) => console.error("Erro ao obter IP:", error));
