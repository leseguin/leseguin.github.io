export type ExperienceType = {
    name : string,
    date : {
        from : string,
        to : string
    },
    descriptions : string[]
}

export type FormationType = {
    name : string,
    date : {
        from : string,
        to : string
    },
    descriptions : [
        {
            formation: string,
            by : string
        },
        {
            formation: string,
            by : string
        },
        {
            formation: string,
            by : string
        }
    ]
}

export type lineDescriptionType =  {
    name : string,
    description : string
}

export type DiversType = {
    title : string,
    divers : Array<lineDescriptionType>
}