import React from "react";

// header components
function Header({ heading }) {
  return (
    <header className="block">
      <h2>{heading}</h2>
    </header>
  );
}
// body component
function Body({ contents }) {
  return (
    <main className="block">
      <p>{contents}</p>
      <p>You can find the React doc at https://react.dev/</p>
    </main>
  );
}

function App() {
  return (
    <>
      <Header heading="Welcome to this course!" />
      <Body
        contents="React (also known as React.js or ReactJS) is a free and open-source
          front-end JavaScript library for building user interfaces based on
          components. It is maintained by Meta (formerly Facebook) and a
          community of individual developers and companies. React can be used to
          develop single-page, mobile, or server-rendered applications with
          frameworks like Next.js. Because React is only concerned with the user
          interface and rendering components to the DOM, React applications
          often rely on libraries for routing and other client-side
          functionality."
      />
    </>
  );
}

export default App;
