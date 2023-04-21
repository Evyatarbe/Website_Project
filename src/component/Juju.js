import { Link } from "react-router-dom";

export function Juju() {
    return (
        <div>

            {/*the main container of the website*/}
            <div style={styles.generalContainer}>

                {/*the logo section of the website*/}
                <div style={styles.logo}>
                    <img src={require("./logos/logo.png")} width="100%"
                        onClick={() => { setTimeout(() => { window.open('/', '_self') }, 700) }} style={styles.pointer} />
                </div>

            </div>

            {/*the page container*/}
            <div style={styles.pageContainer}>

                <div style={styles.photo}>
                    <img src={require("./logos/juju.jpeg")} width={500} height={500} />
                </div>

                <div style={styles.column}>
                    <p style={styles.graph}>
                        * For this anime imdb page <Link onClick={() => window.open('https://www.imdb.com/title/tt12343534/', '_blank')} style={styles.pointer} >Click here</Link>.
                    </p>
                </div>

                <div style={styles.column}>
                    <p style={styles.graph}>
                        * To watch this anime online <Link onClick={() => window.open('https://anihdplay.com/videos/jujutsu-kaisen-tv-episode-1', '_blank')} style={styles.pointer} >Click here</Link>.
                    </p>
                </div>

                <div style={styles.column}>
                    <p style={styles.graph}>
                        * For this anime fandom page <Link onClick={() => window.open('https://jujutsu-kaisen.fandom.com/wiki/Jujutsu_Kaisen_Wiki', '_blank')} style={styles.pointer} >Click here</Link>.
                    </p>
                </div>

            </div>

        </div>
    );

}

const styles = {
    photo: { height: 100, width: 200, display: 'flex', flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 55, },
    pointer: { cursor: 'pointer' },
    graph: { color: 'white', fontFamily: 'Ariel', textAlign: 'center', fontSize: 30, fontWeight: 'bold' },
    column: { display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'flex-start', backgroundColor: 'rgba(0,0,0,0.0)', alignItems: 'center', },
    generalContainer: { width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.85)', },
    pageContainer: { backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', flexDirection: 'column', width: '100%', height: 651, justifyContent: 'flex-start' },
    logo: { height: 70, width: 120, backgroundColor: "grey", },
}