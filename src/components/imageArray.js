import column from '../img/columnsdesign.webp';
import mastering from '../img/mastering.webp';
import banana from '../img/bananashop.webp';
import todo from '../img/Todo.webp';
import quiz from '../img/Quiz.webp';
import sweardle from '../img/sweardle.webp';
import axios from '../img/axios.webp';
import mern from '../img/mern-full-stack.png';

export const imageArray = [
  {
    id: 0, img: mern, 
    title: 'Full Stack MERN', 
    text: '" Work In Progress" - Login authentication, blog posting, express server, heroku', 
    color: '#F2BC8D', 
    url: 'https://shauns-mern-project.herokuapp.com'
  },
  {
    id: 1, img: sweardle, 
    title: 'M15+', 
    text: 'Wordle with only profanity? ', 
    color: '#98D0DF', 
    url: 'https://musical-froyo-937a39.netlify.app/'
  },
  {
    id: 2, img: banana, 
    title: 'Banana Store', 
    text: 'React store with a mock product api and Stripe payment.', 
    color: '#F4A86A', 
    url: 'https://playful-pudding-43fa23.netlify.app'
  }, 
  {
    id: 3, img: quiz, 
    title: 'Quiz', 
    text: 'State. Many, many states.', 
    color: '#F4A86A', 
    url: 'https://elegant-pony-0acf58.netlify.app/'
}, 
  {
    id: 4, img: todo, 
    title: 'Todo List', 
    text: 'Simple array manipulation with local storage.', 
    color: '#90ABD1', 
    url: 'https://marvelous-kheer-2d615e.netlify.app/'
} ,
  {
    id: 5, img: mastering, 
    title: 'Mastering Website', 
    text: 'Among the first websites I\'d created, this is my current Mastering business.', 
    color: '#FFE07B', 
    url: 'https://www.digital-bath-studio.com/'
}, 
  {
    id: 6, img: column, 
    title: 'Delicious Nav', 
    text: 'A website template.  I really enjoy the columns which act as navigation.', 
    color: '#F2BC8D', 
    url: 'https://creative-cactus-5109fd.netlify.app/'
}
,
{
  id: 7, img: axios, 
  title: 'Axios Examples', 
  text: 'CRUD applications', 
  color: '#F4A86A', 
  url: 'https://preeminent-buttercream-25f827.netlify.app/'
}
]; 
