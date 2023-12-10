
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { supabase } from "../supabase";
import { StatusBar } from "expo-status-bar";


export default function HomeScreen() {

    const bucketName = 'ejemplos_ejercicios';
    const folderPath = 'ejercicio1';
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                // Obtén la lista de archivos en la carpeta
                const { data, error } = await supabase.storage.from(bucketName).list(folderPath);

                if (error) {
                    console.error('Error al obtener la lista de archivos:', error);
                    return;
                }

                // Filtra la lista para obtener solo los archivos de imagen
                const imageFiles = data;

                if (imageFiles.length > 0) {
                    // Construye la URL de la primera imagen
                    const firstImageURL = await supabase.storage
                        .from(bucketName)
                        .createSignedUrl(`${folderPath}/${imageFiles[2].name}`, 60);

                    // Actualiza el estado con la URL de la primera imagen
                    setImageURL(firstImageURL.data.signedUrl);
                } else {
                    console.warn('No se encontraron archivos de imagen en la carpeta.');
                }
            } catch (error) {
                console.error('Error general:', error);
            }
        };

        // Llama a la función para obtener y mostrar la primera imagen
        fetchImages();
    }, []); // El segundo argumento del useEffect es un array de dependencias vacío, para que se ejecute solo una vez al montar el componente


    return (
        <View style={styles.container}>
            <StatusBar color='#fff' />
            {imageURL ? (
                <Image source={{ uri: imageURL }} style={styles.imgStyle} />
            ) : (
                <Text>No hay imágenes disponibles en la carpeta.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',

    },
    imgStyle: {
        width: 250,
        height: 250,
        borderRadius: 10,
    },
    logInContainer: {
        borderWidth: 1,
        borderColor: 'lightgray',
    },
});