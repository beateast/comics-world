AFRAME.registerComponent("side_view", {
    init: function(){
        this.createPlaces()
    },
    tick: function(){
        const places_container = document.querySelector("#places-container")
        const {state} = places_container.getAttribute("tour")
        if(state === "view" || state === "change-view"){
            this.el.setAttribute("visible", true)
        }else{
            this.el.setAttribute("visible", false)
        }

    },
    createPlaces: function(){
        const side_view_container = document.querySelector("#side_view_container")
        let XPosition = -150
        let YPosition = 30
        for(var i = 1; i <= 4; i++ ){
            const position = {
                x: (XPosition = XPosition + 50),
                y: (YPosition = YPosition + 2),
                z: -40
            }
            const entity1 = this.createThumbnail(position, i)
            side_view_container.appendChild(entity1)
        }
    },
    createThumbnail: function(position, i){
        const e1 = document.createElement("a-entity")
        e1.setAttribute("visible", true)
        e1.setAttribute("id", `place-${i}`)
        e1.setAttribute("geometry", {
            primitive: "circle",
            radius: 2.5
        });
        e1.setAttribute("material", {
            src: "./assets/helicopter.png",
            opacity: 0.9
        });
        e1.setAttribute("position", position)
        e1.setAttribute("cursor-listener", {})
        return e1
    }
})