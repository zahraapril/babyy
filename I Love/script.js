$(document).ready(function () {
    /*
     * Main variables
     */
    var content = [{
        title: "HALLOO SAYANGGGG!!",
        desc: ""
    }, {
        title: "Happy Brithday",
        desc: "masyaallah bertepatan 28 febuari cowoku bertambah usia yahahahhaa TUA JIRRR, semoga dengan bertambahnya usiamu ini kamu bisa menjadi pribadi yang baik lagi, sehat selalu mental dan fisiknya, dilancarkan rezekinya, dipermudah segala urusannya, senantiasa bahagia, bisa belajar memaafkan kesalahan orang lain, semoga selalu mendapat hal hal baik dimanapun kamu berada, selalu dikelilingi orang baiK, dikuatkan imannya, dan diberikan keselamatan dimanapun kamu berada."
    }, {
       title: "",
       desc: "dimana tanggal 28 ini ada aku yang pertamakalinya mengucapkan selamat ulang tahun selamat bertambah usia dihari yang spesial kamu ini, semoga ditahun tahun berikutnya pun aku tetap diberikan kesempatan untuk berada disisi kamu, seterusnya. Terimakasih sudah memilihku sebagai cewe kamu dari banyaknya jutaan miliaran wanita di bumi ini, Senang sekali rasanya di kehidupan yang hanya sekali ini, aku bisa berkesempatan bertemu dengan sosok sehangat dirimu, terimakasih telah memperlakukanku dengan sangat baik ya sayanggg, kamu membuatku merasa sangat dicintaii.. kalo dibandingkan dengan yang lain aku memang wanita yang gada apa apanya. tapii..  tunggu aku yaa jangan sama wanita lain, aku mau berubah agar kamu dapat versi terbaiknya akuu.. bawa aku disetiap episode hidup kamu, aku selalu ingin menjadi orang yang menemani mu disetiap sedih, senang, bahagia, maupun terluka.meski aku ga selalu hadir di dekatmu aku akan selalu mendukungmu dengan doa dan harapan terbaik. ketika kamu merasa lelah atau ragu, ingatlah bahwa ada seseorang yang selalu percaya padamu, yang selalu bangga dengan setiap langkahmu baik itu besar maupun kecil. kamu boleh menjadi lelaki yang paling kuat dikeluarga kamu, kamu boleh menjadi laki laki paling tegar diluar sana, tapi disaat kamu sama aku.. kamu boleh menjadi anak kecil yang paling manja jadi diri kamu sendiri saat bersamaku ya batakkk."
    }, {
        title: "",
        desc: "betul memang aku hanya orang baru yang ingin banget mencintaimu lebih dari masalalumu, mungkin aku ga sempurnaa.. namun percayalah aku akan menghargaimu lebih dari mantanmu itu. aku memang ga janji bakal hidup lebih lama tapi aku janji selama aku masih hidup masih bernafas aku akan selalu ada untuk orang orang yang aku sayangg aku cintaii. jadikan aku tempat pulang dalam keadaan apapun itu aku selalu ada buat kamuu, KAMU ADALAH LAKI LAKI PERTAMA YANG AKU RAYAKAN WALAUPUN AKU SAMA MASALALUKU ITU BERTAHUN TAHUN TAPI AKU GAPERNAH SAMA SEKALI NGERAYAIN DIA. mungkin tuhan paham mana yang pantas dirayakan dan mana yang ga pantas untuk dirayakan jadi tuhan gakasih aku pikiran untuk merayakan orang itu. aku harap disetiap langkah kamu dimanapun kamu berada selalu inget aku. walaupun doaku ga sekuat doa mamamu aku akan selalu mendoakanmu, meminta keselamatan, kesehatan, dan kelancaranmu, aku akan jadi wanita yg selalu bangga sama apa yg kamu capai. berproseslah dengan tenang yaa sayangg.. kejar semua impian kamu demi masa depanmu dan demi orang tuamu, apapun nanti hasilnya yang penting kamu sudah berusaha dan dimataku kamu tetap pria yang hebattt"
    }, {
        title: "",
        desc: "jangan selalu ucap kata kamu gagal, kamu ga gagal sayang... kamu lelaki yang sangat hebat, kamu laki laki terbaikku, aku bangga memiliki kamuu. dan aku gatau nanti endingnya seperti apa, tapi aku mohon posisiku jangan digantiin sama siapapun ya, percayalah versiku saat ini adalah versi yang terbaik yang belum pernah aku berikan ke siapapun, tetap sama aku ya? kita lewati rintangannya sama sama. aku udah mulai bisa percaya kamu batak dan aku mohon tolong jangan seperti masalalu aku, maaf aku belum bisaa sepenuhnya ngelupain kejadian itu tapi aku akan berusaha selama kamu masih sama aku, aku akan ga melibatkan trauma mantan aku itu dikamu. semangat kuliahnyaaa yaaaa jangan ngeluh banyak orang orang yang pengen seperti kamu :) Hidup dan tumbuhlah dengan baik, jangan menyakiti siapapun agar doanya tidak mempersulit hidupmu.      I LOVE YOU BATAKKKKK.... AKU SAYANG BATAKKKK"
 }];
    var currentPage = 0;
    //generate content
    for (var i = 0; i < content.length; i++) {
        //split content letters to array
        for (var obj in content[i]) {
            //if string
            if (typeof content[i][obj] === "string") {
                content[i][obj] = content[i][obj].split("");
                continue;
            }
            //if array (grouped text)
            else if (typeof content[i][obj] === "object") {
                var toPush = [];
                for (var j = 0; j < content[i][obj].length; j++) {
                    for (var k = 0; k < content[i][obj][j].length; k++) {
                        toPush.push(content[i][obj][j][k]);
                    }
                }
                content[i][obj] = toPush;
            }
        }
        //set text to 
        $("#segments").append("<div class=\"letters-wrap mutable\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
        setText();
        //clone to data
        $("#segments").append("<div class=\"letters-wrap position-data\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
        setText();
    }
    //initial arrangement
    arrangeCurrentPage();
    scrambleOthers();
    /*
     * Event handlers
     */
    $(window).resize(function () {
        arrangeCurrentPage();
        scrambleOthers();
    });
    $("#soup-prev").hide();
    $("#soup-prev").click(function () {
        $("#soup-next").show();
        currentPage--;
        if (currentPage === 0) {
            $("#soup-prev").hide();
        }
        arrangeCurrentPage();
        scrambleOthers();
    });
    $("#soup-next").click(function () {
        $("#soup-prev").show();
        currentPage++;
        if (currentPage === content.length - 1) {
            $("#soup-next").hide();
        }
        arrangeCurrentPage();
        scrambleOthers();
    });
    /*
     * Functions
     */
    function arrangeCurrentPage() {
        for (var i = 0; i < content[currentPage].title.length; i++) {
            $(".mutable:eq(" + currentPage + ") > .soup-title > .letter").eq(i).css({
                left: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().left + "px",
                top: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().top + "px",
                color: "#111",
                zIndex: 9001
            });
        }
        for (var i = 0; i < content[currentPage].desc.length; i++) {
            $(".mutable:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).css({
                left: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().left + "px",
                top: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().top + "px",
                color: "#111",
                zIndex: 9001
            });
        }
    }

    function setText() {
        var j;
        for (j = 0; j < content[i].title.length; j++) {
            $(".soup-title").last().append("<span class=\"letter\">" + content[i].title[j] + "</span>");
        }
        for (j = 0; j < content[i].desc.length; j++) {
            $(".soup-desc").last().append("<span class=\"letter\">" + content[i].desc[j] + "</span>");
        }
    }

    function scrambleOthers() {
        for (var i = 0; i < content.length; i++) {
            //don't scramble currentPage
            if (currentPage === i)
                continue;
            var parts = [
                ["title", ".soup-title"],
                ["desc", ".soup-desc"]
            ];
            //apply to .title h1s and .desc ps
            for (var j = 0; j < parts.length; j++) {
                for (var k = 0; k < content[i][parts[j][0]].length; k++) {
                    //define random position on screen
                    var randLeft = Math.floor(Math.random() * $(window).width());
                    var randTop = Math.floor(Math.random() * $(window).height());
                    //defining boundaries
                    var offset = $(".position-data").eq(currentPage).offset();
                    var bounds = {
                        left: offset.left,
                        top: offset.top,
                        right: $(window).width() - offset.left,
                        bottom: $(window).height() - offset.top
                    };
                    var middleX = bounds.left + $(".position-data").eq(currentPage).width() / 2;
                    var middleY = bounds.top + $(".position-data").eq(currentPage).height() / 2;
                    //finally, apply all the scrambles
                    $(".mutable:eq(" + i + ") > " + parts[j][1] + " > .letter").eq(k).css({
                        left: randLeft,
                        top: randTop,
                        color: "#DDD",
                        zIndex: "initial"
                    });
                }
            }
        }
    }
});