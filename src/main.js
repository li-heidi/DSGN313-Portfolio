import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const taggings = [
  "./taggingCorpse/tagging1.png",
  "./taggingCorpse/tagging2.png",
  "./taggingCorpse/tagging3.png",
  "./taggingCorpse/tagging4.png",
  "./taggingCorpse/tagging5.png",
  "./taggingCorpse/tagging6.png",
];

const grids = [
  "./modelGrids/grid1.png",
  "./modelGrids/grid2.png",
  "./modelGrids/grid3.png",
  "./modelGrids/grid4.png",
  "./modelGrids/grid5.png",
  "./modelGrids/grid6.png",
];

const Design = [
  "./objectDesign/page1.png",
  "./objectDesign/page2.png",
  "./objectDesign/page3.png",
  "./objectDesign/page4.png",
  "./objectDesign/page5.png",
  "./objectDesign/page6.png",
];

const Drawings = [
  "./shopDrawings/shop1.png",
  "./shopDrawings/shop2.png",
  "./shopDrawings/shop3.png",
  "./shopDrawings/shop4.png",
  "./shopDrawings/shop5.png",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">      
      Assignment 1
      </br>
      Cadavre Exquis
        <div class="three-model">
    <a href="https://heidi-li-portfolio.vercel.app/exquisite-corpse.png" target="_blank">
          <img src="./exquisite-corpse.png" id="model1" alt="Model 1 Image" />
        </div>

      <div id="images-description">
       <div id="images">
        <a href="https://heidi-li-portfolio.vercel.app/taggingCorpse/tagging1.png" target="_blank">
          <img src="./taggingCorpse/tagging1.png" alt="cube1" />
        </a>
        <a href="https://heidi-li-portfolio.vercel.app/taggingCorpse/tagging2.png" target="_blank">
          <img src="./taggingCorpse/tagging2.png" alt="cube2" />
        </a>
        <a href="https://heidi-li-portfolio.vercel.app/taggingCorpse/tagging3.png" target="_blank">
          <img src="./taggingCorpse/tagging3.png" alt="cube3" />
        </a>
        </div>

       <div id="images"> 
        <a href="https://heidi-li-portfolio.vercel.app/taggingCorpse/tagging4.png" target="_blank">
          <img src="./taggingCorpse/tagging4.png" alt="cube4" />
        </a>
        <a href="https://heidi-li-portfolio.vercel.app/taggingCorpse/tagging5.png" target="_blank">
          <img src="./taggingCorpse/tagging5.png" alt="cube3" />
        </a>
        <a href="https://heidi-li-portfolio.vercel.app/taggingCorpse/tagging6.png" target="_blank">
          <img src="./taggingCorpse/tagging6.png" alt="cube4" />
        </a>
        </div>

       <div id="images">
        <a href="https://cdn.vectorstock.com/i/500p/92/91/surprise-sign-with-colorful-confetti-vector-16439291.jpg" target="_blank">
          <img src="./white.jpg" alt="cube1" />
        </a>
        <a href="https://cdn.vectorstock.com/i/500p/92/91/surprise-sign-with-colorful-confetti-vector-16439291.jpg" target="_blank">
          <img src="./white.jpg" alt="cube2" />
        </a>
        <a href="https://cdn.vectorstock.com/i/500p/92/91/surprise-sign-with-colorful-confetti-vector-16439291.jpg" target="_blank">
          <img src="./white.jpg" alt="cube3" />
        </a>
        </div>

          <h4 id="description">The exquisite corpse interprets human existence through explorations of Astrology and the natural environment. It explores foundational systems and elements influenced by a higher consciousness. Introducing the concept of inevitability and alignment, the exquisite corpse highlights the system complexities of human life.
            Every event in every lifetime is meant to happen serving a purpose. Celestial systems align life with a journey an individual is meant to take. There is an existing path, but it is our decisions that influence their outcomes. These movements of elements correlate with natural cycles rooting a foundation of awareness. This approach allows for an open perspective on human existence allowing a unique interpretation for our individual selves in relation to our context.
          </h4>
        </div>
      </div>

      <div id="project-row">  
        <source src="./video/bonus_video.mp4" type="video/mp4" /> <div id=video">
          <video width="380" height="300" controls>
            <source src="./video/bonus_video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

    <section id="projects">
      <div id="project-row">      
      Assignment 2
      </br>
      Interoperability
        <div class="three-model">
          <div id="model2"></div>
        </div>

      <div id="images-description">
       <div id="images">
        <a href="https://heidi-li-portfolio.vercel.app/modelGrids/grid1.png" target="_blank">
          <img src="./modelGrids/grid1.png" alt="cube1" />
        </a>
        <a href="https://heidi-li-portfolio.vercel.app/modelGrids/grid2.png" target="_blank">
          <img src="./modelGrids/grid2.png" alt="cube2" />
        </a>
        <a href="https://heidi-li-portfolio.vercel.app/modelGrids/grid3.png" target="_blank">
          <img src="./modelGrids/grid3.png" alt="cube3" />
        </a>
        </div>

       <div id="images"> 
        <a href="https://heidi-li-portfolio.vercel.app/modelGrids/grid4.png" target="_blank">
          <img src="./modelGrids/grid4.png" alt="cube4" />
        </a>
        <a href="https://heidi-li-portfolio.vercel.app/modelGrids/grid5.png" target="_blank">
          <img src="./modelGrids/grid5.png" alt="cube3" />
        </a>
        <a href="https://heidi-li-portfolio.vercel.app/modelGrids/grid6.png" target="_blank">
          <img src="./modelGrids/grid6.png" alt="cube4" />
        </a>
        </div>

       <div id="images">
        <a href="https://cdn.vectorstock.com/i/500p/92/91/surprise-sign-with-colorful-confetti-vector-16439291.jpg" target="_blank">
          <img src="./white.jpg" alt="cube1" />
        </a>
        <a href="https://cdn.vectorstock.com/i/500p/92/91/surprise-sign-with-colorful-confetti-vector-16439291.jpg" target="_blank">
          <img src="./white.jpg" alt="cube2" />
        </a>
        <a href="https://cdn.vectorstock.com/i/500p/92/91/surprise-sign-with-colorful-confetti-vector-16439291.jpg" target="_blank">
          <img src="./white.jpg" alt="cube3" />
        </a>
        </div>

          <h4 id="description">The analyzation of different models through import and export modifications transferring between Blender and Rhino. This included observing each model through a series of conversions between methods of 3D geometry representations. Additionally, the fabrication of a digital model allowed for physical outcomes via 3D printing and paper modelling. The character chosen to model was Olaf from Frozen paying careful detail to his form, structure, and features.
          </h4>
        </div>
      </div>


    <section id="projects">
      <div id="project-row">      
      Assignment 3
      </br>
      Object Design
        <div class="three-model">
          <div id="model3"></div>
        </div>

      <div id="images-description">
       <div id="images">
        <a href="https://heidi-li-portfolio.vercel.app/objectDesign/page1.png" target="_blank">
          <img src="./objectDesign/page1.png" alt="cube1" />
        </a>
        <a href="https://heidi-li-portfolio.vercel.app/objectDesign/page2.png" target="_blank">
          <img src="./objectDesign/page2.png" alt="cube2" />
        </a>
        <a href="https://heidi-li-portfolio.vercel.app/objectDesign/page3.png" target="_blank">
          <img src="./objectDesign/page3.png" alt="cube3" />
        </a>
        </div>

       <div id="images"> 
        <a href="https://heidi-li-portfolio.vercel.app/objectDesign/page4.png" target="_blank">
          <img src="./objectDesign/page4.png" alt="cube4" />
        </a>
        <a href="https://heidi-li-portfolio.vercel.app/objectDesign/page5.png" target="_blank">
          <img src="./objectDesign/page5.png" alt="cube3" />
        </a>
        <a href="https://heidi-li-portfolio.vercel.app/objectDesign/page6.png" target="_blank">
          <img src="./objectDesign/page6.png" alt="cube4" />
        </a>
        </div>
      
       <div id="images">
        <a href="https://cdn.vectorstock.com/i/500p/92/91/surprise-sign-with-colorful-confetti-vector-16439291.jpg" target="_blank">
          <img src="./white.jpg" alt="cube1" />
        </a>
        <a href="https://cdn.vectorstock.com/i/500p/92/91/surprise-sign-with-colorful-confetti-vector-16439291.jpg" target="_blank">
          <img src="./white.jpg" alt="cube2" />
        </a>
        <a href="https://cdn.vectorstock.com/i/500p/92/91/surprise-sign-with-colorful-confetti-vector-16439291.jpg" target="_blank">
          <img src="./white.jpg" alt="cube3" />
        </a>
        </div>

          <h4 id="description">Derived from my Exquisite Corpse, The Hologram:  A Timeless Guide dives into the world of the unknown. Something that goes beyond earth, the object acts as a life guide for an individual where no path is unknown but rather destined to be. Never alone on a journey, The Hologram enables higher support giving strength to the individual.
          </h4>
        </div>
      </div>
    <section id="projects">
      <div id="project-row">      
      Assignment 4
      </br>
      Parallax Moderne
        <div class="three-model">
          <div id="model4"></div>
        </div>

      <div id="images-description">
       <div id="images">
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/templeProject/process1.png" target="_blank">
          <img src="./templeProject/process1.png" alt="cube1" />
        </a>
        <a href="https://https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/templeProject/process2.png" target="_blank">
          <img src="./templeProject/process2.png" alt="cube2" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/templeProject/process3.png" target="_blank">
          <img src="./templeProject/process3.png" alt="cube3" />
        </a>
        </div>

       <div id="images"> 
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/templeProject/process4.png" target="_blank">
          <img src="./templeProject/process4.png" alt="cube4" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/templeProject/process5.png" target="_blank">
          <img src="./templeProject/process5.png" alt="cube3" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/templeProject/process6.png" target="_blank">
          <img src="./templeProject/process6.png" alt="cube4" />
        </a>
        </div>

       <div id="images"> 
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/templeProject/process7.png" target="_blank">
          <img src="./templeProject/process7.png" alt="cube4" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/templeProject/process8.png" target="_blank">
          <img src="./templeProject/process8.png" alt="cube3" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/templeProject/process9.png" target="_blank">
          <img src="./templeProject/process9.png" alt="cube4" />
        </a>
        </div>

          <h4 id="description"> Derived from Julia’s corpse, the form takes influence from the art deco period where it emphasizes the underlying light within the brutality within the world. History has been violent yet in the present day, society is still filled with chaos and corruption. Through optimism, we can strive to find the light within the darkness. Taking this idea of hope and optimism, our form aims to create contrasting interior and exterior experiences while keeping the theme consistent. Rather than a typical form, the exterior is cold and dark leaving an eerie feeling while the interior is full of light and intricate patterns creating a welcoming atmosphere. Pulling elements from the exquisite corpse such as the stained glass and geometrical symmetry, allowed us to interconnect the art deco style with current design trends to create our inspired temple.
          </h4>
        </div>
      </div>

    <section id="projects">
      <div id="project-row">      
    
      </br>
      A4 continued
        <div class="three-model">
    <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/placeMaking.jpg" target="_blank">
          <img src="./placeMaking.jpg" id="model1" alt="Model 1 Image" />
        </div>

      <div id="images-description">
       <div id="images">
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/shopDrawings/shop1.png"" target="_blank">
          <img src="./shopDrawings/shop1.png" alt="cube1" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/shopDrawings/shop2.png" target="_blank">
          <img src="./shopDrawings/shop2.png" alt="cube2" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/shopDrawings/shop3.png" target="_blank">
          <img src="./shopDrawings/shop3.png" alt="cube3" />
        </a>
        </div>

       <div id="images"> 
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/shopDrawings/shop4.png target="_blank">
          <img src="./shopDrawings/shop4.png" alt="cube4" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/shopDrawings/shop5.png" target="_blank">
          <img src="./shopDrawings/shop5.png" alt="cube3" />
        </a>
      </div>

       <div id="images">
        <a href="https://cdn.vectorstock.com/i/500p/92/91/surprise-sign-with-colorful-confetti-vector-16439291.jpg"" target="_blank">
          <img src="./white.jpg" alt="cube1" />
        </a>
        <a href="https://cdn.vectorstock.com/i/500p/92/91/surprise-sign-with-colorful-confetti-vector-16439291.jpg" target="_blank">
          <img src="./white.jpg" alt="cube2" />
        </a>
        <a href="https://cdn.vectorstock.com/i/500p/92/91/surprise-sign-with-colorful-confetti-vector-16439291.jpg" target="_blank">
          <img src="./white.jpg" alt="cube3" />
        </a>
        </div>

      </br>
          </h4>
        </div>
      </div>


    <section id="projects">
      <div id="project-row"> 
      Assignment 5
      </br>
      Game Engines
        <div class="three-model">
          <div id="model5"></div>
        </div>

      <div id="images-description">
       <div id="images">
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/gameEngines/game1.png" target="_blank">
          <img src="./gameEngines/game1.png" alt="cube1" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/gameEngines/game2.png" target="_blank">
          <img src="./gameEngines/game2.png" alt="cube2" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/gameEngines/game3.png" target="_blank">
          <img src="./gameEngines/game3.png" alt="cube3" />
        </a>
        </div>

       <div id="images"> 
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/gameEngines/game4.png" target="_blank">
          <img src="./gameEngines/game4.png" alt="cube4" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/gameEngines/game5.png" target="_blank">
          <img src="./gameEngines/game5.png" alt="cube3" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/gameEngines/game6.png" target="_blank">
          <img src="./gameEngines/game6.png" alt="cube4" />
        </a>
        </div>

       <div id="images"> 
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/gameEngines/game7.png" target="_blank">
          <img src="./gameEngines/game7.png" alt="cube4" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/gameEngines/game8.png" target="_blank">
          <img src="./gameEngines/game8.png" alt="cube3" />
        </a>
        <a href="https://li-heidi-portfolio-git-main-li-heidis-projects.vercel.app/gameEngines/game9.png" target="_blank">
          <img src="./gameEngines/game9.png" alt="cube4" />
        </a>
        </div>


          <h4 id="description">Inspired by my Exquisite Corpse that embodies higher entities of the unknown, Celestara brings the concept of inevitability into a galactic metaverse. Rather than a physical place on Earth, my scene explores consciousness in a virtual space where our questions remain with the freedom to adventure through an extraordinary themed gallery. It is a place I find myself when i am lost with accomplished reminders of my past achievements in the form of an immersive project display. The link to my spatial scene is https://www.spatial.io/s/Celestara-67fc223a72cf55d3b72516ed?share=6895184938276451507
          </h4>
        </div>
      </div>

      ${/* Model 2 commented out
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
*/ ""}

    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/olaf.obj");
createThreeScene("#model3", "/3DModels/project3/clock.obj");
createThreeScene("#model4", "/3DModels/project4/temple.obj");
createThreeScene("#model5", "/3DModels/project5/scene.obj");
