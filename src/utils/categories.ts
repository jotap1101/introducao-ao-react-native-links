import { MaterialIcons } from '@expo/vector-icons';

type Category = {
    id: string;
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export const categories: Category[] = [
    { id: '1', name: 'Curso', icon: 'code' },
    { id: '2', name: 'Projeto', icon: 'folder' },
    { id: '3', name: 'Site', icon: 'language' },
    { id: '5', name: 'Artigo', icon: 'newspaper' },
    { id: '6', name: 'Vídeo', icon: 'movie' },
    { id: '7', name: 'Documentação', icon: 'content-paste' },
];
