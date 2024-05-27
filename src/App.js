import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="home">
        <h1>Eric Van de Lande</h1>
        <p>Professional Developer and Cloud Specialist</p>
        <p>GitHub: <a href="https://github.com/EricVan14">EricVan14</a></p>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>Detail your background, interests, and professional goals here.</p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>Machine learning algorithms</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>Data staging, data analytics, and data mining</li>
          <li>Windows based applications</li>
          <li>Node.js</li>
          <li>Junit testing</li>
          <li>Azure DevOps</li>
          <li>Multi-threaded programming</li>
          <li>Info Retrieval using large language models</li>
          <li>Android Studio</li>
          <li>JavaScript</li>
          <li>C++</li>
          <li>TypeScript</li>
          <li>Angular</li>
          <li>React</li>
          <li>PostgreSQL</li>
          <li>Software Architecture</li>
        </ul>
      </section>
      <section id="education">
        <h2>Education</h2>
        <p>University of Ottawa – Faculty of Engineering, Ottawa, Ontario<br />
           2021 - 2024<br />
           Bachelor of Science, Major in Computer Science</p>
        <p>University of Ottawa – Faculty of Engineering, Ottawa, Ontario<br />
           2018 - 2021<br />
           Bachelor of Engineering, Major in Chemical Engineering (to Year 3A)</p>
        <p>Sir John A. Macdonald Secondary School – Waterloo, Ontario<br />
           2014 - 2018<br />
           • AP Program (advanced placement)</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <h3>Honours Project</h3>
        <p>Detection of Tor/VPN/Proxy traffic in Web access logs using ML, 2024</p>
        <ul>
          <li>Created algorithms for feature extraction/selection.</li>
          <li>Created supervised machine learning model using python-scikit learn and Random Forest classifier.</li>
          <li>Detects Tor traffic within PCAP files at 97% accuracy.</li>
        </ul>
        <h3>Course Booking App</h3>
        <p>Created using Android Studio, 2022</p>
        <ul>
          <li>Allows different user types to login and enroll in/assign themselves as a student or professor to different university classes (using SQL).</li>
          <li>Allows planning out schedules.</li>
        </ul>
        <h3>FUT Draft App</h3>
        <p>Personal project, 2022</p>
        <ul>
          <li>Game made in Android Studio and based off the video game FIFA.</li>
          <li>Allows players to select a team of real soccer players complete with stats, ratings, and chemistry points.</li>
        </ul>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <h3>SaskPower – Regina, Saskatchewan (in office), 2023</h3>
        <ul>
          <li>Analyzed, designed, and developed applications using the latest technologies.</li>
          <li>Application UI design, JSON data modelling, bug fixing, and problem solving.</li>
          <li>Collaborative development using Git and Azure DevOps.</li>
          <li>Gathered functional requirements from external and/or internal customers and end-users.</li>
        </ul>
        <h3>Metal Pros - Ottawa, Ontario, 2021-2022</h3>
        <ul>
          <li>Prepared and organized shipments and orders in a fast-paced, ever-changing environment.</li>
          <li>Demonstrated advanced problem-solving, teamwork, and efficiency skills.</li>
          <li>Planned organization strategies for a new facility.</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:eric.vandelande@gmail.com">eric.vandelande@gmail.com</a></p>
        <p>Address: 89 Nepean St. Ottawa, Ontario</p>
        <p>Phone: 519-635-3681</p>
        <form action="mailto:eric.vandelande@gmail.com" method="post" enctype="text/plain">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      <footer>
        <p>&copy; 2024 Eric Van de Lande</p>
      </footer>
    </div>
  );
}

export default App;
