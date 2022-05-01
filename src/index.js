import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";

import Book from "./book"; // here bcs we use export default then we can change Book in this line 6 to anyname (dont forget to change <Book></Book> in line 166 to this name also)
import { books } from "./books"; // if use just export before const smt then use {} and the name must be exact like export file
import { greeting } from "./testing/testing";
// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element with closign tag
// formatting: same line with return must be the first html tag or the pretasis

// function Greeting() {
//   return (
//     <>
//       <div>
//         <h1>hello world</h1>
//       </div>
//       <div>
//         <ul>
//           <li>
//             <a href="#">hi hi</a>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

//Nested Component
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>John doe</h2>;
// const Message = () => {
//   return <p>This is my message</p>;
// };

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {} , 'hello world'))
// }
// const firstBook = {
//   author: "Graham Norton",
//   title:
//     "Home Stretch: THE PERFECT SUMMER READ + THE SUNDAY TIMES BESTSELLER + WINNER OF THE AN POST IRISH POPULAR FICTION AWARDS",
//   img: "https://m.media-amazon.com/images/I/41a7MG2tXWL._AC_UL640_FMwebp_QL65_.jpg",
// };

// const secondBook = {
//   author: "Colleen Hoover",
//   title: "Reminders of Him: A Novel",
//   img: "https://m.media-amazon.com/images/I/617uZq23IPL._AC_UL640_FMwebp_QL65_.jpg",
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         <p> this is the description that the book will show in the component and the component will show this under the author's name
//         </p>
//       </Book>
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// const Book = (props) => {
// //const Book = ({img, title, author, children}) => {
//   const {img, title, author} = props;
//   return (
//     <article className="book">
//       <img src={img}></img>
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {/* <p>{console.log(props)}</p>
//       <p>{props.job}</p>
//       <p>{props.number}</p> */}
//       {props.children}
//     </article>
//   );
// };

// removed to new file

// const books = [
//   {
//     id: 1,
//     author: "Graham Norton",
//     title:
//       "Home Stretch: THE PERFECT SUMMER READ + THE SUNDAY TIMES BESTSELLER + WINNER OF THE AN POST IRISH POPULAR FICTION AWARDS",
//     img: "https://m.media-amazon.com/images/I/41a7MG2tXWL._AC_UL640_FMwebp_QL65_.jpg",
//   },
//   {
//     id: 2,
//     author: "Colleen Hoover",
//     title: "Reminders of Him: A Novel",
//     img: "https://m.media-amazon.com/images/I/617uZq23IPL._AC_UL640_FMwebp_QL65_.jpg",
//   },
//   {
//     id: 3,
//     author: "Mitch Albom",
//     title: "The Stranger in the Lifeboat: A Novel",
//     img: "https://m.media-amazon.com/images/I/91IjGWlPWgL._AC_UL640_FMwebp_QL65_.jpg",
//   },
// ];

// const names = ["huy", "ngoc", "tu"];
// const newNames = names.map((name) => {
//   //console.log(name);
//   return <h1>{name}</h1>;
// });

// console.log(newNames);

// cach 1
// const BookList = () => {
//   //return <section className="booklist">{newNames}</section>;
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         const {img,title,author} = book;
//         return (
//           <div>
//             {/* <img src={book.img}></img>
//             <h1>{book.title}</h1>
//             <h4>{book.author}</h4> */}
//             <img src={img}></img>
//             <h1>{title}</h1>
//             <h4>{author}</h4>
//           </div>
//         );
//       })}
//     </section>
//   );
// };

//cach 2
const BookList = () => {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        //const {img,title,author} = book;
        //return <Book key={book.id} book={book}></Book>;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

// removed to new file
// const Book = ({ img, title, author }) => {
//   //const { img, title, author } = props.book; // if booklist use spread operator for book , then use props instead of props.book
//   //const { img, title, author } = props;

//   //attribute , eventHandler
//   //onClick, onMouseOver
//   const clickHandler = (e) => {
//     console.log(e);
//     console.log(e.target);
//     alert("you click example button!");
//   };
//   const complexExample = (author) => {
//     console.log(author);
//   };
//   return (
//     <article
//       className="book"
//       onMouseOver={() => {
//         console.log(title);
//       }}
//     >
//       <img src={img}></img>
//       <h1 onClick={() => console.log(title)}>{title}</h1>
//       <h4>{author}</h4>
//       <button type="button" onClick={clickHandler}>
//         example
//       </button>
//       {/* !!! ATTENTION in the case passing data to the function inside eventhandler, the function will be invoke at the time we render, so we have to put the function inside eventhandler in other arrow function
//       <button type="button" onClick={complexExample(author)}> */}
//       <button type="button" onClick={() => complexExample(author)}>
//         complex example
//       </button>
//     </article>
//   );
// };

ReactDOM.render(<BookList />, document.getElementById("root"));
//createRoot(document.getElementById("root")).render(<BookList />);
