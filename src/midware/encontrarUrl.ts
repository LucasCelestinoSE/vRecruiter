const firebase = require("firebase/app");
const { getStorage, ref, uploadBytes } = require("firebase/storage");

async function getImageDownloadURL(filePath: string): Promise<string> {
    try {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(filePath);
      const downloadURL = await fileRef.getDownloadURL();
      return downloadURL;
    } catch (error) {
      console.error('Erro ao obter o URL de download da imagem:', error);
      throw error;
    }
  }
  
  // Exemplo de uso
  const filePath = 'caminho/para/a/imagem.jpg';
  
  getImageDownloadURL(filePath)
    .then((downloadURL) => {
      console.log('URL de download da imagem:', downloadURL);
      // Faça algo com o URL da imagem, como exibir no navegador
    })
    .catch((error) => {
      // Lida com erros
    });