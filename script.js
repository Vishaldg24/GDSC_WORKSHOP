import { items }  from "./data.js";
const formEle=document.getElementById("item-form");
// place,location,date,link,list container
// const formEle=document.getElementById("list-container");
const listEle =document.getElementById("list-container");
const placeInput=document.getElementById("place");
const imageInput=document.getElementById("image");
const locationInput=document.getElementById("locaton");
const linkINput=document.getElementById("link");
const dateInput=document.getElementById("date");
function renderList(){
    listEle.innerHTML=item,Map(
        (item) 
        <div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg" alt="Taj Mahal">
                    
                        <div class="card-content">
                            <div class="card-header">
                                <div class="card-header-text">
                                    <a 
                                    target="_blank"
                                    h
                                    href="https://www.indiatajmahaltour.com/holiday-packages/taj-mahal-tours-from-bangalore.htm">Taj Mahal</a>
                                </div>
                             <p>Agra, India</p>
                             <div classs="card-header-action">
                                <button>
                                    <img src="./edit-icon.svg" alt="edit-button">
                                </button>
                                <button>
                                    <img src="./trash-icon.svg" alt="delete">
                                </button>
                             </div>
                            </div>
                            <p> 
                                "I'm looking forward to leisurely walking through the lush gardens surrounding the Taj. I'll keep my camera ready for every picturesque corner."

                            </p>
                            <p class="card-footer">
                                "26 May 2024"
                            </p>

                        </div>
    )

}
