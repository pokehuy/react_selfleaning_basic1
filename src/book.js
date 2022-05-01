import React from "react";

const Book = ({ img, title, author }) => {
  //const { img, title, author } = props.book; // if booklist use spread operator for book , then use props instead of props.book
  //const { img, title, author } = props;

  //attribute , eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("you click example button!");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img}></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        example
      </button>
      {/* !!! ATTENTION in the case passing data to the function inside eventhandler, the function will be invoke at the time we render, so we have to put the function inside eventhandler in other arrow function
      <button type="button" onClick={complexExample(author)}> */}
      <button type="button" onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  );
};

export default Book;
