// controllers/chatController.js
const { getChatGptResponse } = require('../../src/utilities/chatgpt');

const sendMessage = async (req, res) => {
  const { message } = req.body;
  console.log(message, 'ami in backend')
  try {
    const response = await getChatGptResponse(message);
    res.json({ message: response });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};

module.exports = {
  sendMessage,
};






// module.exports = {
//     getChat,
// }

// async function getChat(req, res) {
//     console.log('have I entered getChat')
//     try {
//         const url = 'https://api.openai.com/v1/chat/completions';
//         const options = {
            
//         }
//     } catch(err){
//         res.status(400).json(err);
//     }
// }

// async function getChat(req, res) {
//     console.log(req, 'back req')
//     const options = {
//         method: "POST",
//         headers: {
//             "Authorization": `Bearer ${process.env.GPT_API}`,
//             "Content-Type" : 'application/json',
//         },
//         body: JSON.stringify({
//             model: "gpt-3.5-turbo",
//             messages: [{role: "system", content: "how are you?"}],
//             max_tokens: 100,
//         })
//     }
//     try {
//         const response = await fetch('https://api.openai.com/v1/chat/completions', options)
//         const data = await response.json()
//         console.log(data,'back response')
//         res.send(data)
//     } catch (err) {
//         console.error(err)
//     }
// }