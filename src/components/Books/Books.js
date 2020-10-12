import React from "react";
import { withRouter } from "react-router-dom";
import "./Books.css";
import FreeBook from "../Free Book/FreeBook";
import Bk1 from "./Book Images/A-Knight-In-Shining-Armor.jpg"
import BK2 from "./Book Images/Gone-With-The-Wind.jpg"
import BK3 from "./Book Images/Jane-Eyre.jpg"
import BK4 from "./Book Images/Outlander.jpg"
import BK5 from "./Book Images/Pride-And-Prejudice.jpg"
import BK6 from "./Book Images/Sense-And-Sensibility.jpg"
import BK7 from "./Book Images/The-Notebook.jpg"
import BK8 from "./Book Images/The-Princess-Bride.jpg"

// --------------------------Book Information-----------------------
// ......................Good Discription length.toExponential..............................................................................................................................................................................................................................
const bk1 = "A Knight in Shining Armor";
const bk1Disc = `
The lovely Dougless Montgomery is abandoned in an English church where suddenly appears a Knight in Shining Armor…from the 1500s. It’s Nicholas Stafford, Earl of Thornwyck, who has come to rescue his damsel in distress.
`;
const buyLink1 = `
https://www.amazon.com/Knight-Shining-Armor-Jude-Deveraux/dp/B00ZATW8B0/ref=sr_1_2?crid=3NSCP1VO3NV4K&dchild=1&keywords=a+knight+in+shining+armor+jude+deveraux&qid=1602542521&s=books&sprefix=a+knight+in+sh%2Caps%2C181&sr=1-2
`;

const bk2 = "Gone With The Wind";
const bk2Disc = `
Spoiled, headstrong Scarlett O’Hara finds herself in dire straights during the Civil War. Her family’s fortune and plantation are in tatters, and Scarlett uses every wile in her toolkit to keep her family and land out of poverty. 
`;
const buyLink2 = `
https://www.amazon.com/Gone-Wind-Margaret-Mitchell/dp/1784876119/ref=sr_1_2?crid=JY4P67SY0VHL&dchild=1&keywords=gone+with+the+wind+book+margaret+mitchell&qid=1602542606&sprefix=gone+with+the+wind+book+m%2Cstripbooks%2C183&sr=8-2
`;

const bk3 = "Jayne Eyre";
const bk3Disc = `
Jane Eyre, an orphan and an outcast, accepts a governess position for a young girl in a somewhat mysterious situation with a dark and brooding master, Edward Rochester. What secrets hide in Thornfield Hall? And what will Jane do once she uncovers Mr. Rochester’s dark past?
`;
const buyLink3 = `
https://www.amazon.com/Jane-Eyre-Charlotte-Bronte/dp/B08B37VRGJ/ref=sr_1_1_sspa?crid=374EMWK0CISBM&dchild=1&keywords=jane+eyre+book&qid=1602542640&sprefix=jane+Ey%2Caps%2C188&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFNWDJER1QyM05QSEEmZW5jcnlwdGVkSWQ9QTEwMjg4OTgzQThLSThON1hZOExQJmVuY3J5cHRlZEFkSWQ9QTA1NTEzNDMyUzBRM0YwRjY0MTg4JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==
`;

const bk4 = "Outlander";
const bk4Disc = `
Claire is thrust back in time to Scotland in the 1700s, where she meets Jamie Fraser, a Scotts warrior who teaches Claire love that she’s never known. But she still has a husband back in her own time, one patently different from the wild and wonderful Scotsman. Who will she choose?
`;
const buyLink4 = `
https://www.amazon.com/Outlander-Diana-Gabaldon/dp/B007CGWOSQ/ref=sr_1_8?crid=3DHCN9AF0L6D5&dchild=1&keywords=outlander+book&qid=1602542673&sprefix=outlander+b%2Caps%2C189&sr=8-8
`;

const bk5 = "Pride and Prejudice";
const bk5Disc = `
By far the most beloved love story of all time, Pride and Prejudice is a great place to start. Elizabeth Bennett, Mr. Darcy, and the situation is set up in the first line: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
`;
const buyLink5 = `
https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/1676097708/ref=sr_1_1_sspa?crid=3AQK76R6JN56Y&dchild=1&keywords=pride+and+prejudice+book&qid=1602542696&sprefix=pride+and+%2Caps%2C187&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyR1o0T1pFS1lBOEI5JmVuY3J5cHRlZElkPUEwNDM5ODMwRzVBVU4yTkpPQ1IzJmVuY3J5cHRlZEFkSWQ9QTAwOTU2NjRIWVBDRUVVSE1IMTkmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl
`;

const bk6 = "Sense and Sensibility";
const bk6Disc = `
Another amazing story from the master Jane Austen, Sense and Sensibility shows us two women in love. Marianne Dashwood is impulsive in her love for the charming Willoughby, and Elinor Dashwood is sensible but struggles to conceal her angst with her love for Edward Ferras.
`;
const buyLink6 = `
https://www.amazon.com/Sense-Sensibility-Penguin-Classics-Austen/dp/0141439661/ref=sr_1_3?dchild=1&keywords=sense+and+sensibility+book&qid=1602542740&s=books&sr=1-3
`;

const bk7 = "The Notebook";
const bk7Disc = `
This man can write a love story. An older gentleman visits a woman with a fading memory every morning to read to her from a well-worn notebook. The notebook he reads contains the love story of Noah Calhoun and Allie Nelson and Allie’s quandary: to marry her fiancé or give it all up for Noah.
`;
const buyLink7 = `
https://www.amazon.com/Notebook-Student-Novel-Learning-Book-ebook/dp/B00N18JTK0/ref=sr_1_1?dchild=1&keywords=the+notebook&qid=1602542766&s=books&sr=1-1
`;

const bk8 = "The Princess Bride";
const bk8Disc = `
An immigrant father reads to a young boy recovering from pneumonia who wants to know if the book has any sports or is it boring. His father says, "Fencing. Fighting. Torture. Poison. True love. Hate. Revenge. Giants. Hunters. Bad men. Good men. Beautifulest ladies. Snakes. Spiders. 
`;
const buyLink8 = `
https://www.amazon.com/Princess-Bride-Deluxe-Morgensterns-Adventure/dp/1328948854/ref=sr_1_1?crid=34XHKJ9NUIVMR&dchild=1&keywords=the+princess+bride+original+book&qid=1602542811&s=books&sprefix=the+pricess+bride%2Cstripbooks%2C189&sr=1-1
`;



// ---------------------------------Structure------------------

function Books() {
  return (
    <body>
      <div className="booksComponent">
        {/* ---------------------------------Row1------------------ */}
        <div className="bookRow">
          <div className="booksBook">
            <img src={Bk1} className="bFreeBook" />
            <h5 className="title">{bk1}</h5>
            <p className="bkDiscription">{bk1Disc}</p>
            <div className="buyButtonContainer">
            <li className="buyLinkButtonBox">
              <a href={buyLink1}>
                <span className="buyLinkButton">Purchase</span>
              </a>
            </li>
            </div>
          </div>
          <div className="booksBook">
            <img src={BK2} className="bFreeBook" />
            <h5 className="title">{bk2}</h5>
            <p className="bkDiscription">{bk2Disc}</p>
            <div className="buyButtonContainer">
            <li className="buyLinkButtonBox">
              <a href={buyLink2}>
                <span className="buyLinkButton">Purchase</span>
              </a>
            </li>
            </div>
          </div>
          <div className="booksBook">
            <img src={BK3} className="bFreeBook" />
            <h5 className="title">{bk3}</h5>
            <p className="bkDiscription">{bk3Disc}</p>
            <div className="buyButtonContainer">
            <li className="buyLinkButtonBox">
              <a href={buyLink3}>
                <span className="buyLinkButton">Purchase</span>
              </a>
            </li>
            </div>
          </div>
        </div>
{/* -------------------------------------Row2----------------------- */}
        <div className="bookRow">
          <div className="booksBook">
            <img src={BK4} className="bFreeBook" />
            <h5 className="title">{bk4}</h5>
            <p className="bkDiscription">{bk4Disc}</p>
            <div className="buyButtonContainer">
            <li className="buyLinkButtonBox">
              <a href={buyLink4}>
                <span className="buyLinkButton">Purchase</span>
              </a>
            </li>
            </div>
          </div>
          <div className="booksBook">
            <img src={BK5} className="bFreeBook" />
            <h5 className="title">{bk5}</h5>
            <p className="bkDiscription">{bk5Disc}</p>
            <div className="buyButtonContainer">
            <li className="buyLinkButtonBox">
              <a href={buyLink5}>
                <span className="buyLinkButton">Purchase</span>
              </a>
            </li>
            </div>
          </div>
          <div className="booksBook">
            <img src={BK6} className="bFreeBook" />
            <h5 className="title">{bk6}</h5>
            <p className="bkDiscription">{bk6Disc}</p>
            <div className="buyButtonContainer">
            <li className="buyLinkButtonBox">
              <a href={buyLink6}>
                <span className="buyLinkButton">Purchase</span>
              </a>
            </li>
            </div>
          </div>
        </div>
{/* ------------------------------Row3----------------------------------- */}
        <div className="bookRow">
          <div className="booksBook">
            <img src={BK7} className="bFreeBook" />
            <h5 className="title">{bk7}</h5>
            <p className="bkDiscription">{bk7Disc}</p>
            <div className="buyButtonContainer">
            <li className="buyLinkButtonBox">
              <a href={buyLink7}>
                <span className="buyLinkButton">Purchase</span>
              </a>
            </li>
            </div>
          </div>
          <div className="booksBook">
            <img src={BK8} className="bFreeBook" />
            <h5 className="title">{bk8}</h5>
            <p className="bkDiscription">{bk8Disc}</p>
            <div className="buyButtonContainer">
            <li className="buyLinkButtonBox">
              <a href={buyLink8}>
                <span className="buyLinkButton">Purchase</span>
              </a>
            </li>
            </div>
          </div>
        </div>

      </div>
      <FreeBook />
    </body>
  );
}

export default withRouter(Books);
