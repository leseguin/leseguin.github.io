import { genericPartProps } from "../../Components/GenericContent/GenericContent";


// export type genericPartProps = {
//     partData : {
//         contentPartTitle : string, 
//         contents : [
//             {
//                 title?: string,
//                 date? : {
//                     from : string,
//                     to : string
//                 }, 
//                 description : [
//                     {
//                         title? : string,
//                         by? : string,
//                         description? : [string]
//                     }
//                 ]
//             }
//         ]
//     }, 
//     partClass? : string
// }

export const languagesData : genericPartProps = {
    partData : {
        contentPartTitle : "Langues", 
        contents : [
            {
                title: "Anglais",
                description : [
                    {
                        title : "TOIEC 905/990 - niveau B2"
                    }
                ]
            },
            {
                title: "Espagnol",
                description : [
                    {
                        title : "niveau B1"
                    }
                ]
            }
        ]
    }
}

export const realisationsData : genericPartProps = {
    partData : {
        contentPartTitle : "Réalisations", 
        contents : [
            {
                title : "2020 - 2021",
                description : [
                    {
                        title : "React Native App",
                        description : ["Stockage de données (Expo – Firebase Auth – Firestore)"]
                    },
                    {
                        title : "Site Web personnel",
                        description : ["(React JS - TypeScript – SASS)"]
                    }
                ]
            },
            {
                title : "2019 - 2020",
                description : [
                    {
                        title : 'Application et logiciel "UFR-Langues"',
                        description : ["effectuer des exercices de latin (Xamarin - C# - XAML)"]
                    },
                    {
                        title : 'Application IOS "TrumpOrWest"',
                        description : ["Jeu - qui a dit la phrase proposée entre Kanye West et Donald Trump ? (Swift – 2 API)"]
                    },
                    {
                        title : 'Application Android "MyRecipeIdea"',
                        description : ["Créer un évènement; idées de recettes; générateur de blagues. (Kotlin - SpoonAcular API - Retrofit)"]
                    }
                ]
            },
            {
                title : "2018 - 2020",
                description : [
                    {
                        title : 'ChatBot "Coach Sportif"',
                        description : ["(Javascript – Python - Firebase - Dialogflow)"]
                    }
                ]
            }
        ]
    }
}

export const toolsData : genericPartProps =  {
    partData : {
        contentPartTitle : "Outils et logiciels", 
        contents : [
            {
                description : [
                    {
                        description : [
                            "Visual Studio – Android Studio - XCode  – Bootstrap – Dialogflow – AWS – Firebase"
                        ]
                    }
                ]
            }
        ]
    }
}


export const skillsData : genericPartProps =  {
    partData : {
        contentPartTitle : "Compétences", 
        contents : [
            {
                description : [
                    {
                        description : [
                            "Swift – Kotlin – Java – JavaScript - TypeScript – HTML – CSS – SASS – React – React Native – Ionic - SQL – C - Python – Angular"
                        ]
                    }
                ]
            }
        ]
    }
}

export const engagementData : genericPartProps = {
    partData : {
        contentPartTitle : "Engagements", 
        contents : [
            {
                title : "2017",
                description : [
                    {
                        title : "Étudiante titulaire au conseil de gestion de l’IUT",
                        description : ["(mandat de 2 ans)"]
                    },
                    // {
                    //     title : "Membre de la Commission de la Vie Etudiante de l’IUT",
                    //     description : ["(mandat de 2 ans)"]
                    // },
                    {
                        title : "Responsable Communication au Bureau Des Etudiants",
                        description : ["(mandat de 1 an)"]
                    },
                    {
                        title : "Membre du Conseil de Département du DUT informatique",
                        description : ["(mandat de 1 an)"]
                    }
                    
                ]
            }
        ]
    }
}

export const experiencesData : genericPartProps = {
    partData : {
        contentPartTitle : "Expériences", 
        contents : [
            {
                title: "Année de Découvertes et de formations",
                date : {
                    from : "Septembre 2020",
                    to : "Février 2021"
                }, 
                description : [
                    {
                        description : [
                            "Chemin de Saint Jacques de Compostelle",
                            "Formations en ligne Coursera & OpenClassRoom",
                        ]
                    }
                ]
            },
            {
                title: "Alternance – CIO Systèmes Embarqués – Saint-Etienne",
                date : {
                    from : "Septembre 2019",
                    to : "Aout 2020"
                }, 
                description : [
                    {
                        description : [
                            "Technicienne de tests et développement logiciels",
                            "Rédaction des documents de qualification pour le CNES"
                       ]
                    }
                ]
            },
            {
                title: "Stage – Robert Gordon University – Aberdeen – Ecosse",
                date : {
                    from : "Avril",
                    to : "Juin 2019"
                }, 
                description : [
                    {
                        description : [
                            "Développement d’un ChatBot pour une application mobile (Dialogflow – Firebase – Javascript – Python)"
                        ]
                    }
                ]
            },
            {
                title: "Emploi d’été - INNOVEL – Vénissieux",
                date : {
                    from : "2017",
                    to : "2018"
                }, 
                description : [
                    {
                        description : [
                            "Fabrication/montage de produits électroniques, gestion des entrées et du stock, conditionnement"
                        ]
                    }
                ]
            }
        ]
    }
} 


export const formationsData : genericPartProps = {
    partData : {
        contentPartTitle : "Formations et Certifications",
        contents : [
            {
            title : "Coursera - Université en ligne - Spécialisations et projets",
            date : {
                from : "2020",
                to : "2021"
            },
            description : [{
                title : "Full-Stack Web Development with React Spécialisation",
                by : "The Hong Kong University of Science and Technology"
            },
            {
                title : "Software Product Management",
                by : "University of Alberta - Canada"
            },
            {
                title : "Swift 5 iOS Application Developer",
                by : "LearnQuest"
            }, 
            {
                title : "Kotlin for Java Developers",
                by: "JetBrains",
            }
        ]},
        {
            title : "Licence Professionnelle Métiers de l’Informatique",
            date : {
                from : "2019",
                to : "2020"
            },
            description : [{
                title : "Développement d'applications pour plateformes mobiles",
                by : "IUT de Clermont-Ferrand"
            }]
        },
        {
            title : "DUT informatique",
            date : {
                from : "2017",
                to : "2019"
            },
            description : [{
                by : "IUT de Clermont-Ferrand"
            }]
        },
        {
            title : "Baccalauréat Scientifique",
            date : {
                from : "",
                to : "2017"
            },
            description : [{
                title :  "spécialité informatique (ISN)",
                by : "Lycée Marcel Sembat - Vénissieux"
            }]
        }
    ] 
    }
}


export const hobbiesData : genericPartProps = {
    partData : {
        contentPartTitle : "Loisirs",
        contents : [{
            description : [ 
            {
                title : "Crossfit"
            },
            {
                title : "Histoire"
            }, 
            {
                title : "Voyage"
            }, 
            {
                title : "Dessin"
            },
            {
                title : "Rock",
                description : [
                    "Janis Joplin",
                    "Simon and Garfunkel",
                    "Naïve New Beaters …"
                ]
            },
        ]
        }] 
    }
}