import './App.css';
import SearchBar from './component/SearchBar';
import { useNavigate } from 'react-router-dom';


export default function App() {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
  };

  return (
    <div>

      {/*the main container of the website*/}
      <div style={styles.generalContainer}>

        {/*the login/sign up section of the website*/}
        <div style={styles.login}>
          <button type='submit' style={styles.loginBox}><p style={{ color: 'white' }}>Login</p></button>
          <button type='submit' style={styles.loginBox}><p style={{ color: 'white' }}>Sign Up</p></button>
        </div>

        {/*the logo section of the website*/}
        <div style={styles.logo}>
          <img src={require("./assets/logos/logo.png")} width="100%"
            onClick={() => { setTimeout(() => { window.open('/', '_self') }, 700) }} style={styles.pointer} />
        </div>

        {/*the search bar component*/}
        <SearchBar handleSearch={handleSearch} />
        { }

      </div>

      {/*the page container*/}
      <div style={styles.pageContainer}>

        {/* Popular column */}
        <div style={{ ...styles.column, }}>

          <div style={styles.titleBox}>
            <p style={styles.graph}>Popular Anime</p>
          </div>

          <div style={{ ...styles.column, position: 'relative' }}>
            <img src={require('./assets/logos/jojo.jpeg')} width="30%" height='100%'
              onClick={() => { setTimeout(() => { navigate('/Jojo') }, 700) }} style={styles.pointer} />
            <p style={{ ...styles.short, position: 'absolute' }}>The story of the Joestar family,
              who are possessed with intense psychic strength,
              and the adventures each member encounters throughout their lives.</p>
          </div>

          <div style={{ ...styles.column, position: 'relative' }}>
            <img src={require('./assets/logos/juju.jpeg')} width="30%" height='100%'
              onClick={() => { setTimeout(() => { navigate('/Juju') }, 700) }} style={styles.pointer} />
            <p style={{ ...styles.short, position: 'absolute', top: 0, right: 0 }}>A boy swallows a cursed talisman - the finger of a demon -
              and becomes cursed himself.
              He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.</p>
          </div>

          <div style={{ ...styles.column, position: 'relative' }}>
            <img src={require('./assets/logos/demon.jpeg')} width="30%" height='100%'
              onClick={() => { setTimeout(() => { navigate('/DemonSlayer') }, 700) }} style={styles.pointer} />
            <p style={{ ...styles.short, position: 'absolute', top: 0, right: 0 }}>A family is attacked by demons and only two members survive
              - Tanjiro and his sister Nezuko,who is turning into a demon slowly.
              Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.</p>
          </div>

        </div>


        {/*Latest Uploads column*/}
        <div style={{ ...styles.column, }}>

          <div style={styles.titleBox}>
            <p style={styles.graph}>Latest Uploads</p>
          </div>

          <div style={{ ...styles.column, position: 'relative' }}>
            <img src={require('./assets/logos/bleach.jpeg')} width="30%" height='100%'
              onClick={() => { setTimeout(() => { navigate('/Bleach') }, 700) }} style={styles.pointer} />
            <p style={{ ...styles.short, position: 'absolute', top: 0, right: 0 }}>High school student Ichigo Kurosaki, who has the ability to see ghosts,
              gains soul reaper powers from Rukia Kuchiki and sets out to save the world from "Hollows".</p>
          </div>

          <div style={{ ...styles.column, position: 'relative' }}>
            <img src={require('./assets/logos/dbz.jpeg')} width="30%" height='100%'
              onClick={() => { setTimeout(() => { navigate('/DBZ') }, 700) }} style={styles.pointer} />
            <p style={{ ...styles.short, position: 'absolute', top: 0, right: 0 }}>With the help of the powerful Dragonballs,
              a team of fighters led by the saiyan warrior Goku
              defend the planet earth from extraterrestrial enemies.</p>
          </div>

          <div style={{ ...styles.column, position: 'relative' }}>
            <img src={require('./assets/logos/black.jpeg')} width="30%" height='100%'
              onClick={() => { setTimeout(() => { navigate('/BlackClover') }, 700) }} style={styles.pointer} />
            <p style={{ ...styles.short, position: 'absolute', top: 0, right: 0 }}>Asta and Yuno were abandoned together at the same church and have been inseparable since.
              As children, they promised that they would
              compete against each other to see who would become the next Emperor Magus.</p>
          </div>

        </div>


        {/*Recent Dub column*/}
        <div style={styles.column}>

          <div style={styles.titleBox}>
            <p style={styles.graph}>Recent Dub</p>
          </div>

          <div style={{ ...styles.column, position: 'relative' }}>
            <img src={require('./assets/logos/op.jpeg')} width="30%" height='100%'
              onClick={() => { setTimeout(() => { navigate('/OnePiece') }, 700) }} style={styles.pointer} />
            <p style={{ ...styles.short, position: 'absolute', top: 0, right: 0 }}>Follows the adventures of Monkey D. Luffy and his
              pirate crew in order to find the greatest treasure ever left by the legendary Pirate,
              Gold Roger. The famous mystery treasure named "One Piece".</p>
          </div>

          <div style={{ ...styles.column, position: 'relative' }}>
            <img src={require('./assets/logos/blue.jpeg')} width="30%" height='100%'
              onClick={() => { setTimeout(() => { navigate('/BlueLock') }, 700) }} style={styles.pointer} />
            <p style={{ ...styles.short, position: 'absolute', top: 0, right: 0 }}>High school soccer players from across Japan
              gather for a controversial project designed to create
              the best and most egoistic striker in the world.</p>
          </div>

          <div style={{ ...styles.column, position: 'relative' }}>
            <img src={require('./assets/logos/hxh.jpeg')} width="30%" height='100%'
              onClick={() => { setTimeout(() => { navigate('/HxH') }, 700) }} style={styles.pointer} />
            <p style={{ ...styles.short, position: 'absolute', top: 0, right: 0 }}>Gon Freecss aspires to become a Hunter,
              an exceptional being capable of greatness.
              With his friends and his potential, he seeks out his father, who left him when he was younger.</p>
          </div>

        </div>

      </div>

    </div>
  );
}


//the style objects
const styles = {
  pointer: { cursor: 'pointer' },
  loginBox: { height: 25, width: 150, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10, },
  short: { fontFamily: 'Ariel', textAlign: 'right', flex: 1, top: 0, right: 0, padding: '20px', color: 'white', width: '62%', height: '80%' },
  graph: { color: 'black', fontFamily: 'Ariel', textAlign: 'center' },
  titleBox: { width: '100%', height: 80, backgroundColor: 'rgba(255,255,0,0.5', display: 'flex', justifyContent: "center", alignItems: "center", border: 'solid black', fontWeight: 'bold' },
  column: { display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'flex-start', backgroundColor: 'rgba(0,0,0,0.5)', border: 'solid black', fontWeight: 'bold' },
  generalContainer: { width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' },
  pageContainer: { backgroundColor: 'white', display: 'flex', flexDirection: 'row', width: '100%', height: 800 },
  logo: { height: 70, width: 120, backgroundColor: "grey", },
  login: { display: 'flex', flexDirection: 'column', backgroundColor: 'white', height: 110, width: 150, alignItems: "flex-end", justifyContent: "center", position: 'absolute', top: 0, right: 0, border: 'solid black', fontWeight: 'bold' },
}