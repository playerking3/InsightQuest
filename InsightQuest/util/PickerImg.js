import * as ImagePicker from 'expo-image-picker';

export async function pickImage(setImageUri, tipo = "galeria") {
    // Pedir permissão para acessar a biblioteca de fotos
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    let result = {}

    // Verifica se a permissão não foi concedida
    if (status !== 'granted') {
        // Exibe uma mensagem de erro na tela
        Alert.alert('Desculpe, precisamos de permissões da biblioteca de fotos para fazer isso funcionar!');
        return; // Mata o processamento
    }

    if (tipo === "galeria") {
        // Permitir que o usuário selecione uma imagem da biblioteca
        result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

    } else {
        // Permitir que o usuário selecione uma imagem da biblioteca
        result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    }

    // Verifica se não deu erro
    if (!result.canceled) {
        // Passa a uri da imagem para o useState, para poder ser exibida
        setImageUri(result.assets[0].uri)
    }

}