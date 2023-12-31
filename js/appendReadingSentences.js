var block =`

     <div id="ReadingContainer">

      <div id="displayedPhrase"></div>

      <div id="clouds">        
          <div style="height:200px;width:200px;top:-70px;left:0;"> </div>
          <div style="height:300px;width:300px;top:-80px;left:10%;transform:translateX(-10%);"></div>
          <div style="height:270px;width:270px;top:-85px;left:25%;transform:translateX(-25%);"></div>
          <div style="height:300px;width:300px;top:-90px;left:35%;transform:translateX(-35%);"></div>
          <div style="height:600px;width:600px;top:-135px;left:50%;transform:translateX(-50%);"></div>          
          <div style="height:275px;width:275px;top:-90px;left:70%;transform:translate(-70%);"></div>  
          <div style="height:270px;width:270px;top:-85px;left:80%;transform:translateX(-80%);"></div>
          <div style="height:300px;width:300px;top:-80px;left:95%;transform:translateX(-95%);"></div>
          <div style="height:200px;width:200px;top:-70px;left:100%;transform:translateX(-100%);"> </div>
                
     </div>

     <div onclick="CloseReader()" id="closeReader"><svg width="800px" height="800px" viewBox="0 0 25 25">
    
    
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#fff">
            <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">

</path>
        </g>
    </g>
</svg></div>
    <div  id="previousSound" class="controllers" onclick="GetPrevious()" >     
           <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4755 5.18341L7.49766 9.60815C6.56708 10.4353 6.10179 10.8489 5.93032 11.3373C5.77974 11.7662 5.77974 12.2335 5.93032 12.6624C6.10179 13.1508 6.56708 13.5644 7.49766 14.3916L12.4755 18.8163C12.8978 19.1917 13.1089 19.3794 13.2883 19.3861C13.4441 19.3919 13.5937 19.3247 13.6929 19.2044C13.807 19.0659 13.807 18.7834 13.807 18.2184V15.4284C16.2351 15.4284 18.7996 16.2083 20.6723 17.5926C21.6471 18.3133 22.1346 18.6737 22.3203 18.6595C22.5012 18.6456 22.6161 18.575 22.71 18.4196C22.8063 18.2603 22.7212 17.7624 22.5511 16.7666C21.4461 10.3004 16.9961 8.57129 13.807 8.57129V5.78134C13.807 5.21632 13.807 4.93381 13.6929 4.79531C13.5937 4.67498 13.4441 4.6078 13.2883 4.61363C13.1089 4.62034 12.8978 4.80803 12.4755 5.18341Z" />
          </svg>
     </div> 
      <div  id="speaker"  class="bottomButtons" onclick="ReadSentence()" >
          <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
               <path d="M18.008 2.987C19.34 2.225 21 3.187 21 4.723v12.554c0 1.535-1.659 2.498-2.992 1.736L14 16.723V5.277l4.008-2.29zM12 6H7a5 5 0 0 0-1 9.9v3.6a2.5 2.5 0 0 0 5 0V16h1V6z" clip-rule="evenodd"/>
          </svg>
     </div>
     <div  id="nextSound" class="controllers" onclick="GetNext()" > 
     <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.3315 5.18341L17.3094 9.60815C18.2399 10.4353 18.7052 10.8489 18.8767 11.3373C19.0273 11.7662 19.0273 12.2335 18.8767 12.6624C18.7052 13.1508 18.2399 13.5644 17.3094 14.3916L12.3315 18.8163C11.9092 19.1917 11.6981 19.3794 11.5187 19.3861C11.3629 19.3919 11.2133 19.3247 11.1142 19.2044C11 19.0659 11 18.7834 11 18.2184V15.4284C8.57196 15.4284 6.00739 16.2083 4.13478 17.5926C3.15988 18.3133 2.67242 18.6737 2.48676 18.6595C2.30578 18.6456 2.19093 18.575 2.09703 18.4196C2.0007 18.2603 2.08578 17.7624 2.25595 16.7666C3.36093 10.3004 7.8109 8.57129 11 8.57129V5.78134C11 5.21632 11 4.93381 11.1142 4.79531C11.2133 4.67498 11.3629 4.6078 11.5187 4.61363C11.6981 4.62034 11.9092 4.80803 12.3315 5.18341Z" />
     </svg>
     </div>

`;

function AddReader(){
var div = document.createElement('div');
div.id = 'ReadingDiv';
div.innerHTML = block;
div.style.cssText = 'display: none; ';

document.body.appendChild(div);
}
AddReader();

