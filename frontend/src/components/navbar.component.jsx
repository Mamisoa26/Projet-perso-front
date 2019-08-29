import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            // <nav className="navbar">
            //     <Link to="/" className="navbar-brand">ExcerTracker</Link>
            //     <div className="collapse">
            //         <ul>
            //             <li className="navbar-item"><Link to="/">Exercises</Link></li>
            //             <li className="navbar-item"><Link to="/create">Créer un Documentations</Link></li>
            //             <li className="navbar-item"><Link to="/user">Créer l'utilisateur</Link></li>
            //         </ul>
            //     </div>
            // </nav>

               <nav class="navbar navbar-expand-sm bg-dark navbar-dark">


                              <ul class="navbar-nav">
                                  <li className="navbar-item"><Link to="/">Liste</Link></li>
    
                               <li className="navbar-item"><Link to="/create">Création</Link></li>
                            <li className="navbar-item"><Link to="/user">Créer l'utilisateur</Link></li>
                           </ul>

  
                         <span class="navbar-text">
                              Les fiches de presences
                           </span>

                                  </nav>

        )
    }
}
