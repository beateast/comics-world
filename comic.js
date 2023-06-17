AFRAME.registerComponent("comic", {
    init: function(){
        this.createCard();
    },
    createCard: function(){
        const thumbnail = [
            {
                id: "superman",
                title: "SuperMan",
                url: "./assets/thumbnails/superman.png",

            },
            {
                id: "spiderman",
                title: "SpiderMan",
                url: "./assets",
            },
            {
                id: "batman",
                title: "BatMan",
                url: "./",
            },
            {
                id: "ironman",
                title: "IronMan",
                url: "",
            },
        ];
        let previousXPosition = -60;

        for(var item of thumbnail){
            const posX = previousXPosition + 25;
            const posY = 10;
            const posZ = -40;
            previousXPosition = posX;

            const borderEl = this.create_border(position, item.id)

            const thumbnailEl = this.create_thumbnail(item)
            borderEl.appendChild(thumbnailEl)

            const titleEl = this.create_title(position, item)

            this.placesContainer.appendChild(borderEl)
        }
    },
    create_border: function(position, id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id)
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry",{
            primitive: "ring",
            radiusInner: 9,
            radiusOuter: 10,
        });
        entityEl.setAttribute("material",{
            color: "#0077CC",
            opacity: 1,
        });
    },
    create_thumbnail: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive: "circle",
            radius: 9,
        });
        entityEl.setAttribute("material", { src: item.url });
    },
    create_title: function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#e65100",
          value: item.title,
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        
        return entityEl;
      },
});
