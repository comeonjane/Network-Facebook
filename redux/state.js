let rerenderEntireTree=()=>{
    alert('blablabla');
}

let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Hi.How are you?', likescount: 15 + " " + "likes" },
            { id: 2, message: 'Hi.How is she?', likescount: 20 + " " + "likes" },
            { id: 3, message: 'Hi.Where is she?', likescount: 30 + " " + "likes" }
        ],
        newPostText: 'It-',

    },


    messagePage: {

        dialogs: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Lera' },
            { id: 3, name: 'Sasha' },
            { id: 4, name: 'Andrey' },
            { id: 5, name: 'Max' },
            { id: 6, name: 'Max' },
            { id: 7, name: 'Max' },
            { id: 8, name: 'Max' },],
        messages:
            [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you there?' },
                { id: 3, message: 'what did you eat today?' },
                { id: 3, message: 'what did you got today?' },
                { id: 3, message: 'what did you bought today?'} ]
    } }
    
    window.state=state;    
    export const addPost= () => {
        let newPost = {
            id: 5,
            message:state.profilePage.newPostText,
            likescount:0
        }
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText='';
        rerenderEntireTree(state);
    }

    export const UpdateNewPostText=(newText)=>{
        state.profilePage.newPostText=newText;
        rerenderEntireTree(state);
    }
    export const subscribe=(observer)=>{
         rerenderEntireTree=observer;


    }

export default state;