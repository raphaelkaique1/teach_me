type Message = {
    role: 'user' | 'system';
    content: string;
  };
  
  export async function sendMessage(messages: Message[]) {
    const response = await fetch('https://teach-me-server.onrender.com/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });
  
    if (!response.ok) {
      throw new Error('Erro ao comunicar com o servidor');
    }
  
    const data = await response.json();
  
    return {
      role: data.role,
      content: data.content,
    };
  }