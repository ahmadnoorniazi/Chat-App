import {database} from '../firebase';

const messageRef = database.ref('messages');

export const addMessage = (key = Date.now(), { uid,content }) => {
  return {
    type: 'ADD_MESSAGE',
    content,
    key,
    uid
  };
};

export const removeMessage = (key) => {
  return {
    type: 'REMOVE_MESSAGE',
    key
  };
};  

export const createMessage = ({content,uid}) => {
  return (dispatch) => {
    const message = {
      content,
      uid,
      timeStamp:Date.now()
    };

    messageRef.push(message);
  };
};

export const destroyMessage = (key) => {
  return (dispatch) => {
    messageRef.child(key).remove().then(() => {
      dispatch(removeMessage(key));
    });
  };
};

export const startListeningForMessages = () => {
  return (dispatch) => {
    messageRef.on('child_added', (snapshot) => {
      dispatch(addMessage(snapshot.key,snapshot.val())); 
    });

    messageRef.on('child_removed', (snapshot) => {
      dispatch(removeMessage(snapshot.key));
    });

  };
};