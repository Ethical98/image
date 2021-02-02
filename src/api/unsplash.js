import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fzjiWhiD8UuQCzOfWCQyiBuGHdRFeW8cbVkh-5RrI4s',
  },
});
