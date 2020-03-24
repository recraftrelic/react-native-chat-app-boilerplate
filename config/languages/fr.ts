import { AppLanguage } from '../languages'

export const fr: AppLanguage = {
    searchPlacerHolder: "Rechercher des chats",
    messagePlacerHolder: "Tapez le texte ici pour le message...",
    namePlaceholder: "Nom complet",
    usernamePlacerHolder: "Nom d'utilisateur",
    emailPlacerHolder: "Email",
    passwordPlacerHolder: "Mot de passe",
    loginButton: "S'identifier",
    logoutButton: "Se déconnecter",
    signupButton: "S'inscrire",
    signupCheck: "Si vous n'avez pas de compte",
    chatTitle: "Chattes",
    appName: "Recraft Chat App",
    blockButton: "Bloquer",
    reportButton: "rapport",
    deleteButton: "Supprimer la conversation",
    defaultLanguage: "Idioma predeterminado",
    defaultTheme: "Tema oscuro",
    loginValidation : {
      username: `Nom d'utilisateur est nécessaire`,
      password: `Mot de passe requis`,
      passwordLength: 'Longueur du mot de passe entre 6 et 12',
    },
    signupValidation : {
      name: `Full Name is required`,
      username: `Nom d'utilisateur est nécessaire`,
      email: `L'email est requis`,
      validEmail: 'Veuillez saisir un e-mail valide',
      password: `Mot de passe requis`,
      passwordLength: 'Longueur du mot de passe entre 6 et 12',
    },
}
