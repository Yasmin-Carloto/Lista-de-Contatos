import axios from 'axios';

const baseUrl = "https://65a73b6794c2c5762da65259.mockapi.io/"
 const api ={
   getContatos: getContatos,

   postContatos: postContato,
  
   putContato: putContato, 

   deleteContatos: deleteContato
}

async function deleteContato(id){
   try {
      const response = await axios.delete(`${baseUrl}/contacts/${id}`)
    } catch (error) {
      console.error("Erro ao deletar contato:", error)
      throw error
    }
}

async function putContato(id, novoContato){
   try {
      const response = await axios.put(`${baseUrl}/contacts/${id}`, novoContato)
    } catch (error) {
      console.error("Erro ao modificar contato:", error)
      throw error
    }
}

 async function getContatos(){
   try {
      const response = await axios.get(`${baseUrl}/contacts`)
      return response.data
   } catch (error) {
      console.error("Erro ao obter contatos:", error)
      throw error 
   }
}

async function postContato(contato){
   try {
      const response = await axios.post(`${baseUrl}/contacts`, contato)
      return response.data 
    } catch (error) {
      console.error("Erro ao incluir contato:", error)
      throw error
    }
  
}
export default api