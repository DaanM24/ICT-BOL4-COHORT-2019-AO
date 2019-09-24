var kaasgeel = prompt("Is de kaas geel? Voer 1 in voor ja. Voer 2 in voor nee.");

if(kaasgeel == 1){
    var kaasgaten = prompt("Zitten er gaten in? 1 = ja. 2 = nee.")
    if(kaasgaten == 1){
        var kaasduur = prompt("Is de kaas belachelijk duur? 1 = ja. 2 = nee.")
        if(kaasduur == 1){
            document.write("Uw kaas is Emmenthaler")
        }else if(kaasduur == 2){
            document.write("Uw kaas is Leerdammer")
        }else{
            document.write("error")
        }
    }else if(kaasgaten == 2){
        var kaashard = prompt("Is de kaas hard als steen? 1= ja. 2= nee.")
        if(kaashard == 1){
            document.write("Uw kaas is Pamigiano Reggiano")
        }else if(kaashard == 2){
            document.write("Uw kaas is Goudse kaas")
        }else{
            document.write("error")
        }
    }
}else if(kaasgeel == 2){
    var kaasschimmel = prompt("Heeft de kaas blauwe schimmels? 1 = ja. 2 = nee.")
    if(kaasschimmel == 1){
        var kaaskorst = prompt("Heeft de kaas een korst? 1 = ja. 2 = nee.")
        if(kaaskorst == 1){
            document.write("Uw kaas is Bleu de Rochbaron")
        }
        if(kaaskorst == 2){
            document.write("Uw kaas is Foume d'Ambert")
        }

    }else if(kaasschimmel == 2){
        var kaaskorst = prompt("Heeft de kaas een korst? 1 = ja. 2 = nee.")
        if(kaaskorst == 1){
            document.write("Uw kaas is Camembert")
        }else if(kaaskorst == 2){
            document.write("Uw kaas is Mozzarella")
        }else{
            document.write("error")
        }
    }else{
        document.write("error")
    }
}else{
    document.write("error")
}

