async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");

  const userMessage = input.value.trim();
  if (!userMessage) return;

  chatbox.innerHTML += `<div class="user">You: ${userMessage}</div>`;
  input.value = "";

  try {
    const response = await fetch("https://your-backend.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    chatbox.innerHTML += `<div class="bot">Bot: ${data.reply}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;
  } catch (err) {
    chatbox.innerHTML += `<div class="bot">⚠️ Error: Could not connect to server.</div>`;
  }
}
