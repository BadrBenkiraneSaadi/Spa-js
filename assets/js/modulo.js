export class biliardo{
    id;
    tipo;
    nome;
    dimensioni;
    prezzo;
    url;

    constructor(_id,_tipo,_nome,_dimensioni,_prezzo,_url){
        this.id=_id;
        this.tipo=_tipo;
        this.nome=_nome;
        this.dimensioni=_dimensioni;
        this.prezzo=_prezzo;
        this.url=_url
    }

    stampaBiliardi(contenitore){
        contenitore.innerHTML += '<div class="row d-flex flex-column justify-content-center align-items-center my-3">'+
                                        '<div class="col-11">'+
                                            '<div class="row">'+
                                                '<div class="col-sm-6">'+
                                                    '<div class="d-flex flex-column justify-content-center align-items-center">'+
                                                        '<img class="w-75 puntatore" src="'+this.url+'">'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-sm-4">'+
                                                    '<h5>'+this.nome+'</h5>'+
                                                    '<p>Dimensioni: '+this.dimensioni+'</p>'+
                                                    '<p>Prezzo: '+this.prezzo+'€</p>'+
                                                '</div>'+
                                                '<div class="col-sm-2 d-flex flex-column align-item-end justify-content-end">'+
                                                    '<button class="btn btn-success p-1 aggiungi" type="button" id="'+this.id+'">'+
                                                        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">'+
                                                            '<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>'+
                                                        '</svg>'+
                                                    '</button>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>';
    }

    stampaDettaglio(contenitore){
        contenitore.innerHTML = '<div class="row d-flex flex-column justify-content-center align-items-center my-3">'+
                                        '<button class="btn btn-warning p-1" type="button" id="indietro">'+
                                            'Indietro'+
                                        '</button>'+
                                        '<div class="col-11">'+
                                            '<div class="row">'+
                                                '<div class="col-12">'+
                                                    '<div class="d-flex flex-column justify-content-center align-items-center">'+
                                                    '<img class="w-75" src="'+this.url+'">'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-12">'+
                                                '<h5>'+this.nome+'</h5>'+
                                                '<p>Dimensioni: '+this.dimensioni+'</p>'+
                                                '<p>Prezzo: '+this.prezzo+'€</p>'+
                                                '</div>'+
                                                '<div class="col-12 d-flex flex-column align-item-end justify-content-end">'+
                                                    '<button class="btn btn-success p-1 aggiungi" type="button" id="'+this.id+'">'+
                                                        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">'+
                                                            '<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>'+
                                                        '</svg>'+
                                                    '</button>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>';
    }

    stampaAcquisto(contenitore){
        contenitore.innerHTML += '<div class="row d-flex flex-column justify-content-center align-items-center my-3">'+
                                        '<div class="col-11">'+
                                            '<div class="row">'+
                                                '<div class="col-sm-6">'+
                                                    '<div class="d-flex flex-column justify-content-center align-items-center">'+
                                                        '<img class="w-75 puntatoreAcquisto" src="'+this.url+'">'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-sm-4">'+
                                                    '<h5>'+this.nome+'</h5>'+
                                                    '<p>Dimensioni: '+this.dimensioni+'</p>'+
                                                    '<p>Prezzo: '+this.prezzo+'€</p>'+
                                                '</div>'+
                                                '<div class="col-sm-2 d-flex flex-column align-item-end justify-content-around">'+
                                                    '<button class="btn btn-danger p-1 rimuovi " type="button" name="'+this.id+'">'+
                                                        'Rimuovi'+
                                                    '</button>'+
                                                    '<button class="btn btn-success p-1 acquista" type="button" name="'+this.id+'">'+
                                                        'Acquista'+
                                                    '</button>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>';
    }

    stampaDettaglioAcquisto(contenitore){
        contenitore.innerHTML = '<div class="row d-flex flex-column justify-content-center align-items-center my-3">'+
                                        '<button class="btn btn-warning p-1" type="button" id="indietro">'+
                                            'Indietro'+
                                        '</button>'+
                                        '<div class="col-11">'+
                                            '<div class="row">'+
                                                '<div class="col-12">'+
                                                    '<div class="d-flex flex-column justify-content-center align-items-center">'+
                                                    '<img class="w-75" src="'+this.url+'">'+
                                                    '</div>'+
                                                '</div>'+
                                                '<div class="col-12">'+
                                                '<h5>'+this.nome+'</h5>'+
                                                '<p>Dimensioni: '+this.dimensioni+'</p>'+
                                                '<p>Prezzo: '+this.prezzo+'€</p>'+
                                                '</div>'+
                                                '<div class="col-12 d-flex flex-column align-item-end justify-content-end">'+
                                                '<button class="btn btn-danger p-1 rimuovi my-3" type="button" name="'+this.id+'">'+
                                                'Rimuovi'+
                                            '</button>'+
                                            '<button class="btn btn-success p-1 acquista" type="button" name="'+this.id+'">'+
                                                'Acquista'+
                                            '</button>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>';
    }
}