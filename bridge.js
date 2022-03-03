const Desing = function(media) {
    this.media = media;

    this.show = function() {
        this.media.show();
    };

    this.hide = function() {
        this.media.hide();
    };

    this.setSize = function(sz) {
        this.media.sizeScreen(sz);
    };
};

const DesingMedia = function(media) {
    this.media = media;
    this.sizeDising = 0;

    this.setSize = function(sz) {
        this.sizeDising = sz;
        this.media.sizeScreen(sz);
    };

    this.isMovil = function() {
        this.setSize(this.sizeDising < 70);
    };

    this.isPc = function() {
        this.setSize(this.sizeDising >= 70);
    };
};
DesingMedia.prototype = new Desing();

const Image = function() {
    this.show = function() {
        console.log('Show Image');
    };

    this.hide = function() {
        console.log('\n');
    };

    this.sizeScreen = function(sz) {
        console.log('Show Image ' + sz);
    };
}

var Video = function() {
    this.show = function() {
        console.log('Show Video');
    };

    this.hide = function() {
        console.log('\n');
    };

    this.sizeScreen = function(sz) {
        console.log('Video ' + sz + ' size');
    };
}

const image = new Image(),
    video = new Video(),
    typeDisegn1 = new Desing(image),
    typeDisegn2 = new DesingMedia (video);

typeDisegn1.show();     
typeDisegn1.setSize(55);
typeDisegn1.setSize(20);
typeDisegn1.hide();

typeDisegn2.show();           
typeDisegn2.setSize(55);  
typeDisegn2.isMovil();   
typeDisegn2.isPc();   
typeDisegn2.hide(); 