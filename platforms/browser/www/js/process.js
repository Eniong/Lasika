let val = 0;

        function shift(src_id, dst_id, from, to) {
            val = 0;
            let src = document.getElementById(src_id);
            let dst = document.getElementById(dst_id);
            dst.innerHTML = chords.shiftScale(src, from, to);
        }

        function shiftPlus(src_id, dst_id) {
            val += 1;
            let src = document.getElementById(src_id);
            let dst = document.getElementById(dst_id);
            dst.innerHTML = chords.shiftScaleBy(src, val);
        }

        function shiftMinus(src_id, dst_id) {
            val -= 1;
            let src = document.getElementById(src_id);
            let dst = document.getElementById(dst_id);
            dst.innerHTML = chords.shiftScaleBy(src, val);
        }

        function parse(src_id, dst_id) {
            val = 0;
            let src = document.getElementById(src_id);
            let dst = document.getElementById(dst_id);
            dst.innerHTML = chords.parse(src);
        }  


function play(element){
       var audio = document.getElementById(element);
       audio.play();
                 }


let btn = <div>
  
    <div className="statusbar-overlay"></div>
    
    <div className="panel-overlay"></div>
    
    <div className="panel panel-left panel-reveal bg-yellow">
      <div className="content-block">
        
              <a href="chords.html" className="item-link">
                <div className="button button-fill color-red">Chords Chart</div>
            <br>
          
              <a href="about.html" className="item-link">
                <div className="button button-fill">About</div>
        </div>
      </div>
    </div>
    

  <div className="views">
    <div className="view view-main">
      <div className="navbar">
        <div className="navbar-inner">
          
          <div className="right">
            <a href="#" className="link icon-only open-panel"><i className="icon icon-bars color-black"></i></a>
          </div>
        </div>
      </div>

      <div className="pages navbar-through toolbar-through">
        <div data-page="index" className="page">
          <div className="page-content">
            <div className="content-block-title">Chords</div>
            <div className="content-block">
              <input type="text" placeholder="input chords here" id="src_id" style="width: 100%; font-size: 30px; text-align: center;">
            </div>

            <div className="content-block-title">Transpose</div>
            <div className="content-block">
              <pre id="dst_id" data-distance="50" className="page-content infinite-scroll" style="font-size: 30px; text-align: center;"></pre>
            </div>

            <div className="content-block">
              <div className="buttons-row">
                <a href="#" className="button button-big button-fill button-raised color-red" onclick="shiftMinus('src_id','dst_id')">Transpose -1</a>
                <a href="#" className="button button-big button-fill button-raised color-green" onclick="shiftPlus('src_id','dst_id')">Transpose +1</a>
              </div>
            </div>

            <div className="content-block">
              <a href="#" className="button button-big button-fill button-raised color-gray" onclick="window.location.reload()">Refresh</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>;
 
ReactDOM.render(btn,document.getElementById('root'));