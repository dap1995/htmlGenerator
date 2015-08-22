var htmlDivs = [
        {
            "elemento":"header"
        },
        {
            "elemento":"menu"
        },
        {
            "elemento":"content"
        },
        {
            "elemento":"news"
        }

    ]

var conteudoDivs = [
    {
        "elemento": "header",
        "conteudo": "assets/images/logo_example.png",
        "type": "img"
    },
    {
        "elemento": "menu",
        "conteudo": [
        {
        "href": "/index.html",
        "name": "~"
        },
        {
        "href": "http://www.google.com.br",
        "name": "Google"
        },
        {
        "href": "assets/images/logo_example.png",
        "name": "/Logotipo"
        }
        ],
        "type": "arrayHref"
    },
    {
        "elemento": "content",
        "conteudo": "<h1>Welcome to example</h1>",
        "type": "text"
    },
    {
        "elemento": "content",
        "conteudo": "<br>lorem ipsum...",
        "type": "text"
    },
    {
        "elemento": "content",
        "conteudo": "Test",
        "type": "text"
    },
    {
        "elemento": "news",
        "conteudo": "assets/images/logo_example.png",
        "type": "img"
    }

    ]
function createContent(){
    $.each( conteudoDivs, function(type, conteudo, elemento) {
        switch(this.type){
           
        //Cria as imagens
        case "img":
            $("#" + this.elemento).append('<img src="'+this.conteudo+'">');
            console.log("Carregou img: " + this.conteudo + " em " + this.elemento);
            break;           
        
        //Cria os hyperlinks
        case "arrayHref":
            var teste = $.each( this.conteudo, function(name, href) {
            console.log("Criou link: " + this.href);
            });
            for (i=0;i<teste.length;i++){
            console.log(teste[i].name);
            $("#" + this.elemento).append('<a href="' + teste[i].href + '"> ' + teste[i].name + '</a>');
            }
            break;
           
            //Cria conteudo de texto
        case "text":
            $("#" + this.elemento).append(this.conteudo);
            console.log("Carregou texto: " + this.conteudo + " em " + this.elemento);
            break
        }
    })
}
$( document ).ready(function() {

    console.log( "ready!" );
    
    //Criando a estrutura
    $.each( htmlDivs, function(elemento) {
    $("body").append('<div id="'+ this.elemento +'"></div>');
    console.log("Criou DIV: " + this.elemento);
    });
    
    //Criando o conteudo
    createContent();
    });