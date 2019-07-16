import React from 'react';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (


    <div className = "main">
      <Router>
        <Navbar/>
      </Router>
      <Footer />
      <div className = "imghrs">
        <img src = "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2017/05/Izakaya-1-1024x683.jpg"/>
        <img src="https://cdn.doordash.com/media/restaurant/cover/KigaruSushi3486BeavertonOR.png"/>
    <ul className = "hours">
      <li>Monday - Saturday: 5PM - 11PM</li>
      <li>Sunday : Closed</li>
    </ul>
  </div>

    <div className = "SushiTab">
      <div class="grid-item">
      <ul>
        <li>Squid   3.5</li>
        <li>Shrimp   4</li>
        <li>Tuna   5</li>
        <li>Salmon   5</li>
        <li>Mackerel   4</li>
        <li>Octopus   4.5</li>
        <li>Eel   6.5</li>
        <li>Egg   3.25</li>
      </ul>
    </div>
      <div class="grid-item">
        <ul>
          <li>Albacore   4.5</li>
          <li>Sweet Shrimp   6.5</li>
          <li>Yellowtail   5</li>
          <li>Surf Clam   3.75</li>
          <li>Salmon Toro   5</li>
          <li>Aburi Mackerel   4.25</li>
          <li>Aburi Salmon   5.25</li>
          <li>Aburi Tuna   5.25</li>
        </ul>
      </div>
      <div class="grid-item">
        <ul>
          <li>Creamy Scallop   3.75</li>
          <li>Salmon Roe   5.25</li>
          <li>Real Crab   5.25</li>
          <li>Smelt Roe   3.5</li>
          <li>Flying Fish Egg   4.25</li>
          <li>Uni   7.5</li>
          <li>Fried Bean Curd   2.5</li>
          <li>Scallop   5</li>
        </ul>
      </div>
      <div class="grid-item">
        <ul>
          <li>Creamy Scallop   3.75</li>
          <li>Salmon Roe   5.25</li>
          <li>Real Crab   5.25</li>
          <li>Smelt Roe   3.5</li>
        </ul>
      </div>
      <div class="grid-item">
        <ul>
          <li>Albacore   4.5</li>
          <li>Yellowtail   5</li>
          <li>Surf Clam   3.75</li>
          <li>Salmon Toro   5</li>
          <li>Octopus   4.5</li>
        </ul>
      </div>
      <div class="grid-item">
        <ul>
          <li>Aburi Mackerel   4.25</li>
          <li>Aburi Salmon   5.25</li>
          <li>Aburi Tuna   5.25</li>
          <li>Scallop   6.5</li>
        </ul>
      </div>
      <div class="grid-item">
        <li>Cucumber Roll (6pc)   4</li>
        <li>Salmon Roll (6pc)   5.5</li>
        <li>Tuna Roll (6pc)   5.5</li>
        <li>Avocado Roll (6pc)   4.75</li>
        <li>Avocu Roll (6pc)   5.75
          <p>
            Avocado, cucumber
          </p>
        </li>
        <li>Kigaru Roll   16.95
          <p>Tuna, albacore, avocado, cucumber, topped with seared salmon, jalapeno, smelt roe, & Kigaru sauce
          </p>
        </li>
        <li>Vegetable Roll   6.5
          <p>Avocado, cucumber, radish sprouts, pickled radish, burdock root, inari
          </p>
        </li>
        <li>Giant Veggie Roll   6.75
          <p>Avocado, cucumber, squash tempura, eggplant tempura, sesame seeds, radish sprouts, topped with edamame
          </p>
        </li>
        <li>Seven Samurai Roll   13.95
          <p>Yellowtail, tuna, smoked salmon, green onion, cucumber, topped with Kigaru sauce & wasabi tobiko
          </p>
        </li>
        <li>Lobster Crab Roll   16.95
          <p>Cajun-spiced lobster & real crab salad, avocado. Deep fried and topped with smelt roe and sesame seeds. Served with yakitori sauce for dipping
          </p>
        </li>
    </div>

      <div class="grid-item">
        <li>Cucumber Roll (6pc)   4</li>
        <li>Salmon Roll (6pc)   5.5</li>
        <li>Tuna Roll (6pc)   5.5</li>
        <li>Avocado Roll (6pc)   4.75</li>
        <li>Avocu Roll (6pc)   5.75
          <p>
            Avocado, cucumber
          </p>
        </li>
        <li>Kigaru Roll   16.95
          <p>Tuna, albacore, avocado, cucumber, topped with seared salmon, jalapeno, smelt roe, & Kigaru sauce
          </p>
        </li>
        <li>Vegetable Roll   6.5
          <p>Avocado, cucumber, radish sprouts, pickled radish, burdock root, inari
          </p>
        </li>
        <li>Giant Veggie Roll   6.75
          <p>Avocado, cucumber, squash tempura, eggplant tempura, sesame seeds, radish sprouts, topped with edamame
          </p>
        </li>
        <li>Seven Samurai Roll   13.95
          <p>Yellowtail, tuna, smoked salmon, green onion, cucumber, topped with Kigaru sauce & wasabi tobiko
          </p>
        </li>
        <li>Lobster Crab Roll   16.95
          <p>Cajun-spiced lobster & real crab salad, avocado. Deep fried and topped with smelt roe and sesame seeds. Served with yakitori sauce for dipping
          </p>
        </li>
      </div>
      <div class="grid-item">
        <li>Cucumber Roll (6pc)   4</li>
        <li>Salmon Roll (6pc)   5.5</li>
        <li>Tuna Roll (6pc)   5.5</li>
        <li>Avocado Roll (6pc)   4.75</li>
        <li>Avocu Roll (6pc)   5.75
          <p>
            Avocado, cucumber
          </p>
        </li>
        <li>Kigaru Roll   16.95
          <p>Tuna, albacore, avocado, cucumber, topped with seared salmon, jalapeno, smelt roe, & Kigaru sauce
          </p>
        </li>
        <li>Vegetable Roll   6.5
          <p>Avocado, cucumber, radish sprouts, pickled radish, burdock root, inari
          </p>
        </li>
        <li>Giant Veggie Roll   6.75
          <p>Avocado, cucumber, squash tempura, eggplant tempura, sesame seeds, radish sprouts, topped with edamame
          </p>
        </li>
        <li>Seven Samurai Roll   13.95
          <p>Yellowtail, tuna, smoked salmon, green onion, cucumber, topped with Kigaru sauce & wasabi tobiko
          </p>
        </li>
        <li>Lobster Crab Roll   16.95
          <p>Cajun-spiced lobster & real crab salad, avocado. Deep fried and topped with smelt roe and sesame seeds. Served with yakitori sauce for dipping
          </p>
        </li>
      </div>

  </div>
</div>

  );
}

export default App;
