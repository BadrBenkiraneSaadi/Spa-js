import {biliardo} from './modulo.js';

$(document).ready(function(){
    var lista = [];
    var log=false;
    caricaLista();

    function caricaLista() {
        $.ajax({
            url: 'assets/js/catalogo.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (i, el) {
                    let id=el.id;
                    let tipo=el.tipo;
                    let nome=el.nome;
                    let dimensioni=el.dimensioni;
                    let prezzo=el.prezzo;
                    let url=el.url;
                    let tavolo=new biliardo(id,tipo,nome,dimensioni,prezzo,url);

                    lista.push(tavolo)
                });
                stampaHome()
            }
        });
    }

    function stampaHome(){
        let i;
        document.getElementById('contenitore').innerHTML = '';

        for (i = 0; i < lista.length; i++) {
            lista[i].stampaBiliardi(document.getElementById('contenitore'));
        }
    }

    $(document).on('click','#home', function(){
        stampaHome();
        document.getElementById('contenitore').style.display='block';
        document.getElementById('contenitoreBis').style.display='none';
    });

    $(document).on('click','.puntatore', function(){
        let i;
        let x = $(this).attr('src')

        for (i = 0; i < lista.length; i++) {
            if(x==lista[i].url){
                lista[i].stampaDettaglio(document.getElementById('contenitoreBis'));
            }
        }
        
        document.getElementById('contenitore').style.display='none';
        document.getElementById('contenitoreBis').style.display='block';
    });

    $(document).on('click','.puntatoreAcquisto', function(){
        let i;
        let x = $(this).attr('src')

        for (i = 0; i < lista.length; i++) {
            if(x==lista[i].url){
                lista[i].stampaDettaglioAcquisto(document.getElementById('contenitoreBis'));
            }
        }
        
        document.getElementById('contenitore').style.display='none';
        document.getElementById('contenitoreBis').style.display='block';
    });

    $(document).on('click','#indietro', function(){
        document.getElementById('contenitore').style.display='block';
        document.getElementById('contenitoreBis').style.display='none';
    });

    $(document).on('click','.aggiungi', function(){
        let i;
        let x = $(this).attr('id')
        let y= [];

       
        for (i = 0; i < lista.length; i++) {
            if(x==lista[i].id){
                if (sessionStorage.getItem('provvisorio')) {
                    y = JSON.parse(sessionStorage.getItem('provvisorio'));
                }
                y.push(lista[i]);
                sessionStorage.setItem('provvisorio', JSON.stringify(y));
                console.log(JSON.parse(sessionStorage.getItem('provvisorio')));
                alert('Aggiunto al Carrello');
            }
        }
        
        if(log==true){
            localStorage.setItem(localStorage.getItem('user'),sessionStorage.getItem('provvisorio'));
        }
    });

    $(document).on('click','#carrello', function(){
        stampaCarrello();
        document.getElementById('contenitore').style.display='block';
        document.getElementById('contenitoreBis').style.display='none';
    });

    function stampaCarrello(){
        let y= [];
        let i=0;

        if (sessionStorage.getItem('provvisorio')) {
            document.getElementById('contenitore').innerHTML='';
            if(log==true){
                document.getElementById('contenitore').innerHTML='<h2 class="text success m-3">Carrello personale di: '+localStorage.getItem('user')+'</h2>';
            }
            y = JSON.parse(sessionStorage.getItem('provvisorio'));
            
            for (i = 0; i < y.length; i++) {
                let x = new biliardo(y[i].id,y[i].tipo,y[i].nome,y[i].dimensioni,y[i].prezzo,y[i].url);
                x.stampaAcquisto(document.getElementById('contenitore'));
            }
        }else{
            document.getElementById('contenitore').innerHTML='';
            if(log==true){
                document.getElementById('contenitore').innerHTML='<h2 class="text success m-3">Carrello personale di: '+localStorage.getItem('user')+'</h2>';
            }
        }
    }

    $(document).on('click','.rimuovi', function(){
        let i;
        let x = $(this).attr('name')
        let y= [];

        y = JSON.parse(sessionStorage.getItem('provvisorio'));
        
        for (i = 0; i < y.length; i++) {
            if(x==y[i].id){
                y.splice(i,1)
            }
        }
        
        sessionStorage.setItem('provvisorio', JSON.stringify(y));
        stampaCarrello()
        document.getElementById('contenitore').style.display='block';
        document.getElementById('contenitoreBis').style.display='none';
    });

    $(document).on('click','#snooker', function(){
        let i;
        document.getElementById('contenitore').innerHTML = '';

        for (i = 0; i < lista.length; i++) {
            if(lista[i].tipo=='Snooker'){
                lista[i].stampaBiliardi(document.getElementById('contenitore'));
            }            
        }
    });

    $(document).on('click','#pool', function(){
        let i;
        document.getElementById('contenitore').innerHTML = '';

        for (i = 0; i < lista.length; i++) {
            if(lista[i].tipo=='Pool'){
                lista[i].stampaBiliardi(document.getElementById('contenitore'));
            }            
        }
    });

    $(document).on('click','#carambola', function(){
        let i;
        document.getElementById('contenitore').innerHTML = '';

        for (i = 0; i < lista.length; i++) {
            if(lista[i].tipo=='Carambola'){
                lista[i].stampaBiliardi(document.getElementById('contenitore'));
            }            
        }
    });

    $(document).on('click','#login', function(){
        if(log==false){
            document.getElementById('contenitore').innerHTML = '<div class="w-100 d-flex flex-row justify-content-center my-5">'+
                                                                '<div class="w-50 d-flex flex-column align-items-center">'+
                                                                    '<input class="my-3" type="text" id="username" placeholder="Username">'+
                                                                    '<input class="my-3" type="password" id="pass" placeholder="Password">'+
                                                                    '<button class="btn btn-success"type="button" id="accedi">Accedi</button>'+
                                                                '</div>'+
                                                            '</div>';
        }else{
            document.getElementById('contenitore').innerHTML = '<div class="w-100 d-flex flex-row justify-content-center my-5">'+
                                                                    '<div class="w-50 d-flex flex-column align-items-center">'+
                                                                        '<h2 class="text-danger ml-3">Sei già loggato '+ localStorage.getItem('user') +'</h2>'+
                                                                        '<button class="btn btn-danger"type="button" id="logout">Log-Out</button>'+
                                                                    '</div>'+
                                                                '</div>';
        }
    });

    $(document).on('click','#accedi', function(){
        let user=document.querySelector('#username').value;
        let pass=document.querySelector('#pass').value;
        let aux=[];
        let y=[]
        let i=0;

        localStorage.setItem('user',user);
        localStorage.setItem('pass',pass);
        log=true;
        
        if(localStorage.getItem(localStorage.getItem('user'))){
            if(sessionStorage.getItem('provvisorio')){
                y = JSON.parse(localStorage.getItem(localStorage.getItem('user')));
                aux=JSON.parse(sessionStorage.getItem('provvisorio'));
                for(i=0;i<aux.length;i++){
                    y.push(aux[i]);                  
                    sessionStorage.setItem('provvisorio',JSON.stringify(y));
                }
            }else{
                sessionStorage.setItem('provvisorio',localStorage.getItem(localStorage.getItem('user')));
            }
        }
        stampaCarrello();
    });

    $(document).on('click','.acquista', function(){
        if(log==true){
            alert('Verrai reindirizzato alla pagina di acquisto!')
        }else{
            alert('Prima di poter completare l\'acquisto è necessario effettuare il login.')
        }
    });

    $(document).on('click','#contatti', function(){
        document.getElementById('contenitore').innerHTML ='<div class="d-flex flex-column justify-content-center align-items-center">'+
                                                            '<h3>Scrivici un messaggio</h3>'+
                                                            '<form method="post" id="scatola">'+
                                                                '<textarea id="areaInput"></textarea>'+                                                                
                                                            '</form>'+
                                                            '<button class="btn btn-success m-3" type="button" id="invio">'+
                                                                'Invia'+
                                                            '</button>'+
                                                            '</div>';
        caricaTiny();                                           
    });

    function caricaTiny(){
        tinymce.init({
            selector: '#areaInput',
            height: "350",
            width:"400"
        }); 
    }

    $(document).on('click','#invio', function(){
        if(log==true){
            document.getElementById('contenitore').innerHTML ='<h3>Grazie '+localStorage.getItem('user')+' per averci scritto</h3>'
        }else{
            alert('Devi eseguire il login prima di poterci scrivere!')
        }
    });

    $(document).on('click','#chisiamo', function(){
        let file='foglio.txt';
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    document.getElementById('contenitore').innerHTML ='<p class="p-5">'+allText+'</p>';
                }
            }
        }
        rawFile.send(null);
    });

    $(document).on('click','#logout', function(){
        if(sessionStorage.getItem('provvisorio')){
            sessionStorage.clear()
            log=false;
            document.getElementById('contenitore').innerHTML = '<div class="w-100 d-flex flex-row justify-content-center my-5">'+
                                                                '<div class="w-50 d-flex flex-column align-items-center">'+
                                                                    '<input class="my-3" type="text" id="username" placeholder="Username">'+
                                                                    '<input class="my-3" type="password" id="pass" placeholder="Password">'+
                                                                    '<button class="btn btn-success"type="button" id="accedi">Accedi</button>'+
                                                                '</div>'+
                                                            '</div>';
        }
    });
});
