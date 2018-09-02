$(document).ready(function(){ 

    $(".nav-content").clone().appendTo(".nav-sidebar"); // Copie le contenu de la barre de navigation pour la sidebar

    $("li > a").each(function(index, element){

        $(element).click(function(){ // Lorsqu'on clique sur un élément de la liste des <a> (dans la navigation) ...

            $("section").each(function(index, element){ // Cache toutes les sections 
                $(element).addClass("hidden");  
            })

            $($(this).attr("href")).removeClass("hidden"); // Dévoile la section qui correspond à l'élément

            $(".nav-sidebar").removeClass("sidebar_activated");  // Replie la sidebar si elle était active
            $("#overlay").addClass("hidden"); // Et enlève l'overlay si il était présent

            $(".skillbar-bar").css("width","0"); // Remet à 0 la taille des barres de compétences pour pouvoir relancer l'animation plus tard

        })

    })

    $("#btn_hamburger").click(function(){ // Active la sidebar et l'overlay lorsqu'on appuye sur le btn hamburger

        $(".nav-sidebar").toggleClass("sidebar_activated");

        $("#overlay").removeClass("hidden");
        
    })
    
    $("#overlay").click(function(){ // Referme la sidebar et l'overlay lorsqu'on appuye dessus
      
        $("#overlay").addClass("hidden");
    
        $(".nav-sidebar").removeClass("sidebar_activated");
    
    })

    $(".btn_competences").click(function(){ // Lance l'animation des barres de compétences lorsque l'on a appuyé sur un des boutons de nav "Compétences" (plusieurs donc une classe)

        $(".skillbar").each(function(){
            
            $(this).find(".skillbar-bar").animate(
            {
                width:$(this).attr("data-percent")
            },2000);        
            
        });
    
    });

    $("#btn_mailto").hover(
        
        function(){
            ($(this).html("M'envoyer un mail"));
        }, function(){
            ($(this).html("aloisdeschepper@gmail.com"));
        }

    );

});