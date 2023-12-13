import React from 'react';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <header className="bg-dark text-white text-center p-4">
        <h1 className="display-4">Welcome to Resource Rover</h1>
        <p className="lead">Explore the universe of knowledge</p>
      </header>
      <main className="p-4">
        <section className="mb-4">
          <h2 className="h4">Featured Resources</h2>
          {/* Add your featured resource components here */}
        </section>
        <section>
          <h2 className="h4">Latest Topics</h2>
          {/* Add your latest topic components here */}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
