import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    // the properties with '?' is an optional property.
    // Also all the optional properties must be created after the required ones or we will have error
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
