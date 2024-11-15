import './Gameplay.css'

function Gameplay(){
    return(
        <main>
            <div class="boxForTitle">
                <h1>Time Link</h1>
            </div>
            <div class="boxForGameplayAndMenu">
                <div class="boxForGameplay">
                    <div class="playboard-img">
                        <img src="assets/playboard1.png" alt="game playboard"/>
                    </div>
                    <div class="playboard-grid" id="playboard-grid">
                        <div id="p1" class="field">1</div>
                        <div id="p2" class="field">2</div>
                        <div id="p3" class="field">3</div>
                        <div id="p4" class="field">4</div>
                        <div id="p5" class="field">5</div>
                        <div id="p6" class="field">6</div>
                        <div id="p7" class="field">7</div>
                        <div id="p8" class="field">8</div>
                        <div id="p9" class="field">9</div>
                        <div id="p10" class="field">10</div>
                        <div id="p11" class="field">11</div>
                        <div id="p12" class="field">12</div>
                        <div id="p13" class="field">13</div>
                        <div id="p14" class="field">14</div>
                        <div id="p15" class="field">15</div>
                        <div id="p16" class="field">16</div>
                        <div id="p17" class="field">17</div>
                        <div id="p18" class="field">18</div>
                        <div id="p19" class="field">19</div>
                        <div id="p20" class="field">20</div>
                    </div>

                    <div id="itemList" class="itemList">
                        <div id="item1" class="item">Item 1</div>
                        <div id="item2" class="item">Item 2</div>
                        <div id="item3" class="item">Item 3</div>
                        <div id="item4" class="item">Item 4</div>
                        <div id="item5" class="item">Item 5</div>
                        <div id="item6" class="item">Item 6</div>
                        <div id="item7" class="item">Item 7</div>
                        <div id="item8" class="item">Item 8</div>
                    </div>
                </div>
                <aside class="boxForMenu">
                    <div id="user" class="user">
                        <img src="assets/userpic.svg" alt="little Alien"/>
                        <h3 id="userName">Username</h3>
                    </div>

                    <div id="gameProgress" class="gameProgress">
                        <h3>Progress</h3>
                        <p>Show something here, maybe a diagram</p>
                    </div>
                    <div class="boxForSound">
                        <p>Player here</p>
                    </div>
                    <button id="nextRiddle">Play next</button>
                    <button id="exit">Save & Exit</button>
                    {/* <button id="settings">gearwheel</button> */}
                    <div id="settings">
                        <a href="#">
                            <img src="assets/icons8-settings.svg" alt=""/>
                        </a>
                    </div>
                </aside>
            </div>
        </main>
    )
}

export default Gameplay;