import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: ' Poshan Tracker',
        description: " POSHAN Tracker app provides a 360-degree view of the activities of Anganwadi Centres (AWCs), service deliveries of Anganwadi Workers (AWWs), and complete beneficiary management for pregnant women, lactating mothers, children 0 - 6 years, and adolescent girls.",
        tools: ['Flutter', 'Dart', 'OpenAI API', ],
        role: 'App Developer',
        code: '',
        demo: 'https://play.google.com/store/apps/details?id=com.poshantracker&pli=1',
        image: crefin,
    },
    {
        id: 2,
        name: ' FlairFlax: Ride Hailing App ',
        description: 'Led the development of a ride-sharing app with a unique bidding system inspired by Ola and Uber',
        tools: ['Kotlin',' Android Studio', 'MVVM architecture', 'Firebase', 'Retrofit', 'Room Database', 'GPS'],
        role: 'App Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: ' Real-Time Chat App',
        description: 'Led development of "Pchat," a real-time Android chat app, Implemented real-time messaging via Firebase, ensuring secure access with Firebase authentication. Designed group management features allowing admin-only member addition/removal and group renaming by all members',
        tools: ['Android Development', 'Firebase Cloud Storage', 'Firebase Authentication'],
        code: '',
        role: ' App Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Profit Partner : A restaurant Management App',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['XML', 'Kotlin', 'Firebase Authentication', 'Hilt', 'MVVM'],
        code: '',
        demo: '',
        image: ayla,
        role: 'App Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },