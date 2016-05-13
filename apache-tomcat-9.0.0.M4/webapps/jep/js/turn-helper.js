function readJsonFile(url) {

    var result = null;
    $.ajax( {
        async: false,
        //url: "game1.json",
        url: url,
        dataType: "json",
        success: function(data){
            result = data;
        }
    });
    return result;
}

function setCatsToHtml(cats) {

     $(document).ready(function() {
         for (i=0; i<25; i++) {
             if (cats[i] != null) {
                 $("p#id_" + i + "_q").text(cats[i].question);
                 $("p#id_" + i + "_a0").text("A) " + cats[i].answers[0]);
                 $("p#id_" + i + "_a1").text("B) " + cats[i].answers[1]);
                 $("p#id_" + i + "_a2").text("C) " + cats[i].answers[2]);
             }
         }

         if (cats["CategoryA"] != null) {
             $("figure#id_catA").text(cats["CategoryA"]);
         }
         if (cats["CategoryB"] != null) {
             $("figure#id_catB").text(cats["CategoryB"]);
         }
         if (cats["CategoryC"] != null) {
             $("figure#id_catC").text(cats["CategoryC"]);
         }
         if (cats["CategoryD"] != null) {
             $("figure#id_catD").text(cats["CategoryD"]);
         }
         if (cats["CategoryE"] != null) {
             $("figure#id_catE").text(cats["CategoryE"]);
         }
     });

     var selectedList = readJsonFile("./status/answered_id");
     for (i=0; i<selectedList.ans.length; i++) {
         	var ans = selectedList.ans[i];
             if (ans <= 4) {
                 $("img#id_cat" + ans).attr("src", "./img/File_100_gray.jpg");
             }
             else if (ans >= 5 && ans <= 9) {
                 $("img#id_cat" + ans).attr("src", "./img/File_200_gray.jpg");
             }
             else if (ans >= 10 && ans <= 14) {
                 $("img#id_cat" + ans).attr("src", "./img/File_300_gray.jpg");
             }
             else if (ans >= 15 && ans <= 19) {
                 $("img#id_cat" + ans).attr("src", "./img/File_400_gray.jpg");
             }
             else if (ans >= 20 && ans <= 24) {
                 $("img#id_cat" + ans).attr("src", "./img/File_500_gray.jpg");
             }
     }
}
