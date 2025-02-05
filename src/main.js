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

const Tagging = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
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

          <h4 id="description">The analyzation of different models through import and export modifications transferring between Blender and Rhino. This included observing each model through a series of conversions between methods of 3D geometry representations. Additionally, the fabrication of a digital model allowed for physical outcomes via 3D printing and paper modelling. The character chosen to model was Olaf from Frozen paying careful detail to his form, structure, and features.
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
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
