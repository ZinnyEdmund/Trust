
import './App.css';

const Header = () => {
    return (
        <div>
            <header>
                <div>
                    <img src="../img/logo.png" alt="logo" />
                    <p>truthCheck</p>
                </div>
                <div>
                    <ul>
                        <li><a href="">Quick Check</a></li>
                        <li><a href="">Verified Claims</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <select name="languages">
                        <option value="">ENG</option>
                        <option value="">FRE</option>
                        <option value="">SPA</option> 
                    </select>
                </div>
            </header>
            <div>
              <img src="./assets/ram1.png" alt="img" className='img1'/>
              <img src="./assets/ram2.png" alt="img" className='img2'/>
              <img src="./assets/ram3.png" alt="img" className='img3'/>
              <img src="./assets/ram4.png" alt="img" className='img4'/>
            </div>
            </div>
            
    );
};

    // Main App Component
    const App = () => {
            return  (
                <div className='app'>
                    <Header />
                    <div className='hero-sect'>
                    <h1>TruthCheck <br /> Your shield against lies.</h1>
                    <p>Verify news and claims instantly with secure blockchain tech.</p>
                    <button className='connect-btn'>Connect Wallet</button>
                </div>

                
            <footer>
                <div>
                    <ul>
                        <li><a href="">| About</a></li>
                        <li><a href="">| Contact</a></li>
                    </ul>
                    <p>Fighting Misinformation with Blockchain ©TruthCheck 2025</p>
                </div>
            </footer>
        </div>
    );
};

export default App;

           
