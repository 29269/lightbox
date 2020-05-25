const model = {
    smalltjes: document.querySelectorAll('.small'),
    bigtjes: document.querySelectorAll('.big'),
    alleBig :[],


//methods
    sluiten: function(){
        document.getElementById('modaall').remove();
    },
    box : function(nummer){
        console.log(this.box[nummer]);
        let modaall = document.createElement('div');
        modaall.id = 'modaall';
        modaall.addEventListener('click',this.sluiten);
        let inhoud = document.createElement('div');
        //modaall inhoud element maken
        const sluitknop = document.createElement('i');
        sluitknop.className = 'fas fa-times-circle sk';
        sluitknop.addEventListener('click', this.sluiten);
        inhoud.className = 'modaallInhoud';
        inhoud.innerHTML = this.alleBig[nummer].innerHTML;
        inhoud.addEventListener('click', function(e){
            e.stopPropagation();
        });

        gsap.to(inhoud, {marginTop: 0, duration: 1, ease: "steps(12)"});
        modaall.append(inhoud);
        inhoud.prepend(sluitknop);
        document.body.append(modaall);
    },
    initialiseren: function() {
        for(let i=0; i< this.bigtjes.length; i++){
            this.alleBig.push(this.bigtjes[i]);
            this.bigtjes[i].remove();
    }
        for (let i=0; i< this.smalltjes.length; i++){
            this.smalltjes[i].addEventListener('click', function() {
                model.box(i)

            })
        }
    }
}
