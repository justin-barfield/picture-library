import axios from 'axios';
/* TODO: validate api calls' syntax */
export default {

    // Sign up
    signUp: function(data) {
        return axios.post("/api/signup", data )
            .catch( err => console.log(err.response));
    },

    signIn: function(data) {
        console.log('in Api.js signIn data', data);
        return axios.post("/api/signin/", data )
            .catch( err => console.log(err.response));
    },

    // Get all pictures for event
    getEventPics: function() {
        return axios.get("/event/pics");
    },

    // Get all events (list)
    getEvents: function(data) {
        console.log('in api.getEvents user email ', data);
        //return axios.get("/events", data);
        return axios.get(`/events?email=${data}`);
    },

    getEventsByUserEmail: function(data){
        return axios.post("/events/:email", data)
    },
    // Create event
    createEvent: function(data) {
        return axios.post("/events/newevent", data)
    },

    // Upload picture
    uploadPic: function(data) {
        return axios.post("/api/uploadpics", data)
    },

    // Load Events
    // loadEvents: function() {
    //     return axios.get("/api/allevents")
    // },

    // Get event subscription status
    getSubStatus: function(/* Logged in user info here */) {
        return axios.get("/api/substatus")
    },

    // Subscribe a user to an event based on their email address and event ID
    /* TODO: verify api routes are valid syntax */
    subscribe: function( data ) {
        return axios.post("/api/:id/subscribe", data)
    },

    // Load specific event
    loadSingleEvent: function( data ) {
        console.log('in Api.js - loadSingleEvent ', data);
        return axios.get(`/events/?event_id=${data}`);
    },

    // Load images uploaded by one person
    getMyPics: function( data ) {
        return axios.get("/api/:id/pictures", data)
    },

    // Is auth
    isAuth: function() {
        return axios.get("/auth/isauth")
    }
}