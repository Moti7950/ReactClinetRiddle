import { Link } from "react-router";

export default function LeaderbordPage(){
    return(
        <>
        <h1>Hi from Leaderbord page</h1>
         <div>
      <h1>🏆 Leaderboard</h1>
      <table>
        <tr>
          <th>Rank</th>
          <th>Player</th>
          <th>Score</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Moti</td>
          <td>1500</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Roni</td>
          <td>1200</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dana</td>
          <td>1000</td>
        </tr>
      </table>
    </div>
        <button><Link to="/">Go to homepage</Link></button>
        </>
    )
}