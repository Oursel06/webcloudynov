import { router } from 'expo-router';

export function logout() {
    router.replace('/connexion');
}