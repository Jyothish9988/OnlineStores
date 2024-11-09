import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('http://localhost:8000/accounts/login/', req.body, {
        withCredentials: true, // Allow cookies to be sent and received
      });

      // Store JWT token or handle the response as needed
      res.status(response.status).json(response.data); // Return the response from Django
    } catch (error) {
      res.status(error.response?.status || 500).json({ detail: error.response?.data?.detail || 'Login failed.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
