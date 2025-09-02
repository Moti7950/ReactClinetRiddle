import { Link } from "react-router";
export default function Menu()
{
    return(
        <>
        <div id="menu-controler">
        <header>🎮 Welcome to Riddle Game! 🎮</header>
        <h3>What would you like to do? </h3>
        <section>
            <button>1 😊  Play the game</button>
            <button>2 🧩  Create a new riddle</button>
            <button>3 📖  Read all riddles</button>
            <button>4 ✏️  Update a riddle</button>
            <button>5 ❌  Delete a riddle</button>
            <button><Link to="Leaderbord">6 🏆  View leaderboard</Link></button>
        </section>
        </div>
        <button><Link to="/">Go to homepage</Link></button>
        </>
    )
    
}