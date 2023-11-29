const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];



class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages; //este no lleva el this porque se lo estamos pasando desde el constructor y no desde algo dentro del objeto, si fuera este último caso ambos lados llevarían this
        this.militaryImages = militaryImages;
        

    }
    
    getRandomCivil() {
        
        let randomIndex = Math.floor(Math.random() * this.civilImages.length) //generamos numero aleatorio hasta la longitud del array con todas las img
        
        let randomImage = this.civilImages[randomIndex]
        return randomImage;
        
    }
    
    getRandomMilitary() {
         
        let randomIndex = Math.floor(Math.random() * this.militaryImages.length) //generamos numero aleatorio hasta la longitud del array con todas las img
    
         let randomImage = this.militaryImages[randomIndex]
         return randomImage;

    }
    
    getAll() {
        return [...this.civilImages, ...this.militaryImages];
        
     
    }
}


class Painter {
    constructor() {
        this.gallery = this.createGallery();
    }

    createGallery() {
        let section = document.createElement('section');
        section.setAttribute('id','galleryid')
        let body = document.getElementsByTagName('body')[0];
        body.appendChild(section)
        return document.getElementById('galleryid');
        
        
    }

    createImageTag(imageUrl) {

        let picture = document.createElement('picture');
        let img = document.createElement('img');
        img.setAttribute('src', imageUrl);
        picture.appendChild(img);
        return picture;
    }

    // añade a gallery lo que retorna createimagetag, así que llamamos a esa función 
    paintSingleImage(imageUrl) {
        let imageTag = this.createImageTag(imageUrl);
        this.gallery.appendChild(imageTag);
    }

    //añade a gallery uno a uno los resultados de createimagetag, diferencia, hacer un bucle, lo recoreremos, añadimos una etiqueta por cada url encontrada y se la ponemos como appedn child a gallery, importate, dentro del bucle!!!
    paintMultipleImages(arrayOfImages) {
        for(let elementUrl of arrayOfImages){
            let imageTag = this.createImageTag(elementUrl);
        this.gallery.appendChild(imageTag)

        }
       ;
       
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();



