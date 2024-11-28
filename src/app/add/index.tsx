import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { styles } from "@/app/add/styles";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { linkStorage } from "@/storage/link-storage";

export default function Add() {
    const [category, setCategory] = useState<string>("");
    const [name, setName] = useState<string>();
    const [url, setUrl] = useState<string>();

    async function handleAdd() {
        try {
            if (!category) {
                return Alert.alert("Categoria", "Selecione uma categoria");
            }
    
            if (!name || name.trim() === "") {
                return Alert.alert("Nome", "Informe o nome do link");
            }
    
            if (!url || url.trim() === "") {
                return Alert.alert("URL", "Informe a URL do link");
            }

            await linkStorage.save({
                id: new Date().getTime().toString(),
                category,
                name,
                url
            });

            Alert.alert("Sucesso", "Link adicionado com sucesso!", [
                {
                    text: "OK",
                    onPress: () => router.back()
                }
            ]);
            
        } catch (error) {
            Alert.alert("Erro", "Não foi possível adicionar o link");
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons
                        name="arrow-back"
                        size={32}
                        color={colors.gray[200]}
                    />
                </TouchableOpacity>
                
                <Text style={styles.title}>
                    Novo Link
                </Text>
            </View>

            <Text style={styles.label}>
                Selecione uma categoria
            </Text>

            <Categories
                selected={category}
                onChange={setCategory}
            />

            <View style={styles.form}>
                <Input
                    placeholder="Nome"
                    onChangeText={setName}
                    autoCorrect={false}
                />
                <Input
                    placeholder="URL"
                    onChangeText={setUrl}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <Button
                    title="Adicionar"
                    onPress={handleAdd}
                />
            </View>
        </View>
    );
}