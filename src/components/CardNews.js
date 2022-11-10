class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }
    
    build() {
        const compomentRoot = document.createElement("div");
        compomentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left")

        const autor = document.createElement("span");
        autor.textContent = "By: " + (this.getAttribute("autor") || "anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default-photo.jpg";
        newsImage.alt = "Foto da Notícia";
        cardRight.appendChild(newsImage);

        compomentRoot.appendChild(cardLeft);
        compomentRoot.appendChild(cardRight);

        return compomentRoot
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 720px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            -webkit-box-shadow: 0px 6px 12px 6px rgba(0,0,0,0.91); 
            -webkit-box-shadow: 0px 6px 29px 3px rgba(0,0,0,0.91); 
            box-shadow: 0px 6px 29px 3px rgba(0,0,0,0.91);
            margin: 1rem 0 1rem 2rem;
            border-radius: 1rem 1rem;
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
            margin: 1rem;
        }
        
        .card__right {
            display: flex;
            justify-content: right;
            
        }
        
        .h1 {
            margin-top: 10px;
            font-size: 25px;
        }
        
        div > div.card__left > p {
            color: gray;
            
        }
        
        span {
            font-weight: 400;
            
            font-size: 14px;
        }
        
        .card__left > a {
            color: black;
            text-decoration: solid;
            padding: 5px 0 5px 0;
            font-weight: bold;
            
        }

        .card__right > img {
            widht: 200px;
            height: 200px;
        }

            
        `
        return style;
    }
    
    }


customElements.define("card-news", Cardnews);