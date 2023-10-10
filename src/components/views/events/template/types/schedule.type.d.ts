export interface Speaker {
    name: string;
    position: string;
    bio: string;
    image: string;
    linkedin: string;
}

export interface Conference {
    name: string;
    description: string;
    startTime: string;
    endTime: string;
    speakers?: Speaker[];
}